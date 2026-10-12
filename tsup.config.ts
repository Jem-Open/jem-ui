import { rm } from "node:fs/promises"

import { build } from "esbuild"
import { defineConfig, type Options } from "tsup"

import { sharedOptions } from "./tsup.shared"

const clientEntry = "src/index.ts"
const clientDirective = { js: '"use client";' }

// Where the per-module entry files are written, and deleted from once the build finishes.
const facadeDir = "_facades"

// Every source module the client barrel reaches that contributes code, found by letting esbuild
// bundle the barrel once (it understands the `@/` aliases) rather than by listing files. So a
// component added to the barrel is split out without anyone editing this file, and a file the barrel
// never reaches (`sidebar.tsx` needs Next.js) is never built. A module that contributes no code — a
// directory barrel like `logo/index.ts`, which only re-exports — is left out: as an entry it would
// add nothing but an empty chunk.
async function modulesReachedFrom(entry: string): Promise<string[]> {
  const { metafile } = await build({
    entryPoints: [entry],
    bundle: true,
    write: false,
    metafile: true,
    format: "esm",
    outdir: "dist",
    packages: "external",
    tsconfig: sharedOptions.tsconfig,
    logLevel: "silent",
  })

  return Object.values(metafile.outputs).flatMap((output) =>
    Object.entries(output.inputs)
      .filter(([input, { bytesInOutput }]) => input !== entry && bytesInOutput > 0)
      .map(([input]) => input),
  )
}

export default defineConfig(async (): Promise<Options[]> => {
  // The two builds below run concurrently, and tsup's per-build `clean` would let each delete the
  // other's output (the declaration worker clears every .d.ts it finds when it starts). So dist is
  // emptied once, here, before either begins. `build:lib:nonclient` runs after this and adds to it.
  await rm("dist", { recursive: true, force: true })

  const modules = await modulesReachedFrom(clientEntry)

  return [
    // ESM, as one module per source file.
    //
    // A single-file client entry costs a consumer every component on every page: once a bundler
    // keeps the module for the one export a page uses, it keeps all of the module's imports, and
    // several dependencies (`vaul`, `sonner`) declare no `sideEffects`, so they stay too. Split into
    // modules behind a re-exporting barrel, the package's `"sideEffects": ["**/*.css"]` lets a
    // bundler skip every module — and with it every dependency — that no used export reaches.
    //
    // esbuild has no preserve-modules mode, so this gets there through code splitting. Each module
    // is an entry point; code reached from more than one entry moves into a shared chunk; and since
    // the barrel reaches every module, every module's code lands in a chunk of its own, which the
    // barrel imports from. (One more chunk holds esbuild's object-spread helpers, which the ES2017
    // target needs.) The per-module entry files are then only re-exports of those chunks that
    // nothing imports, so they are deleted after the build. esbuild writes the relative imports
    // between chunks with their `.mjs` extension, which webpack requires of an `.mjs` import.
    //
    // `banner` puts the directive at the top of every chunk as well as the barrel. A chunk carries
    // no directive of its own, and Next.js honours one only as the first statement of the file.
    {
      ...sharedOptions,
      name: "client",
      format: ["esm"],
      entry: {
        index: clientEntry,
        ...Object.fromEntries(
          modules.map((module) => [`${facadeDir}/${module.replace(/\.[^/.]+$/, "")}`, module]),
        ),
      },
      splitting: true,
      dts: { ...sharedOptions.dts, entry: { index: clientEntry } },
      banner: clientDirective,
      clean: false,
      treeshake: false,
      esbuildOptions(options) {
        options.chunkNames = "chunks/[hash]"
      },
      async onSuccess() {
        await rm(`dist/${facadeDir}`, { recursive: true, force: true })
      },
    },
    // CommonJS stays one file. A `require` consumer gets no tree-shaking from a split build, so
    // splitting it would only add files.
    {
      ...sharedOptions,
      name: "client-cjs",
      format: ["cjs"],
      entry: { index: clientEntry },
      banner: clientDirective,
      clean: false,
      treeshake: false,
    },
  ]
})
