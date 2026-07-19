# Next.js 16 RSC-Safe Package Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish `@jem-open/jem-ui@0.4.1` with a client-marked component barrel, a server-safe helper entry, and a packed-package Next.js 16 Turbopack release gate.

**Architecture:** Build the root component barrel separately with a tsup JavaScript banner so its ESM and CommonJS artifacts begin with `"use client";`. Build the Tailwind preset and pure `./server` helper entry in a second, unmarked pass; a packed-tarball App Router fixture verifies the real npm shape under default Next.js 16 Turbopack.

**Tech Stack:** TypeScript 5, React 19, Next.js 16.2.10, Turbopack, tsup 8.5.1/esbuild, Node.js built-in test runner, npm, GitHub Actions.

## Global Constraints

- Target package version is exactly `0.4.1`; the release tag is exactly `v0.4.1`.
- The regression fixture uses exactly Next.js `16.2.10`, React `19.2.7`, and React DOM `19.2.7`.
- `dist/index.mjs` and `dist/index.js` must begin with the exact executable directive `"use client";`.
- `next build` in the fixture must use Next.js 16's default Turbopack path and must never pass `--webpack`.
- The existing root component and helper exports remain source-compatible for Client Components.
- Server-side calls to `cn`, `buttonVariants`, `iconButtonVariants`, `dividerVariants`, `tagVariants`, and `alertVariants` use `@jem-open/jem-ui/server`.
- `@jem-open/jem-ui/server` must not import React, Radix UI, Lucide, TanStack Table, React Day Picker, Sonner, or Vaul.
- `@jem-open/jem-ui/tailwind-preset` and `@jem-open/jem-ui/server` remain unmarked regular modules.
- Jem Hub changes are a separate post-publication pull request; this plan changes only the `jem-ui` repository.
- Preserve the user's untracked `AGENTS.md`; never stage or modify it.

---

## File map

### Build and verification

- Modify `tsup.config.ts`: client-only root build with a `"use client";` banner and one clean pass.
- Create `tsup.shared.ts`: shared tsup formats, declarations, source maps, externals, and compiler settings.
- Create `tsup.nonclient.config.ts`: unmarked Tailwind-preset and server-entry build, run after the client build without cleaning.
- Create `tests/package-boundaries.test.mjs`: source, emitted-artifact, export-map, dependency-boundary, release-metadata, and workflow assertions.
- Create `scripts/run-next16-rsc-smoke.mjs`: pack or install the requested package in an isolated temporary fixture and run default `next build`.
- Create `tests/fixtures/next16-rsc/*`: pinned minimal Next.js 16 App Router application.
- Modify `package.json`: build sequencing, verification scripts, export map, version, and prepublish gate.
- Modify `package-lock.json`: root version and the generated fixture lock.

### Server-safe API

- Modify `src/index.ts`: add the source client boundary while preserving root exports.
- Create `src/server.ts`: pure server-safe public exports only.
- Create `components/forms/button.variants.ts`: `buttonVariants` and `iconButtonVariants` without React imports.
- Create `components/data-display/divider.variants.ts`: `dividerVariants` without React imports.
- Create `components/data-display/tag.variants.ts`: `tagVariants` without React imports.
- Create `components/feedback/alert.variants.ts`: `alertVariants` without React imports.
- Modify the four matching component files to consume and re-export the pure variant definitions.
- Modify `components/forms/input.tsx`: add the missing intrinsic client boundary for `SearchInput`.

### CI, documentation, and release

- Modify `.github/workflows/pr-build.yml`: run the packed Next.js 16 RSC gate on pull requests.
- Modify `.github/workflows/publish.yml`: run the same gate before npm publication.
- Create `CHANGELOG.md`: document all changes since `v0.4.0`.
- Modify `README.md`: document RSC imports, the server helper path, dependency packaging, and the `v0.4.1` release example.
- Reference the approved `docs/superpowers/specs/2026-07-19-next16-rsc-safe-package-design.md` as the scope authority.

---

### Task 1: Prove and fix the root client boundary

