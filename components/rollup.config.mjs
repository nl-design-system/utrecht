import postcss from 'rollup-plugin-postcss';
import discardDuplicates from 'postcss-discard-duplicates';
import copy from 'rollup-plugin-copy';
import { cwd } from 'node:process';
import { basename } from 'node:path';

export default {
  input: 'css/index.scss',
  output: {
    dir: './dist',
    sourcemap: false,
    format: 'esm',
    compact: true,
  },
  plugins: [
    postcss({
      extensions: ['.css', '.scss'],
      plugins: [discardDuplicates()],
      extract: true,
    }),
    // Copy the `index.css` file for compatibility with imports from `@utrecht/components/dist/{component}/css/index.css`
    copy({
      targets: [{ src: 'dist/index.css', dest: `../dist/${basename(cwd())}/css/index.css` }],
    }),
  ],
};
