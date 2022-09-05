/* eslint-env node */

module.exports = {
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
      docId: 'componenten/typografie/heading',
      position: 'left',
      label: 'Componenten',
    },
    {
      type: 'doc',
      docId: 'tmp/designrichtlijnen/richtlijnen-interne-applicaties',
      position: 'left',
      label: 'Design Richtlijnen',
    },
    {
      type: 'doc',
      docId: 'tmp/gebruikersonderzoek/research',
      position: 'left',
      label: 'Onderzoek',
    },
    {
      href: 'https://github.com/nl-design-system/utrecht',
      position: 'right',
      className: 'header-github-link',
      'aria-label': 'GitHub repository',
    },
    {
      prependBaseUrlToHref: true,
      href: './storybook/',
      position: 'right',
      className: 'header-github-link',
      label: 'Storybook',
      'aria-label': 'Storybook for all components',
    },
  ],
}