**Files:**
- Create: `tests/package-boundaries.test.mjs`
- Create: `scripts/run-next16-rsc-smoke.mjs`
- Create: `tests/fixtures/next16-rsc/package.json`
- Create: `tests/fixtures/next16-rsc/package-lock.json`
- Create: `tests/fixtures/next16-rsc/tsconfig.json`
- Create: `tests/fixtures/next16-rsc/next.config.mjs`
- Create: `tests/fixtures/next16-rsc/app/layout.tsx`
- Create: `tests/fixtures/next16-rsc/app/page.tsx`
- Create: `tsup.shared.ts`
- Create: `tsup.nonclient.config.ts`
- Modify: `tsup.config.ts:1-42`
- Modify: `src/index.ts:1`
- Modify: `components/forms/input.tsx:1`
- Modify: `package.json:29-38`

**Interfaces:**
- Consumes: the existing package root `@jem-open/jem-ui` and tsup's `banner: { js: string }` option.
- Produces: `npm run verify:rsc`, `npm run test:boundaries`, `npm run test:rsc`, and a client-marked root artifact used by every later task.

- [ ] **Step 1: Install the repository baseline**

Run:

```bash
npm ci
```

Expected: dependencies install from `package-lock.json` and `npm run build:lib` has access to tsup.

- [ ] **Step 2: Add failing source and artifact boundary tests**

Create `tests/package-boundaries.test.mjs`:

```js
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
```

Add these temporary test commands to `package.json` while leaving the existing `build:lib` command unchanged:

```json
"test:boundaries": "node --test tests/package-boundaries.test.mjs",
"test:rsc": "node scripts/run-next16-rsc-smoke.mjs"
```

- [ ] **Step 3: Add the packed Next.js 16 regression fixture**

Create `tests/fixtures/next16-rsc/package.json`:

```json
{
  "name": "jem-ui-next16-rsc-smoke",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "next build"
  },
  "dependencies": {
    "next": "16.2.10",
    "react": "19.2.7",
    "react-dom": "19.2.7"
  }
}
```

Create `tests/fixtures/next16-rsc/tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "plugins": [{ "name": "next" }]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

Create `tests/fixtures/next16-rsc/next.config.mjs`:

```js
/** @type {import("next").NextConfig} */
const nextConfig = {}

export default nextConfig
```

Create `tests/fixtures/next16-rsc/app/layout.tsx`:

```tsx
import type { ReactNode } from "react"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

Create `tests/fixtures/next16-rsc/app/page.tsx` with no client directive:

```tsx
import { Button, Table, Tooltip } from "@jem-open/jem-ui"

export default function Page() {
  return (
    <main>
      <Tooltip>
        <Button>RSC-safe client boundary</Button>
      </Tooltip>
      <Table />
    </main>
  )
}
```

Generate and commit the fixture lockfile:

```bash
npm install --package-lock-only --ignore-scripts --no-audit --no-fund --prefix tests/fixtures/next16-rsc
```

Expected: `tests/fixtures/next16-rsc/package-lock.json` pins the full Next.js 16 fixture graph without creating a committed `node_modules` directory.

- [ ] **Step 4: Add the isolated packed-package smoke harness**

Create `scripts/run-next16-rsc-smoke.mjs`:

```js
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
  run(
    [
      "install",
      "--no-save",
      "--ignore-scripts",
      "--no-audit",
      "--no-fund",
      "--package-lock=false",
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
```

- [ ] **Step 5: Run the regression tests against the current package and record the red state**

Run:

```bash
npm run build:lib
npm run test:boundaries
```

Expected: `test:boundaries` fails because `src/index.ts`, `components/forms/input.tsx`, `dist/index.mjs`, and `dist/index.js` lack the required exact directive.

Then run:

```bash
npm run test:rsc
```

Expected: Next.js 16's default build fails while evaluating the unmarked package in the server graph, with the observed `createContext is not a function` failure or an equivalent missing-client-boundary error.

- [ ] **Step 6: Split the client and non-client tsup builds and inject the directive**

Create `tsup.shared.ts`:

