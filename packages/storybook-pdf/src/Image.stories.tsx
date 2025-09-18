/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react-vite';
import { Image } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/img-css/README.md?raw';
import pdfDocs from '@utrecht/img-css/docs/technology-pdf.nl.md?raw';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import React from 'react';
import { PdfPreview } from './PdfPreview';

const meta = {
  title: 'PDF Component/Image',
  id: 'pdf-image',
  component: Image,
  argTypes: {},
  args: {},
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fimage',
    nldesignsystem: 'https://nldesignsystem.nl/image',
    status: {
      type: 'ALPHA',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme, pdfDocs]),
      },
    },
  },
  render: () => <PdfPreview component="Link" src="pdf-image-alt-1.png" download="pdf-image-alt.pdf" />,
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ImageNotFound: Story = {
  render: () => <PdfPreview component="Link" src="pdf-image-actual-text-1.png" download="pdf-image-actual-text.pdf" />,
};
