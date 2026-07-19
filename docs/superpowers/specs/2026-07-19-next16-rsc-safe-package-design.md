# Next.js 16 RSC-Safe Package Design

**Date:** 2026-07-19

**Status:** Design approved; written specification awaiting review

**Target release:** `@jem-open/jem-ui@0.4.1`

## Context

`@jem-open/jem-ui@0.4.0` publishes its complete component surface as one bundled entry, `dist/index.mjs`. The emitted entry has no top-level `"use client"` directive and eagerly imports client-only dependencies such as Radix UI, Sonner, Vaul, React Day Picker, and TanStack Table. Several of those dependencies call `React.createContext` while their modules are initialized.

Next.js 16 uses Turbopack by default. When a React Server Component imports any component from the package root, Turbopack places the unmarked barrel in the React server module graph and evaluates those client-only dependencies. React's server module implementation does not expose `createContext`, so the build fails during page-data collection with `TypeError: (0, o.createContext) is not a function`.

This is observable in `jemos-product` at remote `origin/main` commit `1e335fb4`, where Jem Hub has upgraded to Next.js `16.2.10` and temporarily runs both `next dev --webpack` and `next build --webpack`. Multiple Server Components import the package root, including async components that cannot simply be converted to Client Components. The webpack pin is therefore a workaround, not the target architecture.

There is a second API concern: the package root also exports callable pure helpers (`cn`, `buttonVariants`, `iconButtonVariants`, `dividerVariants`, `tagVariants`, and `alertVariants`). Once the entire root barrel is correctly marked as client-only, a Server Component can render exported components as client references, but it cannot call helper functions imported through that client boundary. The package needs a distinct server-safe path for those helpers.

## Goals

1. Make the package root safe to import from a Next.js 16 App Router Server Component under default Turbopack.
2. Preserve the existing root component API and its runtime behavior.
3. Give Server Components a supported import path for callable pure utilities and CVA variant functions.
4. Test the built and packed package shape, including the emitted directive, rather than only testing source files.
5. Prevent an npm release when the Next.js 16 compatibility smoke test fails.
6. Publish the fix as a documented patch release and provide a clear Jem Hub migration path.

## Non-goals

- Converting Jem UI into a fully granular, preserve-modules package in this patch.
- Classifying every presentational component as independently server-renderable.
- Changing component styling, variants, or public prop contracts.
- Updating Jem Hub in the same change. Jem Hub can adopt the release only after it is published.
- Combining the unrelated Jem Hub `middleware.ts` to `proxy.ts` migration with this package fix.
- Resolving the repository's Tailwind 3 peer dependency versus Tailwind 4 PostCSS plugin configuration unless the compatibility fixture proves it is part of this failure.

## Chosen architecture

### 1. Treat the root component barrel as a client boundary

`src/index.ts` will begin with a top-level `"use client";` directive. The library build will also inject or preserve that directive so both public JavaScript entries begin with it:

- `dist/index.mjs`
- `dist/index.js`

The directive must be the first executable statement in each entry. It cannot rely only on source preservation because bundlers may discard module directives while combining files. The build configuration will mark the component entry explicitly and verify the result after every build.

Only the component barrel receives this client marker. The Tailwind preset and the new server-safe entry remain regular modules. The build must clean `dist` once, then emit the client-marked and unmarked entries without one configuration deleting another configuration's output.

This keeps the patch focused and makes all current component exports safe client references, including components that transitively import context- or hook-based libraries. It also avoids relying on Turbopack tree-shaking behavior.

### 2. Add a server-safe helper subpath

The package will expose:

```ts
import {
  cn,
  buttonVariants,
  iconButtonVariants,
  dividerVariants,
  tagVariants,
  alertVariants,
} from "@jem-open/jem-ui/server"
```

The new `src/server.ts` entry will export only modules that are safe to evaluate in a React server graph. It will not import React, Radix UI, component modules, hooks, browser APIs, or packages that initialize React context.

The exported CVA definitions will move from their component files into small pure variant modules. Component implementations will import those definitions and continue to re-export them through the root barrel for backward compatibility. Existing client-side consumers therefore keep working, while Server Components use `/server` when they need to call a helper.

The `package.json` export map will provide ESM, CommonJS, and type declaration paths for `./server`, matching the existing root and Tailwind-preset conventions.

### 3. Keep intrinsic hook boundaries correct

The package-level boundary fixes public root imports, but hook-bearing source modules should still identify themselves correctly. The current `SearchInput` implementation calls `React.useState` while `components/forms/input.tsx` has no client directive. That file will receive `"use client";` as part of this patch.

The implementation will audit the modules reachable from the public barrel for the same concrete issue. This does not require adding a directive mechanically to every file: the published root remains the supported all-client component boundary, and pure helper modules must remain unmarked.

## RSC usage contract

Server Components may import and render components from `@jem-open/jem-ui`; Next.js will treat them as client references. Props crossing that boundary must follow React's serialization rules.

Callable utilities used during server rendering must come from `@jem-open/jem-ui/server`, not the client-marked root. Importing `cn` or a variant function from the root remains supported in Client Components but is not the server API.

Consumers must also avoid passing component constructor functions through the server-to-client boundary. For example, a Server Component should not pass a Lucide icon component function to a client-marked `Icon` prop. Such cases need a small Client Component wrapper or a serializable representation. This is a normal RSC constraint and is separate from the `createContext` crash.

## Build and package layout

The build will produce the following public files:

