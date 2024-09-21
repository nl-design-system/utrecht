/* eslint-env node */
import { Controls, Description, Primary, Stories } from '@storybook/blocks';
import type { Preview } from '@storybook/react';
import { ButtonGroup } from '@utrecht/component-library-react';
import React from 'react';
import { CommunityFigmaBlock, FigmaBlock } from './FigmaBlock';
import { GitHubBlock } from './GitHubBlock';
import { NlDesignSystemBlock } from './NlDesignSystemBlock';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['PDF Component', ['README', 'Changelog']],
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
    },
    pdfImgBaseUrl: process.env['STORYBOOK_PDF_IMG_BASE_URL'] ?? '',
  },
};

export default preview;
