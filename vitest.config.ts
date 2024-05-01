import path from 'node:path';
import { defaultExclude, defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      test: path.resolve(__dirname, './test'),
    },
  },
  test: {
    globals: true,
    exclude: [...defaultExclude],
    environmentMatchGlobs: [
      ['**/*.test.tsx', 'jsdom'],
      ['**/*.component.test.ts', 'jsdom'],
    ],
  },
});
