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

/**
 * @type {import('rollup').RollupOptions}
 */

export const outputGlobals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

let components = [
  'Accordion',
  'Alert',
  'AlertDialog',
  'Article',
  'Backdrop',
  'BadgeCounter',
  'BadgeList',
  'BreadcrumbNav',
  'Button',
  'ButtonGroup',
  'ButtonLink',
  'Checkbox',
  'Code',
  'CodeBlock',
  'ColorSample',
  'CurrencyData',
  'DataBadge',
  'DataList',
  'DataPlaceholder',
  'Document',
  'Emphasis',
  'Fieldset',
  'FieldsetLegend',
  'Figure',
  'FigureCaption',
  'FormField',
  'FormFieldDescription',
  'FormLabel',
  'FormToggle',
  'HTMLContent',
  'Heading',
  'Heading1',
  'Heading2',
  'Heading3',
  'Heading4',
  'Heading5',
  'Heading6',
  'HeadingGroup',
  'IBANData',
  'Icon',
  'Image',
  'Link',
  'LinkButton',
  'LinkSocial',
  'ListSocial',
  'Mark',
  'NumberValue',
  'OrderedList',
  'OrderedListItem',
  'Page',
  'PageContent',
  'PageFooter',
  'PageHeader',
  'Paragraph',
  'PreHeading',
  'RadioButton',
  'Select',
  'Separator',
  'SkipLink',
  'SpotlightSection',
  'StatusBadge',
  'Strong',
  'Surface',
  'Table',
  'TableBody',
  'TableCaption',
  'TableCell',
  'TableFooter',
  'TableHeader',
  'TableHeaderCell',
  'TableRow',
  'Textarea',
  'Textbox',
  'URLValue',
  'UnorderedList',
  'UnorderedListItem',
];

if (process.env.COMPONENT_PREFIX) {
  components = components.filter((name) => name.startsWith(process.env.COMPONENT_PREFIX));
} else {
  components = [];
}

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

if (process.env.COMPONENT_PREFIX && components.length === 0) {
  // In the `package.json` there are build scripts for every letter of the alphabet.
  // Not every starting letter has a matching component (yet), but it is okay
  // to gracefully exit the `rollup` build then.
  process.exit(0);
}

export default [
  ...components.map(createComponentConfig),
  ...components.map((name) => createComponentConfig(name, { css: true })),
];
