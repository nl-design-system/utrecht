import '@utrecht/design-tokens/dist/theme/index.css';
import '@utrecht/design-tokens/dist/property.css';
import '@utrecht/design-tokens/src/custom.scss';
import '../../../components/document/bem.scss';

import React from 'react';
import { addDecorator, addParameters, storiesOf } from '@storybook/html';
// import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import { defineCustomElements } from '@utrecht/web-component-library-stencil';
import defaultsDeep from 'lodash.defaultsdeep';

defineCustomElements();

export const decorators = [
  // Enable `utrecht-document` component as backdrop
  // Enable `utrecht-theme` to configure the design tokens
  (story) => `<div class="utrecht-document utrecht-theme">${story()}</div>`,
];

const defaultTab = {
  // Make the "Docs" tab the default, instead of the "Canvas" tab
  viewMode: 'docs',
};

const tabOrder = {
  previewTabs: {
    // Move the "Docs" tab to the front
    'storybook/docs/panel': { index: -1, title: 'Documentation' },
    canvas: { title: 'Demo' },
  },
};

const sidebarOrder = {
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
        'Angular Component',
        ['README'],
        'React Component',
        ['README'],
        'Vue.js Component',
        ['README'],
        'Form.io Component',
        ['README'],
      ],
    },
  },
};

// Configure @storybook/addon-docs
const addonDocs = {
  docs: {
    // Show code by default.
    // Stories without concise code snippets can hide the code at Story level.
    source: {
      state: 'open',
    },
    // Use a custom wrapper element
    /*
    container: ({ children }) => (
      <DocsContainer>
        <div className="utrecht-theme">{children}</div>
      </DocsContainer>
    ),
    */
  },
};

// Configure @etchteam/storybook-addon-status
const addonStatus = {
  status: {
    statuses: {
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
    },
  },
};

// Configure storybook-addon-themes
const addonThemes = {
  themes: {
    default: 'Gemeente Utrecht',
    list: [{ name: 'Gemeente Utrecht', class: 'utrecht-theme', color: '#CC0000' }],
  },
};

export const parameters = defaultsDeep(
  {},
  // Deep merge the following configurations:
  addonDocs,
  addonStatus,
  addonThemes,
  defaultTab,
  sidebarOrder,
  tabOrder,
);
