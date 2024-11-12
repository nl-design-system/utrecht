import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { readFileSync } from 'fs';
import filesize from 'rollup-plugin-filesize';
import nodeExternal from 'rollup-plugin-node-externals';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const packagePath = new URL('./package.json', import.meta.url).pathname;
const packageJson = JSON.parse(readFileSync(packagePath, 'utf8'));

/**
 * @type {import('rollup').RollupOptions}
 */
export default [
  {
    input: './src/index.tsx',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      commonjs(),
      nodeExternal(),
      resolve({ browser: true }),
      json(),
      typescript({ tsconfig: './tsconfig.build.json' }),
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
    input: './src/css.tsx',
    output: [
      {
        file: './dist/css.cjs',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: './dist/css.mjs',
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      commonjs(),
      nodeExternal(),
      resolve({ browser: true }),
      json(),
      postcss({
        extensions: ['.css', '.scss'],
        minimize: true,
      }),
      typescript({ tsconfig: './tsconfig.build.json' }),
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
