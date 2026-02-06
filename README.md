# @jem-hr/jem-ui

JEM Design System - A React component library with Tailwind CSS design tokens, built with Radix UI primitives and Class Variance Authority.

## Authentication

This package is published to GitHub Packages. To install it, you need to authenticate with a GitHub Personal Access Token (PAT).

### Create a GitHub Personal Access Token

1. Go to [GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Give it a descriptive name (e.g., "Read GitHub Packages")
4. Select the `read:packages` scope
5. Click "Generate token" and copy the token

### Configure npm

Create or edit `~/.npmrc` in your home directory:

```
//npm.pkg.github.com/:_authToken=TOKEN
@jem-hr:registry=https://npm.pkg.github.com
```

Replace `TOKEN` with your actual token. It is recommended to set it in your .zshrc file and reference in your .npmrc so it is safe to commit.

## Installation

Install the package and its peer dependencies:

```bash
npm install @jem-hr/jem-ui
```

### Required Peer Dependencies

The following are always required:

```bash
npm install react react-dom tailwindcss class-variance-authority clsx tailwind-merge lucide-react @radix-ui/react-slot
```

### Optional Peer Dependencies

Install only the components you use:

- `@radix-ui/react-accordion` - for Accordion
- `@radix-ui/react-avatar` - for Avatar
- `@radix-ui/react-checkbox` - for Checkbox
- `@radix-ui/react-dropdown-menu` - for DropdownMenu
- `@radix-ui/react-label` - for Label
- `@radix-ui/react-popover` - for Popover
- `@radix-ui/react-radio-group` - for RadioGroup
- `@radix-ui/react-select` - for Select
- `@radix-ui/react-tabs` - for Tabs
- `@tanstack/react-table` - for DataTable
- `date-fns` - for Calendar
- `react-day-picker` - for Calendar
- `sonner` - for Toaster
- `vaul` - for Drawer

## Integration

### 1. Import the CSS Variables

In your app's root or layout file:

```tsx
import "@jem-hr/jem-ui/styles.css"
```

This CSS file defines the design tokens (colors, spacing, etc.) as CSS variables.

### 2. Configure Tailwind

Update your `tailwind.config.js` to use the JEM preset:

```js
const jemPreset = require("@jem-hr/jem-ui/tailwind-preset");

module.exports = {
  presets: [jemPreset],
  content: [
    "./src/**/*.{ts,tsx}",
    // IMPORTANT: Include jem-ui dist files so Tailwind scans them
    "./node_modules/@jem-hr/jem-ui/dist/**/*.{js,mjs}",
  ],
  // your other config...
};
```

**Why both steps are needed:**

- The **CSS variables** (`styles.css`) provide the actual color values referenced by the preset
- The **Tailwind preset** extends Tailwind with JEM design tokens (colors, spacing, etc.)
- The **content path** ensures Tailwind scans the library's components for class names

## Usage

```tsx
import { Button } from "@jem-hr/jem-ui"

export default function App() {
  return (
    <Button variant="primary" size="lg">
      Click me
    </Button>
  )
}
```

## Publishing (for maintainers)

1. Create a GitHub PAT with `write:packages` scope
2. Set it as an environment variable:

```bash
export PUBLISH_TOKEN=your_github_pat
```

3. Update the version in `package.json`
4. Publish:

```bash
npm publish
```

The `prepublishOnly` script will automatically build the library before publishing.
