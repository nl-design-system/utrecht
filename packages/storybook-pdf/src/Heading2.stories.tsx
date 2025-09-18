/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react-vite';
import { Heading2 } from '@utrecht/component-library-react';
import readme from '@utrecht/heading-2-css/README.md?raw';
import pdfDocs from '@utrecht/heading-2-css/docs/technology-pdf.nl.md?raw';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import React from 'react';
import { PdfPreview } from './PdfPreview';

const meta = {
  title: 'PDF Component/Heading/Heading 2',
  id: 'pdf-heading-2',
  component: Heading2,
  argTypes: {
    children: {
      description: 'Tekst van de heading.',
      control: 'text',
    },
  },
  args: {
    children: [],
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fheading',
    nldesignsystem: 'https://nldesignsystem.nl/heading-2',
    status: {
      type: 'ALPHA',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme, pdfDocs]),
      },
    },
  },
  render: () => <PdfPreview component="Heading 2" src="pdf-heading-2-1.png" download="pdf-heading-2.pdf" />,
} satisfies Meta<typeof Heading2>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
