/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react-vite';
import { Paragraph } from '@utrecht/component-library-react';
import readme from '@utrecht/paragraph-css/README.md?raw';
import pdfDocs from '@utrecht/paragraph-css/docs/technology-pdf.nl.md?raw';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import React from 'react';
import { PdfPreview } from './PdfPreview';

const meta = {
  title: 'PDF Component/Paragraph',
  id: 'pdf-paragraph',
  component: Paragraph,
  argTypes: {},
  args: {},
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fparagraph',
    nldesignsystem: 'https://nldesignsystem.nl/paragraph',
    status: {
      type: 'ALPHA',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme, pdfDocs]),
      },
    },
  },
  render: () => <PdfPreview component="Paragraph" src="pdf-paragraph-1.png" download="pdf-paragraph.pdf" />,
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
