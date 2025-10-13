import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import path from 'node:path';
import process from 'node:process';
import { nldsComponentsPlugin } from './plugins/rehype-nlds-components/index.js';

const deploymentBaseUrl = process.env.BASE_URL ?? '/';
const baseUrl = path.posix.join(deploymentBaseUrl, 'astro');

// https://astro.build/config
export default defineConfig({
  base: baseUrl,
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'never',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.5,
    }),
  ],
  markdown: {
    rehypePlugins: [nldsComponentsPlugin],
  },
});
