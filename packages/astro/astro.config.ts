import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import process from 'node:process';
import { nldsComponentsPlugin } from './plugins/rehype-nlds-components/index.js';

const baseUrl = process.env.BASE_URL ?? '/';

// https://astro.build/config
export default defineConfig({
  base: baseUrl,
  trailingSlash: 'ignore',
  vite: {
    resolve: {
      alias: [{ find: /^@babel\/runtime\/helpers\/(.*)$/, replacement: '@babel/runtime/helpers/esm/$1' }],
    },
  },
  build: {
    inlineStylesheets: 'never',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    mdx(),
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