```ts
import type { Options } from "tsup"

export const sharedOptions = {
  format: ["cjs", "esm"],
  dts: {
    compilerOptions: {
      incremental: false,
    },
  },
  tsconfig: "tsconfig.build.json",
  splitting: false,
  sourcemap: true,
  external: [
    "react",
    "react-dom",
    "tailwindcss",
    "@radix-ui/react-accordion",
    "@radix-ui/react-avatar",
    "@radix-ui/react-checkbox",
    "@radix-ui/react-dialog",
    "@radix-ui/react-dropdown-menu",
    "@radix-ui/react-label",
    "@radix-ui/react-popover",
    "@radix-ui/react-progress",
    "@radix-ui/react-radio-group",
    "@radix-ui/react-select",
    "@radix-ui/react-slot",
    "@radix-ui/react-switch",
    "@radix-ui/react-tabs",
    "@radix-ui/react-tooltip",
    "@tanstack/react-table",
    "class-variance-authority",
    "clsx",
    "date-fns",
    "lucide-react",
    "react-day-picker",
    "sonner",
    "tailwind-merge",
    "vaul",
  ],
  minify: false,
} satisfies Options
```

Replace `tsup.config.ts` with the client build:

```ts
import { defineConfig } from "tsup"

import { sharedOptions } from "./tsup.shared"

export default defineConfig({
  ...sharedOptions,
  name: "client",
  entry: {
    index: "src/index.ts",
  },
  banner: {
    js: '"use client";',
  },
  clean: true,
  treeshake: false,
})
```

Create `tsup.nonclient.config.ts`:

```ts
import { defineConfig } from "tsup"

import { sharedOptions } from "./tsup.shared"

export default defineConfig({
  ...sharedOptions,
  name: "non-client",
  entry: {
    "tailwind-preset": "src/tailwind-preset.ts",
  },
  clean: false,
  treeshake: true,
})
```

Make the first line of both `src/index.ts` and `components/forms/input.tsx` exactly:

```ts
"use client";
```

Replace the library-related `package.json` scripts with:

```json
"build:lib": "npm run build:lib:client && npm run build:lib:nonclient",
"build:lib:client": "tsup --config tsup.config.ts",
"build:lib:nonclient": "tsup --config tsup.nonclient.config.ts",
"test:boundaries": "node --test tests/package-boundaries.test.mjs",
"test:rsc": "node scripts/run-next16-rsc-smoke.mjs",
"verify:rsc": "npm run build:lib && npm run test:boundaries && npm run test:rsc",
"prepublishOnly": "npm run build:lib && npm run test:boundaries"
```

The client build runs first and cleans once. The non-client build runs second with `clean: false`, so it cannot erase `dist/index.*` and cannot receive the client banner.

- [ ] **Step 7: Run the root-boundary suite and verify green**

Run:

```bash
npm run verify:rsc
```

Expected: source and artifact boundary tests pass; the temporary app reports a successful Next.js 16 production build using Turbopack; page-data collection completes without `createContext` errors.

Run:

```bash
git diff --check
```

Expected: no whitespace errors.

- [ ] **Step 8: Commit the tested root-boundary change**

```bash
git add package.json tsup.config.ts tsup.shared.ts tsup.nonclient.config.ts src/index.ts components/forms/input.tsx scripts/run-next16-rsc-smoke.mjs tests/package-boundaries.test.mjs tests/fixtures/next16-rsc
git commit -m "fix: mark package root as an RSC client boundary"
```

Expected: the commit contains no `AGENTS.md` change.

---

### Task 2: Add the server-safe helper API

**Files:**
- Create: `src/server.ts`
- Create: `components/forms/button.variants.ts`
- Create: `components/data-display/divider.variants.ts`
- Create: `components/data-display/tag.variants.ts`
- Create: `components/feedback/alert.variants.ts`
- Modify: `components/forms/button.tsx:4-46,107-132,156`
- Modify: `components/data-display/divider.tsx:2-33,111`
- Modify: `components/data-display/tag.tsx:4-30,107`
- Modify: `components/feedback/alert.tsx:4-24,113`
- Modify: `tsup.nonclient.config.ts:7-9`
- Modify: `package.json:10-27`
- Modify: `tests/package-boundaries.test.mjs`
- Modify: `tests/fixtures/next16-rsc/app/page.tsx`

