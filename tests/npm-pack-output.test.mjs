import assert from "node:assert/strict"
import { spawnSync } from "node:child_process"
import { chmod, mkdtemp, rm, writeFile } from "node:fs/promises"
import { tmpdir } from "node:os"
import { delimiter, dirname, join, resolve } from "node:path"
import test from "node:test"
import { fileURLToPath } from "node:url"
import { parseNpmPackFilename } from "../scripts/parse-npm-pack-output.mjs"

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..")

test("parser accepts npm 11 array pack JSON", () => {
  const packOutput = JSON.stringify([
    { filename: "jem-open-jem-ui-0.4.2.tgz" },
  ])

  assert.equal(
    parseNpmPackFilename(packOutput),
    "jem-open-jem-ui-0.4.2.tgz",
  )
})

test("parser rejects malformed pack JSON", () => {
  assert.throws(
    () => parseNpmPackFilename("not-json"),
    /Invalid npm pack --json output: expected valid JSON/,
  )
})

test("parser rejects pack results without a filename", () => {
  for (const packOutput of [
    JSON.stringify([{}]),
    JSON.stringify({ "@jem-open/jem-ui": {} }),
    JSON.stringify({ "@jem-open/jem-ui": { filename: "" } }),
    JSON.stringify({}),
  ]) {
    assert.throws(
      () => parseNpmPackFilename(packOutput),
      /Invalid npm pack --json output: missing package filename/,
    )
  }
})

test("smoke harness accepts npm 12 package-keyed pack JSON", async () => {
  const fakeBin = await mkdtemp(join(tmpdir(), "jem-ui-fake-npm-"))
  const fakeNpm = join(fakeBin, "npm")

  try {
    await writeFile(
      fakeNpm,
      `#!/usr/bin/env node
const { mkdirSync, writeFileSync } = require("node:fs")
const { join } = require("node:path")

const [command, argument] = process.argv.slice(2)

if (command === "pack") {
  process.stdout.write(JSON.stringify({
    "@jem-open/jem-ui": { filename: "jem-open-jem-ui-0.4.2.tgz" },
  }))
} else if (command === "run" && argument === "build") {
  const dist = join(process.cwd(), "node_modules/@jem-open/jem-ui/dist")
  mkdirSync(dist, { recursive: true })
  writeFileSync(join(dist, "index.mjs"), '\"use client\";')
  writeFileSync(join(dist, "index.js"), '\"use client\";')
}
`,
      "utf8",
    )
    await chmod(fakeNpm, 0o755)

    const result = spawnSync(
      process.execPath,
      [join(repoRoot, "scripts/run-next16-rsc-smoke.mjs")],
      {
        cwd: repoRoot,
        encoding: "utf8",
        env: {
          ...process.env,
          PATH: `${fakeBin}${delimiter}${process.env.PATH ?? ""}`,
        },
      },
    )

    assert.equal(result.status, 0, result.stderr)
  } finally {
    await rm(fakeBin, { recursive: true, force: true })
  }
})
