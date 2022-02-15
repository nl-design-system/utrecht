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
      docId: 'tmp/huisstijl/kleuren',
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
};
