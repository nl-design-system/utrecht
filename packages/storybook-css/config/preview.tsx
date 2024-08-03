/* eslint-env node */
import { Controls, Description, Primary, Stories } from '@storybook/blocks';
import type { Preview } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import { ButtonGroup } from '@utrecht/component-library-react/src/css-module';
import { addonStatus } from '@utrecht/storybook-helpers/dist/addon-status';
import { addonThemes } from '@utrecht/storybook-helpers/dist/addon-themes';
import { addonViewport } from '@utrecht/storybook-helpers/dist/addon-viewport';
import { defineCustomElements } from '@utrecht/web-component-library-stencil/loader';
import { clsx } from 'clsx';
import prettierBabel from 'prettier/parser-babel';
import prettier from 'prettier/standalone';
import React, { ReactElement } from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { CommunityFigmaBlock, FigmaBlock } from './FigmaBlock';
import { GitHubBlock } from './GitHubBlock';
import 'firacode/distr/fira_code.css';
import '@utrecht/components/index.scss';
import '@utrecht/html-content-css/src/index.scss';
import '@utrecht/design-tokens/dist/index.css';
import '@utrecht/design-tokens/dist/property.css';
import '@utrecht/design-tokens/dist/dark/index.css';
import '@nl-design-system-unstable/amsterdam-design-tokens/dist/index.css';
import '@nl-design-system-unstable/rotterdam-design-tokens/dist/index.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import '@utrecht/design-tokens/src/background-image-icon.scss';
import '@utrecht/storybook-helpers/src/storybook-docs.scss';
import { NlDesignSystemBlock } from './NlDesignSystemBlock';

defineCustomElements();

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
            'utrecht-reduced-motion': ['1', 'true'].includes(process.env['STORYBOOK_REDUCED_MOTION'] ?? ''),
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
        order: ['CSS Component', ['README', 'Changelog']],
      },
    },

    // Configure @storybook/addon-docs
    docs: {
      page: () => {
        const buttons = [<FigmaBlock />, <CommunityFigmaBlock />, <GitHubBlock />, <NlDesignSystemBlock />].filter(
          Boolean,
        );
        // Exclude `<Title>` because the title comes from the Markdown file
        return (
          <>
            {buttons.length > 0 ? <ButtonGroup>{buttons}</ButtonGroup> : null}
            <Description />
            <Primary />
            <Controls />
            <Stories />
          </>
        );
      },
      // Show code by default.
      // Stories without concise code snippets can hide the code at Story level.
      source: {
        state: 'open',
      },
      transformSource: (src: string, storyContext: StoryContext<any>): string => {
        // Ensure valid HTML in the Preview source
        const render =
          typeof storyContext.component === 'function'
            ? storyContext.component
            : typeof storyContext.component?.render === 'function'
            ? storyContext.component?.render
            : null;

        if (render) {
          return prettier.format(ReactDOMServer.renderToStaticMarkup(render(storyContext.args)), {
            parser: 'babel',
            plugins: [prettierBabel],
          });
        }
        return src;
      },
    },
    ...addonStatus,
    ...addonThemes,
    ...addonViewport,
  },
};

export default preview;
