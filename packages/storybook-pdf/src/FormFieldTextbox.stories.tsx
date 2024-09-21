/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import { FormFieldTextbox } from '@utrecht/component-library-react';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import readme from '@utrecht/textbox-css/README.md?raw';
import pdfDocs from '@utrecht/textbox-css/docs/technology-pdf.nl.md?raw';
import React from 'react';
import { PdfPreview } from './PdfPreview';

const meta = {
  title: 'PDF Component/Textbox',
  id: 'pdf-textbox',
  component: FormFieldTextbox,
  argTypes: {},
  args: {},
  tags: ['autodocs'],
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Ftextbox',
    nldesignsystem: 'https://nldesignsystem.nl/text-input',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-textbox',
    docs: {
      description: {
        component: mergeMarkdown([readme, pdfDocs]),
      },
    },
  },

  render: () => (
    <PdfPreview
      component="Form Field with Textbox"
      src="pdf-form-field-textbox-1.png"
      download="pdf-form-field-textbox.pdf"
    />
  ),
} satisfies Meta<typeof FormFieldTextbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
};
