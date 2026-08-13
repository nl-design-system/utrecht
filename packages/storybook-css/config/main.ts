// This file has been automatically migrated to valid ESM format by Storybook.
import type { StorybookConfig } from '@storybook/react-vite';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

// Utility to resolve the absolute path of a package
// https://storybook.js.org/docs/faq#how-do-i-fix-module-resolution-in-special-environments
const getAbsolutePath = (value: string): string => dirname(require.resolve(join(value, 'package.json')));

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  stories: ['../src/**/*.stories.@(js|jsx|mdx|ts|tsx)', '../src/**/*.mdx'],
  features: {},
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  addons: [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@etchteam/storybook-addon-status'),
    // getAbsolutePath('@whitespace/storybook-addon-html'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('storybook-addon-pseudo-states'),
  ],
  staticDirs: ['../../../proprietary/assets', '../src/script/', '../../flolegal-decision-tree-client/dist/assets'],
  docs: {},
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      define: {
        global: 'globalThis',
        'process.env': {},
      },
      plugins: [
        {
          name: 'fix-mdx-react-shim',
          enforce: 'pre',
          resolveId(source) {
            if (source.startsWith('file://') && source.includes('mdx-react-shim.js')) {
              return new URL(source).pathname;
            }
            return null;
          },
        },
        {
          // The formio-renderer Map component statically imports leaflet and uses
          // react-intl's `injectIntl` (removed in v6+), which breaks the build.
          // Intercept the map directory entirely so none of its deps are resolved.
          // Remove this plugin if Map field support is ever needed in Storybook.
          name: 'stub-formio-map',
          enforce: 'pre',
          load(id) {
            if (id.includes('/formio-renderer/dist/components/map/')) {
              return 'export default () => null; export const LeafletMap = () => null;';
            }
            return null;
          },
        },
      ],
      resolve: {
        alias: {
          '~@utrecht': resolve(__dirname, '../node_modules/@utrecht'),
          path: require.resolve('path-browserify'),
        },
      },
      optimizeDeps: {
        esbuildOptions: {
          plugins: [
            {
              // Stub the formio-renderer Map component during esbuild pre-bundling.
              // LeafletMapLocationControl imports react-intl's `injectIntl` which was
              // removed in v6+, causing a build error. We don't use the Map field.
              name: 'stub-formio-map-esbuild',
              setup(build: { onLoad: Function }) {
                build.onLoad({ filter: /formio-renderer\/dist\/components\/map\// }, () => ({
                  contents: 'export default () => null;',
                  loader: 'js',
                }));
              },
            },
          ],
        },
      },
      assetsInclude: ['**/*.md'],
      css: {
        preprocessorOptions: {
          scss: {
            // Temporary fix for the SCSS @import deprecation in Storybook 9
            // Remove once all @utrecht packages have been migrated to @use
            silenceDeprecations: ['import'],
            includePaths: [resolve(__dirname, '../node_modules/@utrecht')],
          },
        },
      },
    });
  },
};

export default config;
