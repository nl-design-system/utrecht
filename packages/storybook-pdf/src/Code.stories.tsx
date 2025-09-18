/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react-vite';
import readme from '@utrecht/code-css/README.md?raw';
import pdfDocs from '@utrecht/code-css/docs/technology-pdf.nl.md?raw';
import { Code } from '@utrecht/component-library-react';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import React from 'react';
import { PdfPreview } from './PdfPreview';

const meta = {
  title: 'PDF Component/Code',
  id: 'pdf-code',
  component: Code,
  argTypes: {},
  args: {},
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fcode',
    status: {
      type: 'WORK IN PROGRESS',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme, pdfDocs]),
      },
    },
  },
  render: () => <PdfPreview component="Code" src="pdf-code-1.png" download="pdf-code.pdf" />,
} satisfies Meta<typeof Code>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
