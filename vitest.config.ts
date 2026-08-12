import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({ configDir: path.join(dirname, '.storybook') }),
        ],
        test: {
          name: 'storybook',
          // The Button and Tag contrast matrices measure every variant against its background in a
          // real browser, which takes 7-12s each on its own and longer under parallel load. The
          // default budget left them passing at 10s and failing at 15s depending on how many story
          // files were running alongside — a timeout that moves with unrelated additions is a
          // landmine, not a signal.
          testTimeout: 45_000,
          browser: {
        enabled: true,
        headless: true,
        provider: 'playwright',
        instances: [{ browser: 'chromium' }]
      },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
});
