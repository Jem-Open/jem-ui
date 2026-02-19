# @jem-hr/jem-ui

JEM Design System - A React component library with Tailwind CSS design tokens, built with Radix UI primitives and Class Variance Authority.

## Usage

### Authentication

This package is published to GitHub Packages. To install it, you need to authenticate with a GitHub Personal Access Token (PAT).

#### Create a GitHub Personal Access Token

1. Go to [GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Give it a descriptive name (e.g., "Read GitHub Packages")
4. Select the `read:packages` scope
5. Click "Generate token" and copy the token

#### Configure npm

Create or edit `~/.npmrc` in your home directory:

```
//npm.pkg.github.com/:_authToken=TOKEN
@jem-hr:registry=https://npm.pkg.github.com
```

Replace `TOKEN` with your actual token. It is recommended to set it in your .zshrc file and reference in your .npmrc so it is safe to commit.

### Installation

Install the package and its peer dependencies:

```bash
npm install @jem-hr/jem-ui
```

#### Peer Dependencies

The following peer dependencies are required:

```bash
npm install react@"^18.0.0 || ^19.0.0" react-dom@"^18.0.0 || ^19.0.0" tailwindcss@"^3.4.0"
```

All other dependencies (Radix UI components, Lucide icons, etc.) are bundled with the package, so you don't need to install them separately.

### Integration

#### 1. Import the CSS Variables

In your app's root or layout file:

```tsx
import "@jem-hr/jem-ui/styles.css"
```

This CSS file defines the design tokens (colors, spacing, etc.) as CSS variables.

#### 2. Configure Tailwind

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

### Example

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

## Contributing

We welcome contributions to the JEM Design System! Contributors are expected to create their own releases after merging changes.

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

### Publishing Your Changes

After your PR is approved and merged to `main`, you should create a release to publish the changes:

1. **Navigate to the releases page** and click "Draft a new release":

   [https://github.com/Jem-HR/jem-ui/releases/new](https://github.com/Jem-HR/jem-ui/releases/new)

2. **Create a new tag** by typing the version number (e.g., `v0.2.1`) in the "Choose a tag" field and clicking "Create new tag on publish"

3. **Generate release notes** by clicking "Generate release notes" - this will automatically create a changelog from merged PRs

4. **Review and edit** the release notes as needed

5. **Publish the release** by clicking "Publish release"

The GitHub Actions workflow will automatically detect the new tag, build the library, and publish it to GitHub Packages.