**Interfaces:**
- Consumes: `npm run verify:rsc` and the unmarked non-client build from Task 1.
- Produces: `@jem-open/jem-ui/server` with six callable helpers; component files continue exporting the same helper names through the client root.

- [ ] **Step 1: Extend the tests with the server-safe contract**

Change the filesystem import in `tests/package-boundaries.test.mjs` to:

```js
import { access, readFile } from "node:fs/promises"
```

Append:

```js
function moduleSpecifiers(source) {
  return [
    ...source.matchAll(/(?:from\s+|import\s*\(|require\()\s*["']([^"']+)["']/g),
  ].map((match) => match[1])
}

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
```

Replace `tests/fixtures/next16-rsc/app/page.tsx` with:

```tsx
import { Button, Table, Tooltip } from "@jem-open/jem-ui"
import { buttonVariants, cn } from "@jem-open/jem-ui/server"

export default function Page() {
  return (
    <main className={cn("p-4", buttonVariants({ variant: "primary", size: "large" }))}>
      <Tooltip>
        <Button>RSC-safe client boundary</Button>
      </Tooltip>
      <Table />
    </main>
  )
}
```

- [ ] **Step 2: Run the new contract tests and record the red state**

Run:

```bash
npm run build:lib
npm run test:boundaries
```

Expected: the boundary suite fails because `package.json` has no `./server` export and `dist/server.*` does not exist.

Run:

```bash
npm run test:rsc
```

Expected: the fixture fails with `ERR_PACKAGE_PATH_NOT_EXPORTED` for `@jem-open/jem-ui/server`.

- [ ] **Step 3: Move button variants into a pure module**

Create `components/forms/button.variants.ts` by moving the definitions unchanged:

```ts
import { cva } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold leading-24 transition-all disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-navy-900",
  {
    variants: {
      variant: {
        default: "bg-primary-navy-900 text-white hover:bg-secondary-pink-900 active:bg-secondary-pink-500 disabled:bg-greyscale-surface-disabled disabled:text-greyscale-text-disabled",
        primary: "bg-primary-navy-900 text-white hover:bg-secondary-pink-900 active:bg-secondary-pink-500 disabled:bg-greyscale-surface-disabled disabled:text-greyscale-text-disabled",
        secondary: "bg-secondary-pink-900 text-white hover:bg-neutral-cream hover:text-secondary-pink-900 active:bg-neutral-cream active:text-primary-navy-900 disabled:bg-greyscale-surface-disabled disabled:text-greyscale-text-disabled",
        destructive: "bg-red-700 text-white hover:bg-red-600 active:bg-red-800 focus-visible:ring-red-600 disabled:bg-greyscale-surface-disabled disabled:text-greyscale-text-disabled",
        approve: "bg-green-700 text-white hover:bg-green-600 active:bg-green-800 focus-visible:ring-green-600 disabled:bg-greyscale-surface-disabled disabled:text-greyscale-text-disabled",
        outline: "border border-greyscale-border bg-white text-greyscale-text-title hover:bg-secondary-pink-300 hover:border-secondary-pink-300 active:bg-secondary-pink-200 active:border-secondary-pink-200 active:text-primary-navy-600 disabled:bg-greyscale-surface-disabled disabled:text-greyscale-text-disabled disabled:border-transparent",
        subtle: "bg-neutral-cream text-secondary-pink-900 hover:bg-secondary-pink-50 active:bg-secondary-pink-50 active:text-secondary-pink-500 disabled:bg-greyscale-surface-disabled disabled:text-greyscale-text-disabled",
        ghost: "text-greyscale-text-title hover:bg-neutral-50",
        link: "text-secondary-pink-900 underline-offset-4 hover:underline hover:text-secondary-pink-600",
      },
      size: {
        default: "h-10 px-4 gap-2 text-sm",
        xs: "h-6 gap-1 rounded-md px-2 text-xs",
        sm: "h-7 px-4 gap-1.5 [font-size:var(--font-size-xxs)]",
        small: "h-7 px-4 gap-1.5 [font-size:var(--font-size-xxs)]",
        medium: "h-8 px-4 gap-2 text-xs",
        lg: "h-10 px-4 gap-2 text-sm",
        large: "h-10 px-4 gap-2 text-sm",
        icon: "size-10",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 rounded-md",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

const iconButtonVariants = cva(
  "inline-flex items-center justify-center transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-navy-900 bg-white text-greyscale-text-title border border-greyscale-border hover:bg-neutral-100 hover:border-neutral-100",
  {
    variants: {
      size: {
        default: "size-10",
        small: "size-7",
        medium: "size-8",
        large: "size-10",
      },
      shape: {
        square: "rounded-md",
        circle: "rounded-full",
      },
    },
    defaultVariants: {
      size: "default",
      shape: "square",
    },
  },
)

export { buttonVariants, iconButtonVariants }
```

