import { defineConfig } from "tsup"

import { sharedOptions } from "./tsup.shared"

export default defineConfig({
  ...sharedOptions,
  name: "non-client",
  entry: {
    server: "src/server.ts",
    "tailwind-preset": "src/tailwind-preset.ts",
  },
  clean: false,
  treeshake: true,
})
