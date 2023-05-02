import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  stories: [
    '../stories/**/*stories.@(js|jsx|mdx|ts|tsx)',
    '../../../components/**/*stories.@(js|jsx|mdx|ts|tsx)',
    '../../../proprietary/**/*stories.@(js|jsx|mdx|ts|tsx)',
  ],
  features: {
    // babelModeV7: true,
    // postcss: false,
    buildStoriesJson: true,
    // previewMdx2: true,
    storyStoreV7: true,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/preset-scss',
    '@etchteam/storybook-addon-status/register',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-links',
    'storybook-addon-pseudo-states',
    'storybook-addon-themes',
    //'@storybook/addon-mdx-gfm',
  ],
  staticDirs: ['../../../proprietary/assets', '../src/script/'],
  refs: (_, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      return {
        angular: {
          title: 'Angular Components',
          url: 'http://localhost:6009',
        },
        vue: {
          title: 'Vue.js Components',
          url: 'http://localhost:6007',
        },
        react: {
          title: 'React.js Components',
          url: 'http://localhost:6008',
        },
      };
    }
    return {
      angular: {
        title: 'Angular Components',
        url: '../storybook-angular',
      },
      vue: {
        title: 'Vue.js Components',
        url: '../storybook-vue',
      },
      react: {
        title: 'React.js Components',
        url: '../storybook-react',
      },
    };
  },
  docs: {
    autodocs: true,
  },
};

export default config;
