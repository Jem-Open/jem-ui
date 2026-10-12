import assert from "node:assert/strict"
import { access, readdir, readFile } from "node:fs/promises"
import test from "node:test"
import { dirname, posix, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..")

async function read(relativePath) {
  return readFile(resolve(repoRoot, relativePath), "utf8")
}

function moduleSpecifiers(source) {
  return [
    ...source.matchAll(/(?:from\s+|import\s*\(|import\s+|require\()\s*["']([^"']+)["']/g),
  ].map((match) => match[1])
}

// The ESM entries tsup.nonclient.config.ts builds. Every other .mjs file in dist is client code.
const nonClientEsmEntries = ["dist/server.mjs", "dist/tailwind-preset.mjs"]

async function builtClientEsmFiles() {
  const entries = await readdir(resolve(repoRoot, "dist"), { recursive: true })
  return entries
    .filter((entry) => entry.endsWith(".mjs"))
    .map((entry) => posix.join("dist", entry.split("\\").join("/")))
    .filter((relativePath) => !nonClientEsmEntries.includes(relativePath))
    .sort()
}

// Follows relative imports from the client entry: the barrel, and every chunk it pulls in.
async function clientModuleGraph() {
  const graph = new Map()
  const pending = ["dist/index.mjs"]

  while (pending.length > 0) {
    const relativePath = pending.pop()
    if (graph.has(relativePath)) continue

    const relativeImports = moduleSpecifiers(await read(relativePath)).filter((specifier) =>
      specifier.startsWith("."),
    )
    graph.set(relativePath, relativeImports)

    for (const specifier of relativeImports) {
      pending.push(posix.join(posix.dirname(relativePath), specifier))
    }
  }

  return graph
}

test("public source client boundaries are explicit", async () => {
  for (const relativePath of ["src/index.ts", "components/forms/input.tsx"]) {
    const source = await read(relativePath)
    assert.match(
      source,
      /^"use client";\r?\n/,
      `${relativePath} must begin with an exact client directive`,
    )
  }
})

test("every built client module begins with the client directive", async () => {
  // The ESM client build is a barrel plus a chunk per component module, and Next.js reads the
  // directive module by module, so it has to open every one of them, not only the entry.
  const clientEsmFiles = await builtClientEsmFiles()
  assert.ok(clientEsmFiles.length > 1, "the ESM client build should be split into modules")

  for (const relativePath of [...clientEsmFiles, "dist/index.js"]) {
    const output = await read(relativePath)
    assert.equal(
      output.startsWith('"use client";'),
      true,
      `${relativePath} must begin with \"use client\";`,
    )
  }
})

test("the client barrel reaches every client chunk through fully specified imports", async () => {
  const graph = await clientModuleGraph()

  for (const [relativePath, relativeImports] of graph) {
    for (const specifier of relativeImports) {
      // webpack resolves an import inside an .mjs file as fully specified: no extension is guessed.
      assert.match(specifier, /\.mjs$/, `${relativePath} imports ${specifier} without its extension`)
      await access(resolve(repoRoot, posix.dirname(relativePath), specifier))
    }
  }

  // And nothing ships that the barrel cannot reach: a leftover per-module entry file or a stale
  // chunk would be published dead weight.
  assert.deepEqual([...graph.keys()].sort(), await builtClientEsmFiles())
})

test("the CommonJS client build stays a single file", async () => {
  const siblingRequires = moduleSpecifiers(await read("dist/index.js")).filter((specifier) =>
    specifier.startsWith("."),
  )
  assert.deepEqual(siblingRequires, [])
})

test("built Tailwind preset remains outside the client boundary", async () => {
  for (const relativePath of ["dist/tailwind-preset.mjs", "dist/tailwind-preset.js"]) {
    const output = await read(relativePath)
    assert.equal(output.startsWith('"use client";'), false)
  }
})

test("server helper export is present and dependency-safe", async () => {
  const packageJson = JSON.parse(await read("package.json"))

  assert.deepEqual(packageJson.exports["./server"], {
    import: {
      types: "./dist/server.d.mts",
      default: "./dist/server.mjs",
    },
    require: {
      types: "./dist/server.d.ts",
      default: "./dist/server.js",
    },
  })

  for (const relativePath of [
    "dist/server.mjs",
    "dist/server.js",
    "dist/server.d.mts",
    "dist/server.d.ts",
  ]) {
    await access(resolve(repoRoot, relativePath))
  }

  // The point of this list is that nothing CLIENT-ONLY reaches the server entry — a React hook, a
  // Radix module, anything that calls createContext at evaluation time. It is not that the entry
  // must be JSX-free.
  //
  // `react/jsx-runtime` is the JSX factory. A Server Component's whole job is to return JSX, so an
  // entry that exports components necessarily imports it; it contains no client-only API. It appears
  // here because Phase 3 of the 2.0 restyle moved Card, Figure and Stat into this entry — the three
  // absorbed components with no "use client" and no Radix import — where previously the entry held
  // only pure functions. jem-hub has been importing exactly these three from @jem2.0/ui's equivalent
  // server entry across 12 Server Components, so the arrangement is already proven in production.
  //
  // Adding `react` itself (not `react/jsx-runtime`) WOULD be a red flag: it means a hook.
  const permittedDependencies = [
    "class-variance-authority",
    "clsx",
    "react/jsx-runtime",
    "tailwind-merge",
  ].sort()

  for (const relativePath of ["dist/server.mjs", "dist/server.js"]) {
    const output = await read(relativePath)
    assert.equal(output.startsWith('"use client";'), false)
    assert.deepEqual(
      [...new Set(moduleSpecifiers(output))].sort(),
      permittedDependencies,
      `${relativePath} must import only pure helper dependencies`,
    )
  }
})

test("release metadata runs the RSC gate in CI", async () => {
  const packageJson = JSON.parse(await read("package.json"))
  // Pinned to the CHANGELOG's newest entry rather than a literal: the literal made every release
  // bump a test edit, and it failed the 0.4.3 bump for no reason other than being out of date.
  // Version-and-changelog-agree is the invariant actually worth asserting here.
  const newestDocumented = (await read("CHANGELOG.md")).match(/^## \[([^\]]+)\]/m)?.[1]
  assert.equal(
    packageJson.version,
    newestDocumented,
    "package.json version must match the newest CHANGELOG entry",
  )
  assert.equal(
    packageJson.scripts["test:boundaries"],
    "node --test tests/package-boundaries.test.mjs tests/npm-pack-output.test.mjs tests/tree-shaking.test.mjs",
  )
  assert.equal(
    packageJson.scripts.prepublishOnly,
    "npm run build:lib && npm run test:boundaries",
  )

  for (const workflow of [
    ".github/workflows/pr-build.yml",
    ".github/workflows/publish.yml",
  ]) {
    assert.match(await read(workflow), /npm run verify:rsc/)
  }

  const changelog = await read("CHANGELOG.md")
  assert.match(changelog, /## \[0\.4\.2\] - 2026-07-19/)
  assert.match(changelog, /npm 12/)
  assert.match(changelog, /## \[0\.4\.1\] - 2026-07-19/)
  assert.match(changelog, /Next\.js 16/)
})
