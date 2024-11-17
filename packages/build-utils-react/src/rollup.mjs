import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import filesize from 'rollup-plugin-filesize';
import nodeExternal from 'rollup-plugin-node-externals';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

/**
 * @type {import('rollup').RollupOptions}
 */
export const createConfig = () => [
  {
    input: './src/index.tsx',
    output: [
      {
        file: './dist/index.cjs',
        format: 'cjs',
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
    input: './src/index.tsx',
    output: [
      {
        file: './dist/index.mjs',
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({ browser: true }),
      typescript({ tsconfig: './tsconfig.build.json' }),
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
  {
    input: './src/css.tsx',
    output: [
      {
        file: './dist/css.mjs',
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({ browser: true }),
      typescript({ tsconfig: './tsconfig.build.json' }),
      filesize(),
    ],
  },
];
