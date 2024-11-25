import { Meta, StoryObj } from '@storybook/react';
import { Page } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/page-css/README.md?raw';
import tokensDefinition from '@utrecht/page-css/dist/tokens.mjs';
import React from 'react';
import { Default as PageContent } from './PageContent.stories.js';
import { Default as PageHeader } from './PageContent.stories.js';
import { Default as PageFooter } from './PageFooter.stories.js';
import { designTokenStory } from './util.js';

const meta = {
  title: 'React Component/Page',
  id: 'react-page',
  component: Page,
  subcomponents: { PageContent, PageFooter, PageHeader },
  args: {
    children: [
      <PageHeader {...PageContent.args} />,
      <PageContent {...PageContent.args} />,
      <PageFooter {...PageFooter.args} />,
    ],
  },
  parameters: {
    tokensPrefix: 'utrecht-page',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
