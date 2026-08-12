import type { Config } from "tailwindcss";

import jemPreset from "./src/tailwind-preset";

/**
 * This config exists ONLY to point the local app and Storybook at the preset the package ships.
 *
 * It used to be a 356-line hand-maintained COPY of `src/tailwind-preset.ts`, with no link between
 * them — so the theme this repo compiles with and the theme consumers receive were two separate
 * things that had to be edited in tandem, and silently diverged. By the time it was noticed the copy
 * was missing 23 variables the preset had, including `--blue-25` and the darker pinks added for
 * Jem 2.0, plus the entire `brand` palette and every `boxShadow` key.
 *
 * The consequence was worse than duplication: Storybook is the review surface for this design
 * system, and it was rendering components against a stale theme. A component styled with a token the
 * preset knows about but the copy did not would look correct in a consumer app and broken here —
 * which is precisely backwards, because the whole point of reviewing in Storybook first is to catch
 * a problem BEFORE it reaches an app.
 *
 * Keep this file to `content`, `darkMode` and `plugins`. Anything about the design system itself
 * belongs in the preset, where consumers can actually see it.
 */
export default {
  darkMode: ["class"],
  presets: [jemPreset],
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./stories/**/*.{ts,tsx,mdx}",
  ],
  plugins: [],
} satisfies Config;
