# Changelog

All notable changes to `@jem-open/jem-ui` are documented here.

## [0.4.4] - 2026-08-12

### Fixed

- Restored the semantic colour to five `Tag` tones that 0.4.3 rendered in near-black. Making them accessible had moved `success`, `pending`, `failed`, `pink` and `lime` to `text-primary-navy-900`, which passes contrast but discards the meaning the colour carries — a status tag is colour-coded on purpose. Each now uses the darker step of its own hue instead: `green-700` (5.35:1), `yellow-700` (5.40:1), `red-700` (5.59:1), `secondary-pink-1000` (4.70:1) and `lime-700` (5.81:1), all against their own tint and all clearing AA. `pink` is the case the new `--pink-1000` was added for: nothing in the pink ramp was darker than the brand pink, which is why navy was reached for.

## [0.4.3] - 2026-08-12

### Fixed

- Re-valued the four tokens that exist to colour text but could not meet WCAG AA as text. `--error-text-label` #ee0626 → #c20f1e, `--warning-text-label` #f94a23 → #9f5419, `--success-text-label` #009b48 → #1b7f47, and `--greyscale-text-caption` #6a7a85 → #697983. Every one now clears 4.5:1 on white and on the surface it pairs with; previously they scored 4.03:1, 3.23:1, 3.42:1 and 4.43:1 respectively. The three semantic values match the steps jem-hub's `lib/tones.ts` already renders these tones as, so the library now agrees with the product rather than being worked around by it.

### Added

- Added `npm run test:tokens`, which computes the contrast of every text token against the surfaces it pairs with and fails below 4.5:1. A colour token cannot fail a type check, a lint rule or a render test, so nothing previously could have caught the above.
- Added a **Text tokens & contrast** story that reads the CSS variables live and shows each token on white and on its own tint with the computed ratio, so the page cannot go stale the way a hardcoded table does.

## [0.4.2] - 2026-07-19

### Fixed

- Made the release smoke gate parse npm 12's package-keyed `npm pack --json` output while preserving npm 11 array compatibility and validating malformed results.

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

[0.4.2]: https://github.com/Jem-Open/jem-ui/compare/v0.4.1...v0.4.2
[0.4.1]: https://github.com/Jem-Open/jem-ui/compare/v0.4.0...v0.4.1
