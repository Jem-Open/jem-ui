import { execFileSync } from "node:child_process"
import { cp, mkdtemp, readFile, rm } from "node:fs/promises"
import { tmpdir } from "node:os"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const fixtureRoot = resolve(repoRoot, "tests/fixtures/next16-rsc")
const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm"
const temporaryRoot = await mkdtemp(join(tmpdir(), "jem-ui-next16-rsc-"))
const appRoot = join(temporaryRoot, "app")

function run(args, options = {}) {
  return execFileSync(npmCommand, args, {
    cwd: options.cwd ?? repoRoot,
    encoding: options.encoding,
    stdio: options.encoding ? "pipe" : "inherit",
    env: {
      ...process.env,
      NEXT_TELEMETRY_DISABLED: "1",
    },
  })
}

try {
  await cp(fixtureRoot, appRoot, { recursive: true })

  let packageSpec = process.env.JEM_UI_PACKAGE_SPEC
  if (!packageSpec) {
    const packOutput = run(
      ["pack", "--json", "--ignore-scripts", "--pack-destination", temporaryRoot],
      { encoding: "utf8" },
    )
    const [{ filename }] = JSON.parse(packOutput)
    packageSpec = join(temporaryRoot, filename)
  }

  run(["ci", "--ignore-scripts", "--no-audit", "--no-fund"], { cwd: appRoot })

  // Saving the package into the temporary manifest prevents Next.js's
  // automatic TypeScript dependency install from pruning the package.
  run(
    [
      "install",
      "--save-exact",
      "--ignore-scripts",
      "--no-audit",
      "--no-fund",
      packageSpec,
    ],
    { cwd: appRoot },
  )

  run(["run", "build"], { cwd: appRoot })

  for (const filename of ["index.mjs", "index.js"]) {
    const installedEntry = await readFile(
      join(appRoot, "node_modules/@jem-open/jem-ui/dist", filename),
      "utf8",
    )
    if (!installedEntry.startsWith('"use client";')) {
      throw new Error(`Installed dist/${filename} is missing the client directive`)
    }
  }
} finally {
  await rm(temporaryRoot, { recursive: true, force: true })
}
