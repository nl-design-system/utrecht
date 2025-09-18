/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from '@utrecht/component-library-react';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import readme from '@utrecht/textarea-css/README.md?raw';
import pdfDocs from '@utrecht/textarea-css/docs/technology-pdf.nl.md?raw';
import React from 'react';
import { PdfPreview } from './PdfPreview';

const meta = {
  title: 'PDF Component/Textarea',
  id: 'pdf-textarea',
  component: Textarea,
  argTypes: {},
  args: {},
  tags: ['autodocs'],
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Ftextarea',
    nldesignsystem: 'https://nldesignsystem.nl/textarea',
    status: {
      type: 'WORK IN PROGRESS',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme, pdfDocs]),
      },
    },
  },
  render: () => <PdfPreview component="Textarea" src="pdf-textarea-1.png" download="pdf-textarea.pdf" />,
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
