/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Page, PageContent, PageFooter, PageHeader } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/page-css/README.md?raw';
import tokensDefinition from '@utrecht/page-css/src/tokens.json';
import React from 'react';
import { PdfPreview } from './PdfPreview';

const meta = {
  title: 'PDF Component/Page',
  id: 'pdf-page',
  component: Page,
  argTypes: {
    children: {
      description: 'Page content',
    },
  },
  args: {
    children: [],
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fpage',
    layout: 'fullscreen',
    tokensPrefix: 'utrecht-page',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: () => <PdfPreview component="Page" src="pdf-page-1.png" download="pdf-page.pdf" />,
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <PageHeader>Header area</PageHeader>,
      <PageContent>
        <main className="utrecht-page-content__main">Content area</main>
      </PageContent>,
      <PageFooter>Footer area</PageFooter>,
    ],
  },
};
