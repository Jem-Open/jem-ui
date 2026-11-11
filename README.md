# @jem-open/jem-ui

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

JEM Design System - A React component library with Tailwind CSS design tokens, built with Radix UI primitives and Class Variance Authority.

## Installation

```bash
npm install @jem-open/jem-ui
```

### Peer Dependencies

The following peer dependencies are required:

```bash
npm install react@"^18.0.0 || ^19.0.0" react-dom@"^18.0.0 || ^19.0.0" tailwindcss@"^3.4.0"
```

All other dependencies (Radix UI components, Lucide icons, and related runtime packages) are installed automatically as regular package dependencies. They are externalized from the Jem UI build rather than copied into a consumer bundle.

## Integration

### 1. Import the CSS Variables

In your app's root or layout file:

```tsx
import "@jem-open/jem-ui/styles.css"
```

This CSS file defines the design tokens (colors, spacing, etc.) as CSS variables.

### 2. Configure Tailwind

Update your `tailwind.config.js` to use the JEM preset:

```js
const jemPreset = require("@jem-open/jem-ui/tailwind-preset");

module.exports = {
  presets: [jemPreset],
  content: [
    "./src/**/*.{ts,tsx}",
    // IMPORTANT: Include jem-ui dist files so Tailwind scans them
    "./node_modules/@jem-open/jem-ui/dist/**/*.{js,mjs}",
  ],
  // your other config...
};
```

**Why both steps are needed:**

- The **CSS variables** (`styles.css`) provide the actual color values referenced by the preset
- The **Tailwind preset** extends Tailwind with JEM design tokens (colors, spacing, etc.)
- The **content path** ensures Tailwind scans the library's components for class names

## Example

```tsx
import { Button } from "@jem-open/jem-ui"

export default function App() {
  return (
    <Button variant="primary" size="lg">
      Click me
    </Button>
  )
}
```

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

## Translating the built-in text

Jem UI has no i18n dependency and no locale of its own. The components that write their own text take it from props, and every prop is optional — omit them all and a component renders the English it always has.

| Component | Props | What they reach |
| --- | --- | --- |
| `DatePicker`, `DateRangePicker` | `locale`, `messages` | `locale` is a date-fns `Locale`: how the date reads, the month and weekday names, the first day of the week. `messages` is `CalendarMessages`: the calendar's accessible names. |
| `Calendar` | `locale`, `messages` | As above. |
| `Upload` | `messages` | Titles, the drop hint, status announcements and the three buttons. |
| `TablePager` | `messages` | The range, the page readout, the rows-per-page label and each button's accessible name. |
| `Pagination` | `messages` | The landmark, the Previous/Next text and accessible names, and the ellipsis. Set once on `Pagination`; the parts read it. |
| `DataTable` | `messages` | The empty state, the selection count, the filter placeholder, the view menu, and the sort menu on each `DataTableColumnHeader`. Pager text nests under `pagination`. |

A message is a string with `{name}` placeholders, or a function from those values to a string:

```tsx
<TablePager
  messages={{
    ofCount: "of {count}", // "1–10 of 53"; a plural-aware formatter can pass a function instead
    nextPage: t("nextPage"),
  }}
/>
```

- **Partial is fine.** A key you leave out keeps its English, so you can translate one string at a time.
- **An existing prop still wins.** `title`, `description`, `placeholder`, `rowsPerPageLabel`, `filterPlaceholder` and a part's own `aria-label` take precedence over the matching message, so no call site changes meaning.
- **A locale changes how a date reads, never which day it is.** No value, timezone or comparison depends on it. Pass the `Locale` object (`import { fr } from "date-fns/locale"`), not a tag: the package bundles one locale, not all of them.
- **Strings cross a Server Component boundary; functions and `Locale` objects do not.** Resolve strings in a Server Component and pass them down. Anything that needs a function — an ICU formatter, a `Locale` — belongs in a Client Component, where date pickers already live because they take callbacks.

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### Local Development

Once you have cloned the repository:

1. **Install dependencies**:

```bash
npm install
```

2. **Start Storybook** for component development:

```bash
npm run storybook
```

Storybook will open at `http://localhost:6006` where you can view and interact with all components.

### Making Changes

1. **Create a feature branch** from `main`:

```bash
git checkout -b feature/your-feature-name
```

2. **Make your changes** following the existing patterns in `components/` and `stories/`

3. **Test your changes** in Storybook and ensure lint passes:

```bash
npm run lint
```

4. **Commit and push** your changes:

```bash
git add .
git commit -m "Description of your changes"
git push origin feature/your-feature-name
```

5. **Open a Pull Request** against the `main` branch

Quality checks (linting, type checking) will run automatically on your PR.

### Publishing

After your PR is approved and merged to `main`, release from `main`:

1. Add the version's section to [`CHANGELOG.md`](./CHANGELOG.md) — say **why** it changed, not just what
2. Bump `version` in `package.json` (see [choosing the number](./CONTRIBUTING.md#choosing-the-version-number))
3. Commit both as `chore(release): X.Y.Z`
4. Tag and push:

```bash
git tag vX.Y.Z
git push origin main --follow-tags
```

Pushing the tag runs [`publish.yml`](./.github/workflows/publish.yml), which checks the tag matches
`package.json`, publishes to npm, and then cuts the GitHub Release with your CHANGELOG section as
the notes. **Don't write the release notes by hand** — `CHANGELOG.md` is the source and the workflow
copies from it.

Cutting the release from the GitHub UI instead still works — the workflow updates the notes from the
CHANGELOG rather than failing on the release you already made — but the tag-push route above is
preferred, because the version bump and the tag then travel together and can't drift.

> A tag whose version disagrees with `package.json` fails the job before publishing. This is
> deliberate: `0.6.0` was bumped in `package.json`, never tagged, and so is documented in the
> CHANGELOG but absent from npm. The check exists so that can't recur.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](./LICENSE) file for details.
