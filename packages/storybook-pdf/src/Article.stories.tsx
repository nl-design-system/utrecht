import { Meta, StoryObj } from '@storybook/react-vite';
import readme from '@utrecht/article-css/README.md?raw';
import pdfDocs from '@utrecht/article-css/docs/technology-pdf.nl.md?raw';
import { Article, Paragraph } from '@utrecht/component-library-react';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import React from 'react';
import { PdfPreview } from './PdfPreview';

const meta = {
  title: 'PDF Component/Article',
  id: 'pdf-article',
  component: Article,
  args: {
    children: [<Paragraph>The quick brown fox jumps over the lazy dog</Paragraph>],
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Farticle',
    status: {
      type: 'WORK IN PROGRESS',
    },
    docs: {
      description: {
        component: mergeMarkdown([readme, pdfDocs]),
      },
    },
  },
  render: () => <PdfPreview component="Article" src="pdf-article-1.png" download="pdf-article.pdf" />,
} satisfies Meta<typeof Article>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
