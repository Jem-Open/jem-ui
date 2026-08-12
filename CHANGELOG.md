# Changelog

All notable changes to `@jem-open/jem-ui` are documented here.

## [0.7.0] - 2026-08-12

### Added

- **`DataTable` paginates with `TablePager`.** Its `DataTablePagination` was a separate inline composition — a differently sized Select (`h-8 w-[70px]`), plain `Button`s instead of `IconButton`s, its own spacing — so the default table and a hand-built one paginated with visibly different controls. It is now a thin adapter from TanStack's state onto the one pager. `showFirstLast` and `showPageReadout` are on there, and its 10/20/30/40/50 size options kept, so nothing it could do before is lost.
- `TablePager` gained optional `showFirstLast` (jump arrows, hidden below `lg`) and `showPageReadout` (`Page X of Y`), both off by default — they exist so `DataTable` could adopt it without a capability regression. Its size panel opens upward (`side="top"`), since a pager sits at the foot of its table.
- **`IconChip`** — the tinted tile that starts a row in a worklist or attention list, where the tone says how urgent before any text is read. Promoted from jem-hub's `TONE_CHIP`, a map of class strings applied by hand at each call site with the geometry retyped per consumer (`size-9` in one list, `size-8` in another). Five tones plus three sizes, glyph scaled by the tile. Exported from `./server` too — no `"use client"`, no Radix.
- Added **`--pink-1100`** (`#b03a52`), the muted rose the product's Beta pill uses. It extends the ramp rather than sitting outside it: lightness continues down (49.2% → 45.9%), saturation down (56.2% → 50.4%), hue steady in the 345–351° band the whole dark end occupies.
- Added `--chip-border-critical` / `-warning` / `-info` / `-success`. A tinted tile needs a soft rule of its own hue or it dissolves into a white card, and the product got there with a literal hex at `/30` — because Tailwind computes alpha only on a literal, so `var(--x)/30` emits no rule at all. These are those blends resolved, so the component references tokens instead of literals that had to be kept in step by hand. The nearest existing ramp steps are 23–51/255 away, which is why they are not reused.
- Added the `beta` and `waitlist` `Tag` tones. jem-hub had both as a `TrackTag` wrapper that took `variant="neutral"` for its geometry and replaced both colours at the call site — a workaround for these not existing, which can now be deleted. `beta` uses the new `--pink-1100` (5.29:1 on its fill). The app had that colour as an off-token literal (`#b03a52`) because the pink ramp topped out at the brand coral and the red ramp jumped to a fire-engine red; `--pink-1000` was the nearest token but 21/255 away and visibly cooler, so the rose became a token rather than an approximation. `waitlist` is navy on soft blue rather than `processing`'s bright blue, so pending reads differently from active (11.17:1).
- **`TablePager`** — a `start–end of total` range, a rows-per-page control, and prev/next arrows. This is the pager most tables actually want and the one this library was missing: jem-hub arrived at exactly this composition independently and uses it in **42** tables, against **2** using numbered `Pagination`. Both controls keep a job — numbered links for a short browsable set where jumping to page 7 means something, this for the long list you step through, where the page number carries no information. Controlled-only by design: paging state stays with the consumer, because reading `?page` would put `next/navigation` inside a design system. Omit `onPageSizeChange` to hide the size control for a list whose size is fixed by its source, and it renders nothing at `count === 0`.

### Changed

- **`Tabs` is the 2.0 segmented control.** The track is a `rounded-full` `--greyscale-surface-subtle` rail rather than a `rounded-lg` pink one, and the active tab is a `--brand-pink-soft` pill rather than a white one — the pink moves from the track to the selection. Promoted from jem-hub, which had built exactly this by hand in nine places because the library's tabs did not look like it. The `line` variant is unchanged.
- **Secondary buttons use the light pink fill** (`--brand-pink-soft`) rather than the saturated brand pink, matching the active tab pill so "soft pink surface" means one thing across the system. Hover and active deepen through `--pink-200` / `--pink-300` — the previous `neutral-cream` hover was *lighter* than its own resting colour, so the interaction read backwards. Navy label throughout: 13.77 / 12.15 / 10.94:1.
- The `Tabs` list's padding moved out of the shared base into each variant. tailwind-merge cannot tell that a custom spacing key like `p-xxxs` conflicts with `p-0`, so it kept both and the base won — leaving the `line` variant with 4px of padding it had explicitly asked to drop, which is what held its indicator 5px clear of the rail.
- The `line` tab variant's active indicator now sits **on** the rail rather than floating above it, and stays navy (`--primary-surface-default`) — an underline reads as a continuation of the line it sits on, where the segmented variant's pink pill reads as a selection. The old approach used the trigger's own `border-b-2` pulled down by `-mb-px`, which cannot reach the rail while the list centres its items; the indicator is now a bar pinned to a `self-stretch` trigger, which lands on the rail regardless of alignment.
- **`Pagination` marks the current page with a soft filled pill** instead of an outlined circle, matching the active tab so "this is selected" reads the same in both controls. The shape did not change: `size="icon"` already inherited the base `rounded-full`, so the links were always circular — the outline was the dated part.
- **`SearchInput` is a pill.** It was already filled and borderless; `rounded-lg` was the only thing left, which is why jem-hub's `SearchField` wrapper exists solely to override `[&_input]:!rounded-full` at 29 call sites. That wrapper can now be deleted.

