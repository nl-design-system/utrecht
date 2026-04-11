import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      headless: true,
      instances: [{ browser: 'chromium' }],
      provider: playwright(),
      screenshotDirectory: new URL('./tmp/__screenshots__', import.meta.url).pathname,
      viewport: {
        height: 1024,
        width: 1280,
      },
    },
    include: ['./src/*.e2e.(ts|js)'],
  },
});
