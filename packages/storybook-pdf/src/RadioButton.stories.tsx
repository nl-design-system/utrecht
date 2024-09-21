/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from '@utrecht/component-library-react';
import readme from '@utrecht/radio-button-css/README.md?raw';
import pdfDocs from '@utrecht/radio-button-css/docs/technology-pdf.nl.md?raw';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import clsx from 'clsx';
import React from 'react';
import { PdfPreview } from './PdfPreview';

const meta = {
  title: 'PDF Component/Radio Button',
  id: 'pdf-radio-button',
  component: RadioButton,
  args: {},
  argTypes: {},
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fradio-button',
    nldesignsystem: 'https://nldesignsystem.nl/radio',
    status: {
      type: 'WORK IN PROGRESS',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme, pdfDocs]),
      },
    },
  },
  render: () => <PdfPreview component="Radio Button" src="pdf-radio-button-1.png" download="pdf-radio-button.pdf" />,
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
