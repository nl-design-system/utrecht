/* eslint-env node */

module.exports = {
  title: 'Utrecht Design System',
  logo: {
    alt: 'Utrecht Design System Logo',
    src: 'img/logo.svg',
  },
  hideOnScroll: true,
  items: [
    {
      type: 'doc',
      docId: 'tmp/basis/introductie',
      position: 'left',
      label: 'De Basis',
    },
    {
      type: 'doc',
      docId: 'tmp/huisstijl/kleuren',
      position: 'left',
      label: 'De Stijl',
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
      href: 'https://gebruikersonderzoeken.nl/',
      label: 'Onderzoek',
      position: 'left',
    },
    {
      href: 'https://github.com/nl-design-system/utrecht',
      label: 'GitHub',
      position: 'right',
    },
    {
      prependBaseUrlToHref: true,
      href: './storybook/',
      label: 'Storybook',
      position: 'right',
    },
  ],
};
