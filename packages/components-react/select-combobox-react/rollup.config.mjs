import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import filesize from 'rollup-plugin-filesize';
import nodeExternal from 'rollup-plugin-node-externals';

/**
 * @type {import('rollup').RollupOptions}
 */
export default [
  {
    input: './src/index.tsx',
    output: [
      {
        file: './dist/index.mjs',
        format: 'es',
        // sourcemap: true,
      },
    ],
    plugins: [
      // Convert CommonJS modules to ES Modules
      commonjs(),

      // Inline imports from `devDependencies`
      // Leave `dependencies` and `devDependencies` imports as is.
      // See: https://www.npmjs.com/package/rollup-plugin-node-externals
      nodeExternal(),
      resolve(),
      typescript({ tsconfig: './tsconfig.build.json' }),
      filesize(),
    ],
  },
  {
    input: './src/css.tsx',
    output: [
      {
        file: './dist/css.mjs',
        format: 'es',
        // sourcemap: true,
      },
    ],
    plugins: [
      // Convert CommonJS modules to ES Modules
      commonjs(),

      // Inline imports from `devDependencies`
      // Leave `dependencies` and `devDependencies` imports as is.
      // See: https://www.npmjs.com/package/rollup-plugin-node-externals
      nodeExternal(),
      resolve(),
      typescript({ tsconfig: './tsconfig.build.json' }),
      filesize(),
    ],
  },
];
