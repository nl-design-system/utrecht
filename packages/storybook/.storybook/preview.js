import '@utrecht/design-tokens/dist/index.css';
import '@utrecht/design-tokens/dist/custom.css';
import '../../../components/document/bem.css';

import React from 'react';

const tokenContext = require.context('!!raw-loader!../src', true, /.\.(css|less|scss|svg)$/);

const tokenFiles = tokenContext
  .keys()
  .map((filename) => ({ filename: filename, content: tokenContext(filename).default }));

const statuses = {
  STABLE: {
    color: '#006400',
    description:
      'Used in production in a variety of situations, well tested, stable APIs, mostly patches and minor releases.',
  },
  UNSTABLE: {
    color: '#cca300',
    description: 'Used in production in a specific situation, evolving APIs based on feedback, many major releases.',
  },
  EXPERIMENTAL: {
    color: '#cc0000',
    description:
      'Used in prototypes and in projects that are still in development, breaking changes occur frequently and are not communicated.',
  },
  'WORK IN PROGRESS': {
    color: '#cc0000',
    description: 'Do not use in production. Not versioned and published yet.',
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
  statuses,
  designToken: {
    files: tokenFiles,
  },
  options: {
    panelPosition: 'bottom',
    storySort: {
      order: ['Utrecht', ['Introductie'], 'Onderzoek', 'Components', 'Molecules', 'Semantic HTML'],
    },
  },
};

export const decorators = [(story) => `<div class="utrecht-document">${story()}</div>`];
