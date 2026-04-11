import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      thresholds: {
        // TODO: Enable test coverage tresholds
        // branches: 100,
        // functions: 100,
        // lines: 100,
        // statements: 100,
      },
    },
    // css: true,
    environment: 'jsdom',
    include: ['./src/*.test.(ts|js)'],
  },
});
