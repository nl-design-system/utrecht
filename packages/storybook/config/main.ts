import type { StorybookConfig } from '@storybook/react-vite';
import { dirname, join, resolve } from 'path';
// Utility to resolve the absolute path of a package
// https://storybook.js.org/docs/faq#how-do-i-fix-module-resolution-in-special-environments
const getAbsolutePath = (value: string): string => dirname(require.resolve(join(value, 'package.json')));

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)', '../stories/**/*.mdx'],
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
    '@whitespace/storybook-addon-html', // Cannot use getAbsolutePath() - package structure incompatible
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('storybook-addon-pseudo-states'),
    getAbsolutePath('storybook-addon-themes'),
  ],
  staticDirs: ['../../../proprietary/assets', '../src/script/', '../static'],
  refs: (_, { configType }) => {
    // https://storybook.js.org/docs/react/sharing/storybook-composition#compose-storybooks-per-environment
    let config = {};

    if (configType === 'DEVELOPMENT') {
      config = {
        css: {
          title: 'CSS Components',
          url: 'http://localhost:6012',
        },
        angular: {
          title: 'Angular Components',
          url: 'http://localhost:6009',
        },
        html: {
          title: 'HTML Components',
          url: 'http://localhost:6011',
        },
        react: {
          title: 'React.js Components',
          url: 'http://localhost:6008',
        },
        vue: {
          title: 'Vue.js Components',
          url: 'http://localhost:6007',
        },
        webcomponent: {
          title: 'Web Components',
          url: 'http://localhost:6010',
        },
      };
    } else {
      config = {
        css: {
          title: 'CSS Components',
          url: '../storybook-css',
        },
        angular: {
          title: 'Angular Components',
          url: '../storybook-angular',
        },
        html: {
          title: 'HTML Components',
          url: '../storybook-html',
        },
        react: {
          title: 'React.js Components',
          url: '../storybook-react',
        },
        vue: {
          title: 'Vue.js Components',
          url: '../storybook-vue',
        },
        webcomponent: {
          title: 'Web Components',
          url: '../storybook-web-component',
        },
      };
    }

    return config;
  },
  docs: {
    autodocs: 'tag',
  },
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
          path: require.resolve('path-browserify'),
        },
      },
      assetsInclude: ['**/*.md'],
      css: {
        preprocessorOptions: {
          scss: {
            // Temporary fix for the SCSS @import deprecation in Storybook 9
            silenceDeprecations: ['import'],
            includePaths: [resolve(__dirname, '../node_modules/@utrecht')],
          },
        },
      },
    });
  },
};

export default config;
