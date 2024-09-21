/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { UnorderedList } from '@utrecht/component-library-react/src/UnorderedList';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import readme from '@utrecht/unordered-list-css/README.md?raw';
import pdfDocs from '@utrecht/unordered-list-css/docs/technology-pdf.nl.md?raw';
import React from 'react';
import { PdfPreview } from './PdfPreview';

const meta = {
  title: 'PDF Component/Unordered list',
  id: 'pdf-unordered-list',
  component: UnorderedList,
  argTypes: {},
  args: {},
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Funordered-list',
    nldesignsystem: 'https://nldesignsystem.nl/unordered-list',
    status: {
      type: 'WORK IN PROGRESS',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme, pdfDocs]),
      },
    },
  },
  render: () => (
    <PdfPreview component="Unordered List" src="pdf-unordered-list-1.png" download="pdf-unordered-list.pdf" />
  ),
} satisfies Meta<typeof UnorderedList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
