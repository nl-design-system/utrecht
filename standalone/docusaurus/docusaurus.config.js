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
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
      navbar: {
        title: 'Utrecht Design System',
        logo: {
          alt: 'Utrecht Design System Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'tmp/basis/introductie',
            position: 'left',
            label: 'De Basis',
          },
          {
            type: 'doc',
            docId: 'tmp/huisstijl/colours',
            position: 'left',
            label: 'De Stijl',
          },
          {
            type: 'doc',
            docId: 'componenten/Heading',
            position: 'left',
            label: 'Componenten',
          },
          {
            type: 'doc',
            docId: 'tmp/gebruikersonderzoek/research',
            position: 'left',
            label: 'Onderzoek',
          },
          {
            href: 'https://github.com/nl-design-system/utrecht',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://nl-design-system.github.io/utrecht/storybook',
            label: 'Storybook',
            position: 'right',
          },
        ],
      },
    },
};
