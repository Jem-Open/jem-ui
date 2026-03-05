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

All other dependencies (Radix UI components, Lucide icons, etc.) are bundled with the package, so you don't need to install them separately.

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

After your PR is approved and merged to `main`, create a release to publish the changes:

1. Navigate to [https://github.com/Jem-Open/jem-ui/releases/new](https://github.com/Jem-Open/jem-ui/releases/new)
2. Create a new tag (e.g., `v0.2.1`) and click "Create new tag on publish"
3. Click "Generate release notes" for an automatic changelog
4. Review and publish the release

The GitHub Actions workflow will automatically build and publish to npm.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](./LICENSE) file for details.
