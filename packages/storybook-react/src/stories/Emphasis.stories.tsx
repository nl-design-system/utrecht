import { Meta, StoryObj } from '@storybook/react';
import { Emphasis, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/emphasis/README.md?raw';
import tokensDefinition from '@utrecht/components/emphasis/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Emphasis',
  id: 'react-emphasis',
  component: Emphasis,
  args: {
    children: 'Hello, World!',
  },
  parameters: {
    tokensPrefix: 'utrecht-emphasis',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  decorators: [(Story) => <Paragraph>{Story()}</Paragraph>],
} satisfies Meta<typeof Emphasis>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
