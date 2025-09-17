import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { nldsComponentsPlugin } from './plugins/rehype-nlds-components/index.js';

// https://astro.build/config
export default defineConfig({
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
