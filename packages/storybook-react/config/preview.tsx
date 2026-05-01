import addonA11y from '@storybook/addon-a11y';
import addonDocs from '@storybook/addon-docs';
import { Controls, Description, Primary, Stories } from '@storybook/addon-docs/blocks';
import { withTests } from '@storybook/addon-jest';
import { definePreview } from '@storybook/react-vite';
import results from '@utrecht/component-library-react/dist/.jest-test-results.json';
import { addonStatus as addonStatusParameters } from '@utrecht/storybook-helpers/src/addon-status';
import { addonThemes as addonThemesParameters } from '@utrecht/storybook-helpers/src/addon-themes';
import { addonViewport as addonViewportParameters } from '@utrecht/storybook-helpers/src/addon-viewport';
import React from 'react';
import addonPseudoStates from 'storybook-addon-pseudo-states';
import '@utrecht/storybook-helpers/dist/font-family.js';
import '@utrecht/design-tokens/dist/index.css';
import '@utrecht/storybook-helpers/src/storybook-docs.scss';
import '@utrecht/component-library-css/dist/index.css';

export default definePreview({
  addons: [addonA11y(), addonPseudoStates(), addonDocs()],
  decorators: [
    (Story: any) => <div className="utrecht-root utrecht-theme">{Story()}</div>,
    ///
    withTests({ results }),
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      // Show code by default.
      // Stories without concise code snippets can hide the code at Story level.
      source: {
        state: 'open',
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
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'React Component',
          ['README', 'README (Nederlands)', 'Changelog', 'Developing components', 'Testing components'],
        ],
      },
    },
    ...addonStatusParameters,
    ...addonThemesParameters,
    ...addonViewportParameters,
  },

  tags: ['autodocs'],
});
