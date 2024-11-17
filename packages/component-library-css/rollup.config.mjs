import postcss from 'rollup-plugin-postcss';
import discardDuplicates from 'postcss-discard-duplicates';
import postcssLogical from 'postcss-logical';
import { removeCharset } from '@utrecht/build-utils-css/src/remove-charset.mjs';
import { mergeLicenseComments } from '@utrecht/build-utils-css/src/remove-duplicate-license.mjs';
import { removeComments } from '@utrecht/build-utils-css/src/remove-comments.mjs';
import { workaroundsPrinceXML } from '@utrecht/build-utils-css/src/prince-workarounds.mjs';

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
        plugins: [
          discardDuplicates(),
          mergeLicenseComments(),
          removeComments({
            keepLicense: true,
          }),
        ],
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
        plugins: [
          discardDuplicates(),
          mergeLicenseComments(),
          removeComments({
            keepLicense: true,
          }),
        ],
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
          mergeLicenseComments(),
          removeComments({
            keepLicense: true,
          }),
          workaroundsPrinceXML(),
        ],
        extract: true,
      }),
    ],
  },
];
