/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Logo } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/logo-css/README.md?raw';
import pdfDocs from '@utrecht/logo-css/docs/technology-pdf.nl.md?raw';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import React from 'react';
import { PdfPreview } from './PdfPreview';

const meta = {
  title: 'PDF Component/Logo',
  id: 'pdf-logo',
  component: Logo,
  argTypes: {},
  args: {},
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Flogo',
    nldesignsystem: 'https://nldesignsystem.nl/logo',
    status: {
      type: 'ALPHA',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme, pdfDocs]),
      },
    },
  },
  render: () => <PdfPreview component="Logo" src="pdf-logo-1.png" download="pdf-logo.pdf" />,
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Caption: Story = {
  render: () => <PdfPreview component="Logo" src="pdf-logo-caption-1.png" download="pdf-logo-caption.pdf" />,
};
