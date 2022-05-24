/* eslint-env node */
import typescript from '@rollup/plugin-typescript';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'component-library-vue',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        sourcemap: false,
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    {
      ...typescript({ tsconfig: './tsconfig.json' }),
      apply: 'build',
      declaration: true,
      declarationDir: 'types/',
      rootDir: '/',
    },
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
