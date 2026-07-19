# Changelog

All notable changes to `@jem-open/jem-ui` are documented here.

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
