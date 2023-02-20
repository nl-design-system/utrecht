/* eslint-env node */
import { addonStatus } from '@utrecht/storybook-helpers/src/addon-status';
import { defineCustomElements } from '@utrecht/web-component-library-stencil/loader';
import clsx from 'clsx';
import defaultsDeep from 'lodash.defaultsdeep';
import prettierBabel from 'prettier/parser-babel';
import prettier from 'prettier/standalone';
import React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import 'firacode/distr/fira_code.css';
import '@utrecht/components/document/css/index.scss';
import '@utrecht/components/html-content/css/index.scss';
import '@utrecht/design-tokens/dist/index.css';
import '@utrecht/design-tokens/dist/property.css';
import '@utrecht/design-tokens/dist/dark/index.css';
import '@utrecht/design-tokens/src/background-image-icon.scss';
import '@utrecht/storybook-helpers/src/storybook-docs.scss';

defineCustomElements();

export const decorators = [
  // Enable `utrecht-document` component as backdrop
  // Enable `utrecht-theme` to configure the design tokens
  // Ensure old html templates will be rendered as react component
  (Story, storyContext) => {
    // Hack to make current args for a story available in the transformSource of the docs addon
    storyContext.parameters.args = storyContext.args;

    return (
      <div
        className={clsx('utrecht-document', 'utrecht-document--surface', {
          'utrecht-reduced-motion': ['1', 'true'].includes(process.env.STORYBOOK_REDUCED_MOTION),
        })}
      >
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

// Configure storybook-addon-themes
const addonThemes = {
  clearable: true,
  themes: {
    default: 'Gemeente Utrecht',
    target: 'root',
    list: [
      { name: 'No style', class: 'no-style', color: '#000000' },
      { name: 'No design tokens', class: 'no-theme', color: '#CCCCCC' },
      { name: 'Gemeente Utrecht', class: 'utrecht-theme', color: '#CC0000' },
      { name: 'Gemeente Utrecht (dark mode)', class: 'utrecht-theme--color-scheme-dark', color: '#000000' },
    ],
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
