import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import filesize from 'rollup-plugin-filesize';
import nodeExternal from 'rollup-plugin-node-externals';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

/**
 * @type {import('rollup').RollupOptions}
 */

export const outputGlobals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: './dist/index.mjs',
        format: 'es',
        sourcemap: true,
        globals: outputGlobals,
      },
    ],
    plugins: [
      peerDepsExternal(),

      // Convert CommonJS modules to ES Modules
      commonjs({
        include: /node_modules/,
      }),
      // Inline imports from `devDependencies`
      // Leave `dependencies` and `devDependencies` imports as is.
      // See: https://www.npmjs.com/package/rollup-plugin-node-externals
      nodeExternal(),
      resolve(),
      typescript({ tsconfig: './tsconfig.build.json' }),
      babel({
        presets: ['@babel/preset-react'],
        babelHelpers: 'runtime',
        exclude: ['node_modules/**', 'dist/**'],
        extensions: ['.ts', '.tsx'],
        // inputSourceMap: true,
        plugins: ['@babel/plugin-transform-runtime'],
      }),
      filesize(),
    ],
  },
  {
    input: './src/css-module/index.ts',
    output: [
      {
        file: './dist/css-module/index.mjs',
        format: 'es',
        sourcemap: true,
        globals: outputGlobals,
      },
    ],
    plugins: [
      peerDepsExternal(),

      // Convert CommonJS modules to ES Modules
      commonjs({
        include: /node_modules/,
      }),
      // Inline imports from `devDependencies`
      // Leave `dependencies` and `devDependencies` imports as is.
      // See: https://www.npmjs.com/package/rollup-plugin-node-externals
      nodeExternal(),
      resolve(),
      typescript({ tsconfig: './tsconfig.build-css-module.json' }),
      babel({
        presets: ['@babel/preset-react'],
        babelHelpers: 'runtime',
        exclude: ['node_modules/**', 'dist/**'],
        extensions: ['.ts', '.tsx'],
        // inputSourceMap: true,
        plugins: ['@babel/plugin-transform-runtime'],
      }),
      filesize(),
    ],
  },
];
