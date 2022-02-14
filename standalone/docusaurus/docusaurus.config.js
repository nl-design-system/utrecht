/* eslint-env node */

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

module.exports = {
  title: 'Utrecht Design System',
  tagline: 'Principes, interactiepatronen, basiselementen en componenten',
  url: 'https://nl-design-system.github.io/',
  baseUrl: '/utrecht/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nl-design-system/utrecht',
  projectName: 'utrecht', // Usually your repo name.
  plugins: ['docusaurus-plugin-sass', require.resolve('docusaurus-lunr-search')],
  customFields: {
    storybookUrl: 'https://nl-design-system.github.io/utrecht/storybook/',
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebarConfig.js'),
          path: 'docs',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/nl-design-system/utrecht/tree/main/documentation',
        },
        theme: {
          customCss: [
            require.resolve('@utrecht/design-tokens/dist/theme/index.css'),
            require.resolve('./src/styles/custom.scss'),
          ],
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      colorMode: {
        respectPrefersColorScheme: false,
        disableSwitch: true,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
      },
      navbar: require('./navigationConfig'),
    },
};
