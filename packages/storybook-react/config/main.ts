import type { StorybookConfig } from '@storybook/react-vite';
import { defineMain } from '@storybook/react-vite/node';
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

  stories: ['../src/stories/**/*.stories.@(js|jsx|mdx|ts|tsx)'],

  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('storybook-addon-pseudo-states'),
    getAbsolutePath('@storybook/addon-jest'),
    getAbsolutePath('@etchteam/storybook-addon-status'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-mcp'),
  ],

  features: {},

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },

  staticDirs: ['../../../proprietary/assets', '../../flolegal-decision-tree-client/dist/assets'],

  docs: {},

  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      define: {
        global: 'globalThis',
        'process.env': {},
      },
      resolve: {
        alias: {
          '~@utrecht': resolve(__dirname, '../node_modules/@utrecht'),
          // The formio-renderer `exports` only expose `dist/`, not the translations in `i18n/`
          '@open-formulieren/formio-renderer/i18n': join(getAbsolutePath('@open-formulieren/formio-renderer'), 'i18n'),
          path: require.resolve('path-browserify'),
        },
      },
      optimizeDeps: {
        esbuildOptions: {
          plugins: [
            {
              // react-signature-canvas is a UMD bundle with `exports.default`. The formio-renderer
              // is an ES module package, so esbuild imports it in Node mode and the default import
              // becomes the whole module object instead of the component. This shim unwraps it.
              name: 'react-signature-canvas-default-export',
              setup(build: { onResolve: Function; onLoad: Function }) {
                build.onResolve(
                  { filter: /^react-signature-canvas$/ },
                  (args: { namespace: string; resolveDir: string }) =>
                    args.namespace === 'react-signature-canvas-shim'
                      ? undefined
                      : { path: 'react-signature-canvas', namespace: 'react-signature-canvas-shim', pluginData: args },
                );
                build.onLoad(
                  { filter: /.*/, namespace: 'react-signature-canvas-shim' },
                  (args: { pluginData: { resolveDir: string } }) => ({
                    contents: `import * as m from 'react-signature-canvas';
export default m.default && m.default.default ? m.default.default : m.default;`,
                    resolveDir: args.pluginData.resolveDir,
                    loader: 'js',
                  }),
                );
              },
            },
          ],
        },
      },
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

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default defineMain(config);
