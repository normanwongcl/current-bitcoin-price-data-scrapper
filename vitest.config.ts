import path from 'node:path';
import { defineConfig, defaultExclude } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      test: path.resolve(__dirname, './test'),
    },
  },
  test: {
    globals: true,
    setupFiles: path.resolve(__dirname, 'test/setup.ts'),
    exclude: [...defaultExclude],
    environmentMatchGlobs: [
      ['**/*.test.tsx', 'jsdom'],
      ['**/*.component.test.ts', 'jsdom'],
    ],
  },
});
