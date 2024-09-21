/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '@utrecht/component-library-react';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import readme from '@utrecht/table-css/README.md?raw';
import pdfDocs from '@utrecht/table-css/docs/technology-pdf.nl.md?raw';
import React from 'react';
import { PdfPreview } from './PdfPreview';

const meta = {
  title: 'PDF Component/Table',
  id: 'pdf-table',
  component: Table,
  argTypes: {},
  args: {},
  tags: ['autodocs'],
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Ftable',
    nldesignsystem: 'https://nldesignsystem.nl/table',
    status: {
      type: 'WORK IN PROGRESS',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme, pdfDocs]),
      },
    },
  },
  render: () => <PdfPreview component="Table" src="pdf-table-1.png" download="pdf-table.pdf" />,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
