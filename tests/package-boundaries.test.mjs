import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..")

async function read(relativePath) {
  return readFile(resolve(repoRoot, relativePath), "utf8")
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
