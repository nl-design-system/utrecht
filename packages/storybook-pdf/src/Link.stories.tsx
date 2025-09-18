/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from '@utrecht/component-library-react';
import readme from '@utrecht/link-css/README.md?raw';
import pdfDocs from '@utrecht/link-css/docs/technology-pdf.nl.md?raw';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import React from 'react';
import { PdfPreview } from './PdfPreview';

const meta = {
  title: 'PDF Component/Link',
  id: 'pdf-link',
  component: Link,
  argTypes: {},
  args: {},
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Flink',
    nldesignsystem: 'https://nldesignsystem.nl/link',
    status: {
      type: 'ALPHA',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme, pdfDocs]),
      },
    },
  },
  render: () => <PdfPreview component="Link" src="pdf-link-1.png" download="pdf-link.pdf" />,
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