| Export | ESM | CommonJS | Boundary |
| --- | --- | --- | --- |
| `@jem-open/jem-ui` | `dist/index.mjs` | `dist/index.js` | Client-only; starts with `"use client";` |
| `@jem-open/jem-ui/server` | `dist/server.mjs` | `dist/server.js` | Server-safe; no client directive or client-only imports |
| `@jem-open/jem-ui/tailwind-preset` | `dist/tailwind-preset.mjs` | `dist/tailwind-preset.js` | Build-time configuration; unchanged |
| `@jem-open/jem-ui/styles.css` | `src/styles.css` | n/a | Stylesheet; unchanged |

Source maps and declarations continue to be emitted. Existing dependencies remain regular package dependencies and are external to the bundle; README language that currently describes all dependencies as bundled will be corrected so consumers understand the published shape.

## Verification design

### Artifact assertions

A repository script will inspect the completed build and fail unless:

1. `dist/index.mjs` begins with `"use client";`.
2. `dist/index.js` begins with `"use client";`.
3. The `server` entry exists in ESM, CommonJS, and declaration forms.
4. The built server entry does not import the root component barrel or known client-only dependencies.

Checking both module formats prevents an ESM-only fix from leaving CommonJS consumers exposed.

### Next.js 16 smoke fixture

A minimal App Router fixture will be committed under `tests/fixtures/next16-rsc`. Its versions will be pinned to Next.js `16.2.10`, React `19.2.7`, and React DOM `19.2.7`, matching the upgraded Jem Hub baseline inspected on the remote branch.

The fixture's `app/page.tsx` will be a Server Component with no `"use client"` directive and will import at least:

```ts
import { Button, Table, Tooltip } from "@jem-open/jem-ui"
```

The smoke harness will build the library, create an npm tarball in an isolated temporary directory, install that tarball into the fixture, and run `next build` with no bundler flag. On Next.js 16 this exercises default Turbopack and the package's real `exports` map and `dist` files. The temporary installation avoids accidentally resolving source files through a monorepo alias.

The fixture passes only when page-data collection completes without the `createContext` failure. No `--webpack` option or Turbopack opt-out is allowed in its scripts or CI invocation.

### Test-first implementation order

The compatibility fixture will be introduced and run against the current build first, establishing a failing baseline. The expected failure is the missing client boundary and/or the resulting Next.js server-graph `createContext` error. Packaging changes will then be made until the same test passes. Unit-level artifact assertions supplement the integration build but do not replace it.

## CI and release gates

The PR workflow will run one standard RSC compatibility command after dependency installation. That command owns the library build, artifact assertions, packed-package fixture installation, and default-Turbopack build. Existing lint, type-check, and Storybook checks remain in place.

The tag-triggered publish workflow will run the same compatibility command before `npm publish`. The local `prepublishOnly` path will also include the verified library build so a manual publish cannot skip the package-boundary checks.

The release will:

1. Bump `package.json` and `package-lock.json` to `0.4.1`.
2. Add `CHANGELOG.md` with the RSC-safety fix, the `/server` entry, the Next.js 16 smoke coverage, and the already-unreleased `disabledDates` DatePicker change present on `main` after tag `v0.4.0`.
3. Update README package-usage and release notes, including the server helper import rule.
4. Merge through the normal pull-request flow.
5. Create release tag `v0.4.1`, allowing the repository's existing OIDC npm workflow to publish the package only after all gates pass.

The repository has no separate version file or `development` release branch, so its existing tag-driven workflow is the source of truth for this patch rather than introducing a different release topology.

## Jem Hub handoff after publication

Once `0.4.1` is available from npm, Jem Hub should be changed in its own pull request:

1. Upgrade `@jem-open/jem-ui` and refresh the lockfile.
2. Remove `--webpack` from the `dev` and `build` scripts.
3. Remove the temporary webpack rationale from `next.config.mjs` and `CONTEXT.md`.
4. Update callable helper imports in Server Components to `@jem-open/jem-ui/server` if any are present.
5. Add Client Component wrappers anywhere a non-serializable component function is passed to a Jem UI component.
6. Run lint, type-check, tests, and `next build` under default Turbopack.

The Jem Hub middleware-to-proxy migration can land independently because it addresses a separate Next.js 16 deprecation.

## Risks and mitigations

- **Directive stripped during build:** inject or preserve it at the client entry and assert the exact emitted prefix in both formats.
- **Client directive leaks into server helpers or Tailwind config:** build entries with distinct boundary configuration and inspect the server output.
- **Pure helper accidentally imports a component:** isolate variants into dependency-light modules and fail artifact checks on client-only imports.
- **Fixture passes against source instead of the package:** install an npm tarball into an isolated temporary fixture.
- **Patch changes visual behavior:** move variant declarations without modifying their definitions and retain existing Storybook coverage.
- **Release contains more than the RSC fix:** document the already-merged DatePicker `disabledDates` change in the same patch changelog; defer unrelated cleanup.
- **Next.js behavior changes later:** pin the regression baseline for reproducibility, then update it deliberately in follow-up maintenance.

## Acceptance criteria

- A Next.js 16 App Router Server Component with no client directive can import and render `Button`, `Table`, and `Tooltip` from the package root and complete `next build` under default Turbopack.
- Page-data collection completes without `createContext is not a function`.
- `dist/index.mjs` and `dist/index.js` begin with `"use client";`.
- `@jem-open/jem-ui/server` exposes the documented pure helpers without importing the client barrel.
- Existing root imports remain source-compatible for Client Components.
- The package passes lint, type-check, library build, artifact assertions, the packed Next.js 16 smoke build, and Storybook build.
- PR and publish workflows run the smoke gate.
- Version `0.4.1` and `CHANGELOG.md` accurately describe the compatibility fix and all changes since `v0.4.0`.
- After the release is consumed, Jem Hub can remove its webpack pins and build successfully with default Turbopack.
