/* eslint-env node */
import { Controls, Description, Primary, Stories } from '@storybook/addon-docs/blocks';
import type { Preview } from '@storybook/react-vite';
import { addonStatus } from '@utrecht/storybook-helpers/dist/addon-status';
import { addonThemes } from '@utrecht/storybook-helpers/dist/addon-themes';
import { addonViewport } from '@utrecht/storybook-helpers/dist/addon-viewport';
import '@utrecht/storybook-helpers/dist/font-family.js';
import { defineCustomElements } from '@utrecht/web-component-library-stencil/loader';
import clsx from 'clsx';
import prettierHtml from 'prettier/parser-html';
import prettier from 'prettier/standalone';
import React, { ReactElement } from 'react';
import * as ReactDOMServer from 'react-dom/server';
import type { StoryContext } from 'storybook/internal/types';

import 'firacode/distr/fira_code.css';
import '@utrecht/component-library-css/src/index.scss';
import '@utrecht/component-library-css/src/html.scss';
import '@utrecht/design-tokens/dist/index.css';
import '@utrecht/design-tokens/dist/property.css';
import '@utrecht/design-tokens/dist/dark/index.css';
import '@nl-design-system-unstable/amsterdam-design-tokens/dist/index.css';
import '@nl-design-system-unstable/rotterdam-design-tokens/dist/index.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import '@utrecht/design-tokens/src/background-image-icon.scss';
import '@utrecht/storybook-helpers/src/storybook-docs.scss';

defineCustomElements();
// Keep checking process.env['STORYBOOK_REDUCED_MOTION'].
// This is set via GitHub Actions to ensure Chromatic screenshots are not taken
// during fade-in animations (e.g. Backdrop component). Without it, animations
// may cause inconsistent visual snapshots. Do not remove unless Chromatic setup changes.
const isStorybookReducedMotion = (): boolean => ['1', 'true'].includes(process.env['STORYBOOK_REDUCED_MOTION'] ?? '');
const transformSource = (code: string, storyContext: StoryContext<any>): string => {
  const render = storyContext.component;

  if (render) {
    const element = React.isValidElement(render)
      ? render
      : React.createElement(render as React.ComponentType<any>, storyContext.args);
    const html = ReactDOMServer.renderToStaticMarkup(element);

    return prettier.format(html, {
      parser: 'html',
      plugins: [prettierHtml],
    });
  }
  return code;
};
const preview: Preview = {
  decorators: [
    // Enable `utrecht-document` component as backdrop
    // Enable `utrecht-theme` to configure the design tokens
    // Ensure old html templates will be rendered as react component
    (Story: any, storyContext: any): ReactElement => {
      // Hack to make current args for a story available in the transformSource of the docs addon
      storyContext.parameters['args'] = storyContext.args;

      return (
        <div
          className={clsx('utrecht-document', 'utrecht-document--surface', {
            'utrecht-reduced-motion': isStorybookReducedMotion,
          })}
        >
          {Story()}
        </div>
      );
    },
  ],
  parameters: {
    // Make the "Docs" tab the default, instead of the "Canvas" tab
    viewMode: 'docs',

    previewTabs: {
      // Move the "Docs" tab to the front
      'storybook/docs/panel': { index: -1, title: 'Documentation' },
      canvas: { title: 'Demo' },
    },

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

    // Configure @storybook/addon-docs
    docs: {
      // Show code by default.
      // Stories without concise code snippets can hide the code at Story level.
      source: {
        state: 'open',
        transform: transformSource,
      },
      page: () => {
        // Exclude `<Title>` because the title comes from the Markdown file
        return (
          <>
            <Description />
            <Primary />
            <Controls />
            <Stories />
          </>
        );
      },
    },
    ...addonStatus,
    ...addonThemes,
    ...addonViewport,
  },
  tags: ['autodocs'],
};

export default preview;
