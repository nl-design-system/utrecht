import { Controls, Description, Primary, Stories } from '@storybook/addon-docs/blocks';
import { withTests } from '@storybook/addon-jest';
import { Preview } from '@storybook/react-vite';
import results from '@utrecht/component-library-react/dist/.jest-test-results.json';
import { addonStatus } from '@utrecht/storybook-helpers/src/addon-status';
import { addonThemes } from '@utrecht/storybook-helpers/src/addon-themes';
import { addonViewport } from '@utrecht/storybook-helpers/src/addon-viewport';
import '@utrecht/storybook-helpers/dist/font-family.js';
import React from 'react';
import '@utrecht/design-tokens/dist/index.css';
import '@utrecht/storybook-helpers/src/storybook-docs.scss';
import '@utrecht/component-library-css/dist/index.css';

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
    ...addonStatus,
    ...addonThemes,
    ...addonViewport,
  },

  tags: ['autodocs'],
};

export default preview;