In `components/forms/button.tsx`, replace the CVA import and add the pure definitions import:

```ts
import type { VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { buttonVariants, iconButtonVariants } from "./button.variants"
```

Delete the original `const buttonVariants = cva(...)` and `const iconButtonVariants = cva(...)` blocks. Keep the existing bottom export unchanged:

```ts
export { Button, IconButton, buttonVariants, iconButtonVariants }
```

- [ ] **Step 4: Move divider, tag, and alert variants into pure modules**

Create `components/data-display/divider.variants.ts`:

```ts
import { cva } from "class-variance-authority"

const dividerVariants = cva("shrink-0", {
  variants: {
    orientation: {
      horizontal: "w-full h-px",
      vertical: "h-full w-px",
    },
    variant: {
      default: "bg-[--greyscale-border-default]",
      subtle: "bg-[--greyscale-border-disabled]",
      strong: "bg-[--greyscale-border-darker]",
      primary: "bg-[--primary-border-default]",
      secondary: "bg-[--secondary-border-default]",
    },
    spacing: {
      none: "",
      sm: "",
      md: "",
      lg: "",
    },
  },
  compoundVariants: [
    { orientation: "horizontal", spacing: "sm", className: "my-2" },
    { orientation: "horizontal", spacing: "md", className: "my-4" },
    { orientation: "horizontal", spacing: "lg", className: "my-8" },
    { orientation: "vertical", spacing: "sm", className: "mx-2" },
    { orientation: "vertical", spacing: "md", className: "mx-4" },
    { orientation: "vertical", spacing: "lg", className: "mx-8" },
  ],
  defaultVariants: {
    orientation: "horizontal",
    variant: "default",
    spacing: "none",
  },
})

export { dividerVariants }
```

Create `components/data-display/tag.variants.ts`:

```ts
import { cva } from "class-variance-authority"

const tagVariants = cva(
  "inline-flex items-center justify-center rounded-full px-xs py-xxxs text-xs font-semibold w-fit whitespace-nowrap shrink-0 gap-xxxs transition-colors [&>svg]:size-3.5",
  {
    variants: {
      variant: {
        default: "bg-primary-navy-900 text-white",
        success: "bg-green-50 text-green-600",
        processing: "bg-blue-50 text-blue-600",
        pending: "bg-yellow-50 text-yellow-600",
        failed: "bg-red-50 text-red-600",
        drafted: "bg-neutral-100 text-greyscale-text-caption",
        outline: "bg-white border border-greyscale-border text-greyscale-text-title",
        "outline-navy": "bg-white border border-primary-navy-200 text-primary-navy-900",
        neutral: "bg-neutral-100 text-greyscale-text-title",
        pink: "bg-secondary-pink-50 text-secondary-pink-900",
        "pink-text": "bg-transparent text-secondary-pink-900",
        lime: "bg-lime-50 text-lime-600",
        purple: "bg-purple-50 text-purple-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export { tagVariants }
```

Create `components/feedback/alert.variants.ts`:

