// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

module.exports = {
  title: 'Utrecht Design System',
  tagline: 'Principes, interactiepatronen, basiselementen en componenten',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
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
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'docs',
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
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
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
            docId: 'intro',
            position: 'left',
            label: 'De Basis',
          },
          // {
          //   type: 'doc',
          //   docId: 'huisstijl',
          //   position: 'left',
          //   label: 'De Stijl',
          // },
          // {
          //   type: 'doc',
          //   docId: 'content',
          //   position: 'left',
          //   label: 'Onderzoek',
          // },
          // {
          //   type: 'doc',
          //   docId: 'content',
          //   position: 'left',
          //   label: 'Tekst',
          // },
          // {
          //   type: 'doc',
          //   docId: 'content',
          //   position: 'left',
          //   label: 'Componenten',
          // },
          {
            href: 'https://github.com/nl-design-system/utrecht',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://nl-design-system.github.io/utrecht/?path=/story/utrecht-readme--page',
            label: 'Storybook',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}
