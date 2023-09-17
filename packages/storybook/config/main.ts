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
    // https://storybook.js.org/docs/react/sharing/storybook-composition#compose-storybooks-per-environment
    let config = {};

    if (configType === 'DEVELOPMENT') {
      config = {
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
    autodocs: true,
  },
};

export default config;
