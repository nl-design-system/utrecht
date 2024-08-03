import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import { readFileSync } from 'fs';
import filesize from 'rollup-plugin-filesize';
import nodeExternal from 'rollup-plugin-node-externals';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

export const createComponentPackageConfig = (path) => {
  const packagePath = new URL('./package.json', path).pathname;
  const packageJson = JSON.parse(readFileSync(packagePath, 'utf8'));

  const outputGlobals = {
    react: 'React',
    'react-dom': 'ReactDOM',
  };

  /**
   * @type {import('rollup').RollupOptions}
   */
  return [
    {
      input: new URL('./src/index.tsx', path).pathname,
      output: [
        {
          file: packageJson.main,
          format: 'cjs',
          sourcemap: true,
          globals: outputGlobals,
        },
        {
          file: packageJson.module,
          format: 'esm',
          sourcemap: true,
          globals: outputGlobals,
        },
      ],
      plugins: [
        peerDepsExternal(),
        nodeExternal(),
        resolve({ browser: true }),
        commonjs({
          include: /node_modules/,
        }),
        nodePolyfills(),
        typescript({ includeDependencies: false }),
        json(),
        babel({
          presets: ['@babel/preset-react'],
          babelHelpers: 'runtime',
          exclude: ['node_modules/**', 'dist/**'],
          extensions: ['.ts', '.tsx'],
          inputSourceMap: true,
          plugins: ['@babel/plugin-transform-runtime'],
        }),
        filesize(),
      ],
    },
    {
      input: new URL('./src/index.tsx', path).pathname,
      output: [
        {
          file: 'dist/css.js',
          format: 'cjs',
          sourcemap: true,
          globals: outputGlobals,
        },
        {
          file: 'dist/css.mjs',
          format: 'esm',
          sourcemap: true,
          globals: outputGlobals,
        },
      ],
      external: [/@babel\/runtime/, 'react-dom', 'react'],
      plugins: [
        peerDepsExternal({ includeDependencies: true }),
        nodeExternal(),
        resolve({ browser: true }),
        commonjs({
          include: /node_modules/,
        }),
        nodePolyfills(),
        postcss({
          extensions: ['.css', '.scss'],
          minimize: true,
        }),
        typescript({ includeDependencies: false }),
        json(),
        babel({
          presets: ['@babel/preset-react'],
          babelHelpers: 'runtime',
          exclude: ['node_modules/**', 'dist/**'],
          extensions: ['.ts', '.tsx'],
          inputSourceMap: true,
          plugins: ['@babel/plugin-transform-runtime'],
        }),
        filesize(),
      ],
    },
  ];
};
