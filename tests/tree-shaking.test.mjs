import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import { dirname, resolve } from "node:path"
import test from "node:test"
import { fileURLToPath } from "node:url"

import { build } from "esbuild"

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..")

// Bundles a one-line consumer of the built package the way an app would: the import goes through
// the package's `exports` map to dist/index.mjs, and the package's own dependencies stay external
// so that what the bundle keeps of them shows up as import statements.
async function bundleConsumerOf(exportName) {
  const packageJson = JSON.parse(await readFile(resolve(repoRoot, "package.json"), "utf8"))
  const result = await build({
    stdin: {
      contents: `import { ${exportName} } from "${packageJson.name}"\nconsole.log(${exportName})\n`,
      resolveDir: repoRoot,
      loader: "js",
    },
    bundle: true,
    write: false,
    metafile: true,
    format: "esm",
    platform: "browser",
    external: [
      ...Object.keys(packageJson.dependencies),
      ...Object.keys(packageJson.peerDependencies),
    ],
    // esbuild warns as it drops the barrel's bare import of the shared helper chunk, which the
    // package's `sideEffects` allows. That drop is the behaviour under test, not a problem.
    logLevel: "silent",
  })

  const [output] = Object.values(result.metafile.outputs)
  return {
    code: result.outputFiles[0].text,
    dependencies: new Set(
      output.imports.filter(({ external }) => external).map(({ path }) => path),
    ),
  }
}

test("a consumer of Button gets none of the components it does not import", async () => {
  const { code, dependencies } = await bundleConsumerOf("Button")

  // Button's own dependency, so the bundle is known to hold the component asked for.
  assert.ok(dependencies.has("@radix-ui/react-slot"))

  for (const unused of ["vaul", "sonner", "@radix-ui/react-tooltip", "@radix-ui/react-dialog"]) {
    assert.equal(dependencies.has(unused), false, `a Button-only bundle imports ${unused}`)
  }

  for (const logo of ["PrimaryLogo", "SecondaryLogoRound", "SecondaryLogoSquare"]) {
    assert.equal(code.includes(`"${logo}"`), false, `a Button-only bundle contains ${logo}`)
  }
})

test("a consumer of Toaster still gets sonner", async () => {
  const { dependencies } = await bundleConsumerOf("Toaster")

  assert.ok(dependencies.has("sonner"))
})
