import '@utrecht/design-tokens/dist/theme/index.css';
import '@utrecht/design-tokens/dist/property.css';
import '@utrecht/design-tokens/src/custom.scss';
import '../../../components/document/bem.css';

import React from 'react';
import { addDecorator } from '@storybook/html';
// import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import { defineCustomElements } from '@utrecht/web-component-library-stencil';

addDecorator((story) => `<div class="utrecht-document utrecht-theme">${story()}</div>`);
defineCustomElements();

// addParameters({
//   docs: {
//     container: ({ children }) => (
//       <DocsContainer>
//         <div className="utrecht-theme">{children}</div>
//       </DocsContainer>
//     ),
//   },
// });

const statuses = {
  PRODUCTION: {
    background: '#006400',
    color: '#ffffff',
    description:
      'Used in production in a variety of situations, well tested, stable APIs, mostly patches and minor releases.',
  },
  BETA: {
    background: '#cca300',
    color: '#ffffff',
    description:
      'Used in production in a specific situation, evolving APIs based on feedback, breaking changes are still likely.',
  },
  ALPHA: {
    background: '#cc0000',
    color: '#ffffff',
    description:
      'Used in prototypes and in projects that are still in development, breaking changes occur frequently and are not communicated.',
  },
  'WORK IN PROGRESS': {
    background: '#cc0000',
    color: '#ffffff',
    description:
      'Do not use in production. Does not follow semantic versioning and any published packages are for internal use only.',
  },
};

const previewTabs = {
  'storybookjs/notes/panel': { title: 'Documentation' },
  'storybook/docs/panel': { title: 'API' },
  canvas: { title: 'Design Tokens' },
};

export const parameters = {
  controls: { expanded: false },
  previewTabs,
  status: {
    statuses,
  },
  options: {
    panelPosition: 'bottom',
    storySort: {
      order: [
        'Utrecht',
        [
          'README',
          'Wat is het Utrecht Design System?',
          'Toestemming voor gebruik',
          'Design Tokens',
          ['Design Tokens'],
          'Gebruikersonderzoek',
          ['Gebruikersonderzoek'],
        ],
        'Onderzoek',
        'CSS Component',
        ['README'],
        'HTML Component',
        ['README'],
        'Web Component',
        ['README'],
      ],
    },
  },
  themes: {
    default: 'Gemeente Utrecht',
    list: [{ name: 'Gemeente Utrecht', class: 'utrecht-theme', color: '#CC0000' }],
  },
};