```ts
import { cva } from "class-variance-authority"

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 flex flex-col gap-1",
  {
    variants: {
      variant: {
        default: "bg-neutral-50 border-greyscale-border",
        success: "bg-green-50 border-green-600",
        warning: "bg-orange-50 border-orange-600",
        destructive: "bg-red-50 border-red-600",
        note: "bg-yellow-50 border-yellow-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export { alertVariants }
```

Update the three component imports and keep their existing exports:

```ts
// components/data-display/divider.tsx
import type { VariantProps } from "class-variance-authority"
import { dividerVariants } from "./divider.variants"

// components/data-display/tag.tsx
import type { VariantProps } from "class-variance-authority"
import { tagVariants } from "./tag.variants"

// components/feedback/alert.tsx
import type { VariantProps } from "class-variance-authority"
import { alertVariants } from "./alert.variants"
```

Delete the matching in-component `cva(...)` definitions and remove `cva` from each import. Do not change any class string or default variant.

- [ ] **Step 5: Add the pure public entry and package export**

Create `src/server.ts`:

```ts
export { buttonVariants, iconButtonVariants } from "../components/forms/button.variants"
export { dividerVariants } from "../components/data-display/divider.variants"
export { tagVariants } from "../components/data-display/tag.variants"
export { alertVariants } from "../components/feedback/alert.variants"
export { cn } from "../lib/utils"
```

Add `server` to `tsup.nonclient.config.ts`:

```ts
entry: {
  server: "src/server.ts",
  "tailwind-preset": "src/tailwind-preset.ts",
},
```

Add `./server` to `package.json` immediately after the root export:

```json
"./server": {
  "import": {
    "types": "./dist/server.d.mts",
    "default": "./dist/server.mjs"
  },
  "require": {
    "types": "./dist/server.d.ts",
    "default": "./dist/server.js"
  }
},
```

- [ ] **Step 6: Run type, artifact, and Next.js integration verification**

Run:

```bash
npm run verify:rsc
npx tsc --noEmit
npm run build-storybook
```

Expected: all commands pass; `dist/server.*` exists, imports only CVA/clsx/tailwind-merge, has no client directive, and the fixture calls server helpers while rendering root client components.

- [ ] **Step 7: Commit the server-safe API**

```bash
git add package.json src/server.ts tsup.nonclient.config.ts tests/package-boundaries.test.mjs tests/fixtures/next16-rsc/app/page.tsx components/forms/button.tsx components/forms/button.variants.ts components/data-display/divider.tsx components/data-display/divider.variants.ts components/data-display/tag.tsx components/data-display/tag.variants.ts components/feedback/alert.tsx components/feedback/alert.variants.ts
git commit -m "feat: add server-safe helper exports"
```

Expected: root helper exports remain present and no variant class string changes.

---

### Task 3: Gate and document the 0.4.1 release

**Files:**
- Modify: `tests/package-boundaries.test.mjs`
- Modify: `package.json:3,29-43`
- Modify: `package-lock.json:3,9`
- Modify: `.github/workflows/pr-build.yml:31-35`
- Modify: `.github/workflows/publish.yml:24-28`
- Create: `CHANGELOG.md`
- Modify: `README.md:13-20,56-67,105-114`

**Interfaces:**
- Consumes: the single `npm run verify:rsc` gate from Tasks 1 and 2.
- Produces: versioned release metadata and CI workflows that cannot publish without the packed Next.js 16 smoke build.

- [ ] **Step 1: Add a failing release-gate assertion**

Append to `tests/package-boundaries.test.mjs`:

```js
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
```

Run:

```bash
npm run test:boundaries
```

Expected: failure because the package is still `0.4.0`, both workflows lack `verify:rsc`, and `CHANGELOG.md` does not exist.

- [ ] **Step 2: Bump the package and lockfile without creating a tag**

Run:

```bash
npm version 0.4.1 --no-git-tag-version
```

Expected: `package.json` and the root record in `package-lock.json` both report `0.4.1`; Git has no `v0.4.1` tag yet.

- [ ] **Step 3: Add the changelog**

Create `CHANGELOG.md`:

