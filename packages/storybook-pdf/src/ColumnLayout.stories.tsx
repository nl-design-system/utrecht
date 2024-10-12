/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/column-layout-css/README.md?raw';
import pdfDocs from '@utrecht/column-layout-css/docs/technology-pdf.nl.md?raw';
import { ColumnLayout } from '@utrecht/component-library-react';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import React from 'react';
import { PdfPreview } from './PdfPreview';

const meta = {
  title: 'PDF Component/Column Layout',
  id: 'pdf-column-layout',
  component: ColumnLayout,
  argTypes: {
    children: {
      description: 'Content of the columns.',
      control: 'text',
    },
  },
  args: {
    children: [],
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fcolumn-layout',
    status: {
      type: 'WORK IN PROGRESS',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme, pdfDocs]),
      },
    },
  },
  render: () => <PdfPreview component="Column Layout" src="pdf-column-layout-1.png" download="pdf-column-layout.pdf" />,
} satisfies Meta<typeof ColumnLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ThreeColumns: Story = {
  name: '3 columns',
  render: () => (
    <PdfPreview
      component="Column Layout"
      src="pdf-column-layout-column-count-3-1.png"
      download="pdf-column-layout-column-count-3.pdf"
    />
  ),
};
