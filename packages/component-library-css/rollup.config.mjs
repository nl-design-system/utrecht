import postcss from 'rollup-plugin-postcss';
import { Comment } from 'postcss';
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

const isLicenseComment = (str) => /@license/.test(str);

const removeComments = ({ keepLicense = false }) => {
  return (css) => {
    css.walk((node) => {
      if (node.type === 'comment') {
        if (keepLicense && isLicenseComment(node.text)) {
          return;
        }
        node.remove();
      }
    });
  };
};

const workaroundsPrinceXML = () => {
  return (css) => {
    css.walk((node) => {
      if (node.type === 'rule') {
        // Rewrite `a:any-link` selector to `a[href]` because Prince XML does not support `:any-link`.
        // Rewriing to `a:link, a:visited` seemed too difficult.
        node.selector = node.selector.replaceAll(':any-link', '[href]');

        // Rewrite pseudo class selectors in a way Prince XML doesn't complain about it
        node.selector = node.selector
          .replaceAll(':focus-visible', '[prince-xml-ignore-pseudo-class-focus-visible]')
          .replaceAll(':placeholder-shown', '[prince-xml-ignore-pseudo-class-placeholder-shown]');

        // Rewrite pseudo element selectors in a way Prince XML doesn't complain about it
        node.selector = node.selector
          .replaceAll('::placeholder', '[prince-xml-ignore-pseudo-element-placeholder]')
          .replaceAll('::backdrop', '[prince-xml-ignore-pseudo-element-backdrop]');
      } else if (
        node.type === 'atrule' &&
        /prefers-contrast|prefers-reduced-motion|prefers-reduced-transparency|forced-colors/.test(node.params)
      ) {
        // Remove `@media` rules that target non-print media
        node.remove();
      } else if (
        node.type === 'decl' &&
        ['print-color-adjust', 'text-decoration-thickness', 'white-space-collapse'].includes(node.prop)
      ) {
        // Remove non-essential CSS declarations that Prince XML 15.4 does not support.
        node.remove();
      }
    });
  };
};

const mergeLicenseComments = () => {
  return (css) => {
    // Add all licenses to a `Map`, to deduplicate the license declarations.
    const licenses = new Map();
    css.walkComments((node) => {
      if (isLicenseComment(node.text)) {
        node.remove();

        if (!licenses.has(node.text)) {
          licenses.set(
            node.text,
            new Comment({
              text: node.text,
              raws: {
                left: node.raws.left,
                right: node.raws.right,
              },
            }),
          );
        }
      }
    });
    licenses.forEach((license) => {
      css.prepend(license);
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
    input: 'src/root.scss',
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
