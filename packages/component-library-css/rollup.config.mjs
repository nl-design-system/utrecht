import postcss from 'rollup-plugin-postcss';
import discardDuplicates from 'postcss-discard-duplicates';
import postcssLogical from 'postcss-logical';

/**
 * Remove the `@charset "UTF-8";` declararation.
 * Prince XML does not support such declaration.
 */
const removeCharset = () => {
  return (css) => {
    css.walkAtRules('charset', (atRule) => {
      atRule.remove();
    });
  };
};

export default [
  {
    input: 'src/index.scss',
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
    ],
  },
  {
    input: 'src/html.scss',
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
    ],
  },
  {
    input: 'src/prince-xml.scss',
    output: {
      dir: './dist',
      sourcemap: false,
      format: 'esm',
      compact: true,
    },
    plugins: [
      postcss({
        extensions: ['.css', '.scss'],
        plugins: [
          postcssLogical({
            blockDirection: 'top-to-bottom',
            inlineDirection: 'left-to-right',
          }),
          discardDuplicates(),
          removeCharset(),
        ],
        extract: true,
      }),
    ],
  },
];