```markdown
# Changelog

All notable changes to `@jem-open/jem-ui` are documented here.

## [0.4.1] - 2026-07-19

### Added

- Added `@jem-open/jem-ui/server` for calling `cn` and exported CVA variant helpers from React Server Components.
- Added a packed-package Next.js 16.2.10 App Router smoke build using default Turbopack to pull-request and publish checks.
- Added `disabledDates` support to DatePicker so consumers can constrain selectable dates.

### Fixed

- Marked the published ESM and CommonJS component barrels with `"use client";`, preventing Radix and other client-only dependencies from entering the React server module graph.
- Added the missing source client boundary to the hook-bearing SearchInput module.

### Changed

- Documented the RSC serialization contract and corrected dependency packaging guidance.

[0.4.1]: https://github.com/Jem-Open/jem-ui/compare/v0.4.0...v0.4.1
```

- [ ] **Step 4: Put the RSC smoke command in PR and publish CI**

In `.github/workflows/pr-build.yml`, replace the existing library build step with:

```yaml
      - name: Verify Next.js 16 RSC compatibility
        run: npm run verify:rsc
```

In `.github/workflows/publish.yml`, replace the existing library build step with:

```yaml
      - name: Verify Next.js 16 RSC compatibility
        run: npm run verify:rsc
```

Keep `npm publish --provenance --access public` unchanged. During publication, `prepublishOnly` reruns the build and fast artifact tests; the expensive packed Next build has already passed in the preceding workflow step.

- [ ] **Step 5: Correct and extend README usage guidance**

Replace the bundled-dependency sentence under Peer Dependencies with:

```markdown
All other dependencies (Radix UI components, Lucide icons, and related runtime packages) are installed automatically as regular package dependencies. They are externalized from the Jem UI build rather than copied into a consumer bundle.
```

Add this section after the component example:

````markdown
## Next.js App Router and React Server Components

The package root is a client boundary, so Server Components can import and render Jem UI components directly:

```tsx
import { Button, Table, Tooltip } from "@jem-open/jem-ui"

export default function Page() {
  return <Button>Continue</Button>
}
```

Props passed from a Server Component to Jem UI must be serializable. Put non-serializable callbacks or component constructors, such as a Lucide icon component function, behind your own Client Component boundary.

Callable class helpers used during server rendering come from the server-safe subpath:

```tsx
import { buttonVariants, cn } from "@jem-open/jem-ui/server"

export default function Page() {
  return <main className={cn("p-4", buttonVariants({ variant: "primary" }))} />
}
```

Root imports of these helpers remain supported inside Client Components. Server Components should use `/server` so they do not attempt to call through a client reference.
````

Change the release example in the Publishing section from `v0.2.1` to `v0.4.1`.

- [ ] **Step 6: Run the release tests and complete verification**

Run:

```bash
npm run test:boundaries
npm run verify:rsc
npm run lint
npx tsc --noEmit
npm run build-storybook
npm pack --dry-run
git diff --check
```

Expected: every command passes; the dry-run tarball includes `dist/index.*`, `dist/server.*`, declarations, source maps, `src/styles.css`, and npm's automatic README/LICENSE/package metadata; test fixtures and repository scripts are excluded by the `files` allowlist.

- [ ] **Step 7: Commit the release preparation**

```bash
git add package.json package-lock.json CHANGELOG.md README.md .github/workflows/pr-build.yml .github/workflows/publish.yml tests/package-boundaries.test.mjs
git commit -m "chore: prepare 0.4.1 RSC-safe release"
```

Expected: `git status --short` shows only the user's untracked `AGENTS.md`.

---

### Task 4: Review, publish the branch, and make the pull request green

**Files:**
- Review: all changes relative to base commit `9a77467`
- Modify only when a concrete review or CI failure has a reproduced test

**Interfaces:**
- Consumes: the three tested commits from Tasks 1-3.
- Produces: a reviewed pull request whose required checks are green and which is ready to merge.

- [ ] **Step 1: Invoke the final verification skill and rerun fresh evidence**

Use `superpowers:verification-before-completion`, then run:

