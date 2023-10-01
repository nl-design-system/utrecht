import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
// import del from 'rollup-plugin-delete';
import { readFileSync } from 'fs';
import filesize from 'rollup-plugin-filesize';
import json from '@rollup/plugin-json';
import nodeExternal from 'rollup-plugin-node-externals';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
// `assert` is not yet supported by ESLint <https://github.com/eslint/eslint/discussions/15305>
// import packageJson from './package.json' assert { type: 'json' };

const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'));

/**
 * @type {import('rollup').RollupOptions}
 */

export const outputGlobals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

let components = ['Calendar', 'VegaVisualization'];

const createComponentConfig = (name, { css }) => ({
  input: css ? `src/css-module/${name}.tsx` : `src/${name}.tsx`,
  output: [
    {
      file: css ? `dist/css-module/${name}.js` : `dist/${name}.js`,
      format: 'cjs',
      sourcemap: true,
      globals: outputGlobals,
    },
    {
      file: css ? `dist/css-module/${name}.mjs` : `dist/${name}.mjs`,
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
    json(),
    nodePolyfills(),
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
});

export default [
  ...components.map(createComponentConfig),
  ...components.map((name) => createComponentConfig(name, { css: true })),
];
