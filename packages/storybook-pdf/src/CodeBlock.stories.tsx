/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/code-block-css/README.md?raw';
import pdfDocs from '@utrecht/code-block-css/docs/technology-pdf.nl.md?raw';
import { CodeBlock } from '@utrecht/component-library-react';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import React from 'react';
import { PdfPreview } from './PdfPreview';

const meta = {
  title: 'PDF Component/Code block',
  id: 'pdf-code-block',
  component: CodeBlock,
  argTypes: {
    children: {
      description: 'Content of the code block.',
      control: 'text',
    },
    element: {
      description: 'Choose the HTML element',
      control: 'select',
      options: ['', 'div', 'pre'],
    },
  },
  args: {
    children: [],
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fcode-block',
    status: {
      type: 'WORK IN PROGRESS',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme, pdfDocs]),
      },
    },
  },
  render: () => <PdfPreview component="Code Block" src="pdf-code-block-1.png" download="pdf-code-block.pdf" />,
} satisfies Meta<typeof CodeBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
