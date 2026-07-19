import assert from "node:assert/strict"
import { access, readFile } from "node:fs/promises"
import test from "node:test"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..")

async function read(relativePath) {
  return readFile(resolve(repoRoot, relativePath), "utf8")
}

function moduleSpecifiers(source) {
  return [
    ...source.matchAll(/(?:from\s+|import\s*\(|require\()\s*["']([^"']+)["']/g),
  ].map((match) => match[1])
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

test("built root entries begin with the client directive", async () => {
  for (const relativePath of ["dist/index.mjs", "dist/index.js"]) {
    const output = await read(relativePath)
    assert.equal(
      output.startsWith('"use client";'),
      true,
      `${relativePath} must begin with \"use client\";`,
    )
  }
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

  const permittedDependencies = [
    "class-variance-authority",
    "clsx",
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

test("0.4.1 release metadata runs the RSC gate in CI", async () => {
  const packageJson = JSON.parse(await read("package.json"))
  assert.equal(packageJson.version, "0.4.1")
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
  assert.match(changelog, /## \[0\.4\.1\] - 2026-07-19/)
  assert.match(changelog, /Next\.js 16/)
})
