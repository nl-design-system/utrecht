import { Meta, StoryObj } from '@storybook/react';
import { PageContent, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/page-content-css/README.md?raw';
import tokensDefinition from '@utrecht/page-content-css/dist/tokens.mjs';
import React from 'react';
import { designTokenStory } from './util.js';

const meta = {
  title: 'React Component/Page Content',
  id: 'react-page-content',
  component: PageContent,
  args: {
    children: <Paragraph>Page Content Area</Paragraph>,
  },
  parameters: {
    tokensPrefix: 'utrecht-page-content',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof PageContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
