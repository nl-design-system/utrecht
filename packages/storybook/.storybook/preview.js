import '@utrecht/design-tokens/dist/index.css';
import '@utrecht/design-tokens/src/custom.scss';
import '../../../components/document/bem.css';

import React from 'react';
import { defineCustomElements } from '@utrecht/web-component-library-stencil';

defineCustomElements();

const tokenContext = require.context('!!raw-loader!../src', true, /.\.(css|less|scss|svg)$/);

const tokenFiles = tokenContext
  .keys()
  .map((filename) => ({ filename: filename, content: tokenContext(filename).default }));

const statuses = {
  STABLE: {
    background: '#006400',
    color: '#ffffff',
    description:
      'Used in production in a variety of situations, well tested, stable APIs, mostly patches and minor releases.',
  },
  UNSTABLE: {
    background: '#cca300',
    color: '#ffffff',
    description: 'Used in production in a specific situation, evolving APIs based on feedback, many major releases.',
  },
  EXPERIMENTAL: {
    background: '#cc0000',
    color: '#ffffff',
    description:
      'Used in prototypes and in projects that are still in development, breaking changes occur frequently and are not communicated.',
  },
  'WORK IN PROGRESS': {
    background: '#cc0000',
    color: '#ffffff',
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
  status: {
    statuses,
  },
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
