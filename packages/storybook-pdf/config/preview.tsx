import { Controls, Description, Primary, Stories } from '@storybook/addon-docs/blocks';
import type { Preview } from '@storybook/react-vite';
import { ButtonGroup } from '@utrecht/button-group-react';
import React from 'react';
import { CommunityFigmaBlock, FigmaBlock } from './FigmaBlock';
import { GitHubBlock } from './GitHubBlock';
import { NlDesignSystemBlock } from './NlDesignSystemBlock';

const preview: Preview = {
  tags: ['autodocs'],
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
