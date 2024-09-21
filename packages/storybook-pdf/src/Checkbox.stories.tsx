/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/checkbox-css/README.md?raw';
import pdfDocs from '@utrecht/checkbox-css/docs/technology-pdf.nl.md?raw';
import { Checkbox } from '@utrecht/component-library-react';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import React from 'react';
import { PdfPreview } from './PdfPreview';

const meta = {
  title: 'PDF Component/Checkbox',
  id: 'pdf-checkbox',
  component: Checkbox,
  args: {
    checked: false,
    disabled: false,
  },
  argTypes: {
    checked: {
      description: 'Checked',
      control: 'boolean',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: false },
      },
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: false },
      },
    },
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fcheckbox',
    nldesignsystem: 'https://nldesignsystem.nl/checkbox',
    status: {
      type: 'WORK IN PROGRESS',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme, pdfDocs]),
      },
    },
  },
  render: () => <PdfPreview component="Checkbox" src="pdf-checkbox-1.png" download="pdf-checkbox.pdf" />,
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
