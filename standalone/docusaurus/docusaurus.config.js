/* eslint-env node */

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

module.exports = {
  title: 'Utrecht Design System',
  tagline: 'Principes, interactiepatronen, basiselementen en componenten',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/utrecht/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'tmp',
          routeBasePath: 'docs',
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        title: 'Utrecht Design System',
        logo: {
          alt: 'Utrecht Design System Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'basis/introductie',
            position: 'left',
            label: 'De Basis',
          },
          {
            type: 'doc',
            docId: 'huisstijl/colours',
            position: 'left',
            label: 'De Stijl',
          },
          {
            type: 'doc',
            docId: 'gebruikersonderzoek/research',
            position: 'left',
            label: 'Onderzoek',
          },
          {
            type: 'doc',
            docId: 'redactie/content-richtlijnen',
            position: 'left',
            label: 'Redactie',
          },
          {
            type: 'doc',
            docId: 'ontwikkelaars/release-strategy',
            position: 'left',
            label: 'Ontwikkelaars',
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
