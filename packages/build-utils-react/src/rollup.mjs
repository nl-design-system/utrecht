import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import filesize from 'rollup-plugin-filesize';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

/**
 * @type {import('rollup').RollupOptions}
 */
export const createConfig = () => [
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
