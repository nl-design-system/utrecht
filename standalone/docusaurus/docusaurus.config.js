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
  plugins: ['docusaurus-plugin-sass'],
  customFields: {
    storybookUrl: 'https://nl-design-system.github.io/utrecht/storybook/',
  },
  staticDirectories: ['static', '../../proprietary/assets'],
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
          breadcrumbs: false,
        },
        theme: {
          customCss: [
            require.resolve('@utrecht/design-tokens/dist/index.css'),
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
      metadata: [
        {
          name: 'Content-Security-Policy',
          content: `frame-ancestors 'none'; object-src 'none'; base-uri 'none'; default-src 'self'; media-src 'none'; form-action 'self'; img-src 'self' data:; script-src 'self'; style-src 'unsafe-inline' 'self'; connect-src 'self' https://*.algolia.net https://*.algolianet.com; frame-src 'self' https://nl-design-system.github.io; font-src 'self';`,
        },
      ],
      prism: {
        theme: require('prism-react-renderer/themes/github'),
      },
      navbar: require('./navigationConfig'),
      algolia: {
        // The application ID provided by Algolia
        appId: 'JTF8SIMZ2F',
        // Public API key: it is safe to commit it
        apiKey: '3a66f5c752ed12ad04ee8eb3c1186e93',
        indexName: 'utrecht-design-system',
        // Optional: see doc section below
        contextualSearch: false,
        placeholder: 'Zoek documentatie',
        disableUserPersonalization: true,
      },
    },
};
