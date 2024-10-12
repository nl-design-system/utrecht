/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/checkbox-css/README.md?raw';
import pdfDocs from '@utrecht/checkbox-css/docs/technology-pdf.nl.md?raw';
import { FormFieldCheckbox } from '@utrecht/component-library-react';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import React from 'react';
import { PdfPreview } from './PdfPreview';

const meta = {
  title: 'PDF Component/Form Field with Checkbox',
  id: 'pdf-form-field-checkbox',
  component: FormFieldCheckbox,
  argTypes: {},
  args: {},
  tags: ['autodocs'],
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fcheckbox',
    nldesignsystem: 'https://nldesignsystem.nl/checkbox',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-checkbox',
    docs: {
      description: {
        component: mergeMarkdown([readme, pdfDocs]),
      },
    },
  },

  render: () => (
    <PdfPreview
      component="Form Field with Checkbox"
      src="pdf-form-field-checkbox-1.png"
      download="pdf-form-field-checkbox.pdf"
    />
  ),
} satisfies Meta<typeof FormFieldCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  name: 'Checked',
  render: () => (
    <PdfPreview
      component="Form Field with Checkbox that is checked"
      src="pdf-form-field-checkbox-checked-1.png"
      download="pdf-form-field-checkbox-checked.pdf"
    />
  ),
};
