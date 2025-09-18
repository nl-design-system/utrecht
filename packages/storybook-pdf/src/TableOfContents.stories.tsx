/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react-vite';
import { TableOfContents } from '@utrecht/component-library-react/dist/css-module';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import readme from '@utrecht/table-of-contents-css/README.md?raw';
import pdfDocs from '@utrecht/table-of-contents-css/docs/technology-pdf.nl.md?raw';
import React from 'react';
import { PdfPreview } from './PdfPreview';

const meta = {
  title: 'PDF Component/Table of Contents',
  id: 'pdf-table-of-contents',
  component: TableOfContents,
  argTypes: {},
  args: {},
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Ftable-of-contents',
    nldesignsystem: 'https://nldesignsystem.nl/table-of-contents',
    status: {
      type: 'WORK IN PROGRESS',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme, pdfDocs]),
      },
    },
  },
  render: () => (
    <PdfPreview component="Table of Contents" src="pdf-table-of-contents-1.png" download="pdf-table-of-contents.pdf" />
  ),
} satisfies Meta<typeof TableOfContents>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
