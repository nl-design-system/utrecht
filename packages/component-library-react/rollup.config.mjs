import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
// import del from 'rollup-plugin-delete';
import { readFileSync } from 'fs';
import filesize from 'rollup-plugin-filesize';
import nodeExternal from 'rollup-plugin-node-externals';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
// `assert` is not yet supported by ESLint <https://github.com/eslint/eslint/discussions/15305>
// import packageJson from './package.json' assert { type: 'json' };

const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'));

// rollup.config.js
/**
 * @type {import('rollup').RollupOptions}
 */

export const outputGlobals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

export default [
  {
    input: 'src/index.ts',
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
    external: [/@babel\/runtime/, 'react-dom', 'react'],
    plugins: [
      peerDepsExternal({ includeDependencies: true }),
      nodeExternal(),
      resolve({ browser: true }),
      commonjs({
        include: /node_modules/,
      }),
      nodePolyfills(),
      // del({ targets: ['dist/*', 'pages/*'] }),
      typescript({ includeDependencies: false }),
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
    input: 'src/css-module/index.ts',
    output: [
      {
        file: 'dist/css-module/index.js',
        format: 'cjs',
        sourcemap: true,
        globals: outputGlobals,
      },
      {
        file: 'dist/css-module/index.mjs',
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
      // del({ targets: ['dist/*', 'pages/*'] }),
      postcss({
        extensions: ['.css', '.scss'],
        minimize: true,
      }),
      typescript({ includeDependencies: false }),
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
