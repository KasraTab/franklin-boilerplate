import { defineConfig } from 'vitest/config';

import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      'vitest/config': path.resolve(__dirname, 'node_modules/vitest/config'),
    },
  },
  test: {
    environment: 'jsdom',
  },
});
