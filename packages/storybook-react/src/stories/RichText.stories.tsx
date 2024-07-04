// performance optimizations are not relevant for story rendering, ignore ESLint

import { Meta, StoryObj } from '@storybook/react';
import { Paragraph, RichText } from '@utrecht/component-library-react';
import readme from '@utrecht/components/rich-text/README.md?raw';
// import tokensDefinition from '@utrecht/components/card-list/src/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Rich Text',
  id: 'react-rich-text',
  component: RichText,
  argTypes: {},
  args: {
    children: [<Paragraph>test</Paragraph>],
  },
  parameters: {
    tokensPrefix: 'utrecht-card-list',
    tokens,
    // tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