```bash
npm ci
npm run lint
npx tsc --noEmit
npm run verify:rsc
npm run build-storybook
npm pack --dry-run
git diff --check
git status --short
```

Expected: every command exits zero; status contains no tracked modifications and may contain only `?? AGENTS.md`.

- [ ] **Step 2: Invoke the code-review skill against the exact branch range**

Use `superpowers:requesting-code-review` with base `9a77467` and head `HEAD`. Confirm the review covers directive placement, package exports, pure helper dependencies, temporary-directory cleanup, fixture fidelity, CI gates, documentation, and changelog completeness.

For each actionable finding, first add or tighten a failing assertion, reproduce it, implement the smallest fix, rerun the focused test, and rerun `npm run verify:rsc`. Commit verified review fixes with:

```bash
git add -u
git commit -m "fix: address RSC package review"
```

If there are no actionable findings, create no review-fix commit.

- [ ] **Step 3: Push the feature branch and open the pull request**

Run:

```bash
git push -u origin codex/rsc-safe-next16
gh pr create --base main --head codex/rsc-safe-next16 --title "fix: make jem-ui RSC-safe for Next.js 16" --body "Marks the published component barrel as a client boundary, adds a server-safe helper subpath, and gates releases with a packed Next.js 16 Turbopack build. Prepares @jem-open/jem-ui v0.4.1."
```

Expected: GitHub returns a pull-request URL targeting `main`.

- [ ] **Step 4: Watch and repair the pull request until green**

Run:

```bash
gh pr checks codex/rsc-safe-next16 --watch
```

Expected: PR Build completes successfully, including lint, type-check, packed Next.js 16 RSC verification, and Storybook.

If a check fails, use `github:gh-fix-ci`, reproduce the failure locally, add a failing regression assertion when applicable, fix it, rerun the affected command plus `npm run verify:rsc`, commit, push, and watch checks again. Stop only when all required checks are green or GitHub requires user-controlled approval.

---

### Task 5: Publish and verify `@jem-open/jem-ui@0.4.1`

**Files:**
- Release the merged `main` commit; do not create new source changes in this task.

**Interfaces:**
- Consumes: the merged green pull request from Task 4.
- Produces: GitHub release/tag `v0.4.1`, npm package `@jem-open/jem-ui@0.4.1`, and a successful published-package Next.js 16 smoke build.

- [ ] **Step 1: Verify the merged remote state before tagging**

Run:

```bash
git fetch origin
git show origin/main:package.json
git tag --list v0.4.1
```

Expected: remote `main` shows version `0.4.1`; the final command prints nothing because the release tag does not exist yet.

- [ ] **Step 2: Create the repository-native GitHub release**

Run:

```bash
gh release create v0.4.1 --target main --title "v0.4.1" --generate-notes
```

Expected: GitHub creates the lightweight `v0.4.1` tag and release, which triggers `.github/workflows/publish.yml`.

- [ ] **Step 3: Watch the publish workflow to completion**

Run:

```bash
gh run watch "$(gh run list --workflow publish.yml --branch v0.4.1 --limit 1 --json databaseId --jq '.[0].databaseId')" --exit-status
```

Expected: the Publish Package workflow passes its Next.js 16 gate and completes the provenance-enabled public npm publish.

- [ ] **Step 4: Verify the registry package and its real Turbopack behavior**

Run:

```bash
npm view @jem-open/jem-ui@0.4.1 version
JEM_UI_PACKAGE_SPEC=@jem-open/jem-ui@0.4.1 node scripts/run-next16-rsc-smoke.mjs
```

Expected: npm reports `0.4.1`; the harness confirms both installed entries begin with `"use client";` and completes a default-Turbopack Next.js 16 build from the registry package.

- [ ] **Step 5: Record the consumer handoff without modifying Jem Hub here**

Report the published version and release URL, then open a separate Jem Hub change that bumps the dependency, removes `--webpack` from `dev` and `build`, removes the rationale from `next.config.mjs` and `CONTEXT.md`, and verifies its own default-Turbopack production build. Keep the middleware-to-proxy migration independent.
