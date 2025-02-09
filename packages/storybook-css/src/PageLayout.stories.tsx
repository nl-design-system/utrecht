/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { PageBody } from '@utrecht/page-body-react';
import { PageFooter } from '@utrecht/page-footer-react';
import { PageHeader } from '@utrecht/page-header-react';
import readme from '@utrecht/page-layout-css/README.md?raw';
import tokensDefinition from '@utrecht/page-layout-css/src/tokens.json';
import { PageLayout } from '@utrecht/page-layout-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Page Layout',
  id: 'css-page-layout',
  component: PageLayout,
  argTypes: {
    children: {
      description: 'Page layout content',
    },
  },
  args: {
    children: [],
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fpage-layout',
    layout: 'fullscreen',
    tokensPrefix: 'utrecht-page-layout',
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
} satisfies Meta<typeof PageLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <PageHeader>Header area</PageHeader>,
      <PageBody>
        <main>Content area</main>
      </PageBody>,
      <PageFooter>Footer area</PageFooter>,
    ],
  },
};

export const DesignTokens = designTokenStory(meta);