### Fixed

- **`app/globals.css` declared its own copy of all 235 tokens**, with no link to `src/styles.css` — so the theme this repo renders and the theme consumers receive were maintained by hand and diverged. It was 29 tokens behind, and four of the ones it had held OLD values: `--greyscale-text-caption`, `--error-text-label`, `--warning-text-label` and `--success-text-label` still carried the figures that fail AA after the shipped sheet was corrected. The contrast story added to demonstrate that fix was therefore computing its ratios from the stale values and displaying the failure it was meant to prove gone. It now imports the shipped stylesheet: one source of tokens.
- Satoshi is self-hosted for this repo's Storybook (`app/fonts`, Fontshare FFL alongside it), so reviewers see the real display face rather than a system fallback. The declaration is in `app/globals.css`, not the shipped sheet — the package still names families and leaves loading to the consumer.
- The Typography story pointed at `var(--font-heading)` / `var(--font-body)`, which are not tokens — the real names are `--font-family-*`. It rendered in neither face while labelling its specimen "Inter". Fixed across 25 references, with a new **The pairing** story showing Satoshi and Inter side by side across the weight axis.
- **`--font-family-heading` and `--font-family-body` named the wrong faces** — Inter for headings and Manrope for body, matching nothing that ships. The pairing is **Satoshi** for display and **Inter** for running text. jem-hub overrides both tokens in its own `globals.css`, which is why the wrong defaults went unnoticed: the one consumer never used them, and any other would have got Manrope body copy. The tokens name the families only — loading stays the consumer's job, and this package deliberately does not redistribute either font file.
- `SearchInput`'s placeholder was `--primary-navy-400`, which computes to **1.58:1** on its own `--primary-navy-100` fill — invisible. It is `--primary-navy-600` now (5.70:1), matching the Select placeholder fixed in 0.5.0.
- The inactive tab label is `--primary-navy-600` (5.96:1 on the track). jem-hub's hand-rolled version used `--greyscale-text-caption`, which is 4.35:1 there and fails AA — so the library takes the app's design without taking its defect.

## [0.6.0] - 2026-08-12

### Added

- **Absorbed the five components that existed only in `@jem2.0/ui`**: `Card` (with its header/title/description/content/footer parts and `cardVariants`), `Figure`, `Stat`, `AskAiLink` and `Stepper`. Every other component in that package was a duplicate of one already here. Each arrives with a story. `Card`, `Figure` and `Stat` carry no `"use client"` and no Radix import, so they are exported from `./server` as well — jem-hub imports `Figure` and `Stat` through that entry from 12 Server Components.
- **Absorbed the 18 tokens that package owned and this one lacked**: the 15 `--brand-*` values, `--font-family-heading` / `--font-family-body`, and `--greyscale-border-subtle`. The brand palette is registered as a `brand` colour group and `greyscale.border.subtle` as a key, so `bg-brand-lavender`, `text-brand-green-dark` and `border-greyscale-border-subtle` all emit — verified against a compiled probe.

### Fixed

- **`font-heading` and `font-body` were emitting a rule pointing at an undefined variable.** The preset has always registered them against `--font-family-heading` / `--font-family-body`, but this package never defined those tokens — so a consumer got a `font-family: var(...)` that resolved to nothing, and only jem-hub escaped it because `@jem2.0/ui` supplied the values. Defining them here fixes the library standalone, including its own Storybook.
- Raised the browser test timeout to 45s. The Button and Tag contrast matrices measure every variant in a real browser and were passing at 10s / failing at 15s depending on how many story files ran alongside — a timeout that moves with unrelated additions is a landmine rather than a signal.

### Changed

- `./server`'s dependency contract now permits `react/jsx-runtime`. The entry exports components now rather than only pure functions, and a Server Component's job is to return JSX; the import carries no client-only API. A bare `react` import would still be a failure, since that means a hook.

## [0.5.0] - 2026-08-12

### Changed

- **Select is a pill by default.** The trigger is now `rounded-full`, borderless, filled with `--navy-100` and softly shadowed, deepening to `--navy-200` on hover and while open; the panel is `rounded-2xl`, borderless and separated by `shadow-popover`. This is the Jem 2.0 design, which jem-hub has been applying with `!important` overrides at every call site — the library now ships it, so those overrides can be deleted. Minor rather than patch: any consumer relying on the squared, bordered trigger will see it change.
- Focus is now carried by the ring alone and the open state by the fill, because a borderless control cannot express either with a border.
- The Select placeholder moved from `--greyscale-text-disabled` to `--primary-navy-600`. On the new fill the old value computes to 1.40:1 — invisible. The new one is 5.70:1 and still reads lighter than a selected value (8.14:1), so the distinction survives.

### Added

- Added the elevation tokens `--shadow-popover`, `--shadow-popover-strong` and `--shadow-card`, with `boxShadow` keys to match. Three of the tokens `@jem2.0/ui` owned and this package lacked; the borderless Select panel needs one, and a shadow class that emitted nothing would have left it with no edge at all.
- Added a **Pill states** story covering rest, hover/open, focus-visible and disabled side by side, with the computed contrast for each. A borderless control communicates through fill, so its states cannot be judged from a resting screenshot.

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
