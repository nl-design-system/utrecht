/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormFieldTextarea } from '@utrecht/component-library-react';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import readme from '@utrecht/textarea-css/README.md?raw';
import pdfDocs from '@utrecht/textarea-css/docs/technology-pdf.nl.md?raw';
import React from 'react';
import { PdfPreview } from './PdfPreview';

const meta = {
  title: 'PDF Component/Form field with Textarea',
  id: 'pdf-form-field-textarea',
  component: FormFieldTextarea,
  argTypes: {},
  args: {},
  tags: ['autodocs'],
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Ftextarea',
    nldesignsystem: 'https://nldesignsystem.nl/text-input',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-textarea',
    docs: {
      description: {
        component: mergeMarkdown([readme, pdfDocs]),
      },
    },
  },

  render: () => (
    <PdfPreview
      component="Form Field with Textarea"
      src="pdf-form-field-textarea-1.png"
      download="pdf-form-field-textarea.pdf"
    />
  ),
} satisfies Meta<typeof FormFieldTextarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Rows: Story = {
  name: 'Textarea with space for many rows of text',
  render: () => (
    <PdfPreview
      component="Form Field with Textarea with space for many rows of text"
      src="pdf-form-field-textarea-rows-1.png"
      download="pdf-form-field-textarea-rows.pdf"
    />
  ),
};
