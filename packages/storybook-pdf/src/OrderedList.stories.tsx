/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react-vite';
import { OrderedList } from '@utrecht/component-library-react';
import readme from '@utrecht/ordered-list-css/README.md?raw';
import pdfDocs from '@utrecht/ordered-list-css/docs/technology-pdf.nl.md?raw';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { PdfPreview } from './PdfPreview';

const meta = {
  title: 'PDF Component/Ordered list',
  id: 'pdf-ordered-list',
  component: OrderedList,
  argTypes: {},
  args: {},
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fordered-list',
    nldesignsystem: 'https://nldesignsystem.nl/ordered-list',
    status: {
      type: 'WORK IN PROGRESS',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme, pdfDocs]),
      },
    },
  },
  render: () => <PdfPreview component="Ordered List" src="pdf-ordered-list-1.png" download="pdf-ordered-list.pdf" />,
} satisfies Meta<typeof OrderedList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
