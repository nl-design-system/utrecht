/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { DataList } from '@utrecht/component-library-react';
import readme from '@utrecht/data-list-css/README.md?raw';
import pdfDocs from '@utrecht/data-list-css/docs/technology-pdf.nl.md?raw';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import React from 'react';
import { PdfPreview } from './PdfPreview';

const meta = {
  title: 'PDF Component/Data list',
  id: 'pdf-data-list',
  component: DataList,
  argTypes: {},
  args: {},
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fdata-list',
    nldesignsystem: 'https://nldesignsystem.nl/summary-list',
    status: {
      type: 'WORK IN PROGRESS',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme, pdfDocs]),
      },
    },
  },
  render: () => <PdfPreview component="Data List" src="pdf-data-list-1.png" download="pdf-data-list.pdf" />,
} satisfies Meta<typeof DataList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
