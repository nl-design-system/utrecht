/* eslint-env node */
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WebComponentLibraryVue',
      fileName: (format) => `web-component-library-vue.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', '@utrecht/web-component-library-stencil'],
      output: {
        globals: {
          vue: 'Vue',
          '@utrecht/web-component-library-stencil/loader': 'loader',
        },
      },
    },
  },
  plugins: [dts({ copyDtsFiles: false, outputDir: './dist', tsConfigFilePath: './tsconfig.json' }), vue()],
});
