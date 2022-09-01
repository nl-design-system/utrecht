import { defineCustomElements } from '@utrecht/web-component-library-stencil/loader';
import defaultsDeep from 'lodash.defaultsdeep';
import prettierBabel from 'prettier/parser-babel';
import prettier from 'prettier/standalone';
import React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import '@utrecht/components/document/css/index.scss';
import '@utrecht/components/html-content/css/index.scss';
import '@utrecht/design-tokens/dist/index.css';
import '@utrecht/design-tokens/dist/property.css';
import '@utrecht/design-tokens/src/custom.scss';

defineCustomElements();

export const decorators = [
  // Enable `utrecht-document` component as backdrop
  // Enable `utrecht-theme` to configure the design tokens
  // Ensure old html templates will be rendered as react component
  (Story, storyContext) => {
    // Hack to make current args for a story available in the transformSource of the docs addon
    storyContext.parameters.args = storyContext.args;

    return (
      <div className="utrecht-document utrecht-document--surface utrecht-theme">
        <Story />
      </div>
    );
  },
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
        'NL Design System',
        'Onderzoek',
        'CSS Component',
        ['README'],
        'HTML Component',
        ['README'],
        'Web Component',
        ['README'],
        'Angular Web Component',
        ['README'],
        'React Component',
        ['README'],
        'React Web Component',
        ['README'],
        'Vue.js Web Component',
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
    transformSource: (src, storyContext) => {
      // Ensure valid HTML in the Preview source
      if (storyContext.component) {
        return prettier.format(
          ReactDOMServer.renderToStaticMarkup(storyContext.component(storyContext.parameters.args)),
          { parser: 'babel', plugins: [prettierBabel] },
        );
      }
      return src;
    },
  },
};

// Configure @etchteam/storybook-addon-status
const addonStatus = {
  status: {
    statuses: {
      PRODUCTION: {
        background: '#088008',
        color: '#ffffff',
        description:
          'Used in production in a variety of situations, well tested, stable APIs, mostly patches and minor releases.',
      },
      BETA: {
        background: '#3065ee',
        color: '#ffffff',
        description:
          'Used in production in a specific situation, evolving APIs based on feedback, breaking changes are still likely.',
      },
      ALPHA: {
        background: '#e0bc2e',
        color: '#000000',
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
