import { Meta, StoryObj } from '@storybook/react';
import { BadgeCounter, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/badge-counter/README.md?raw';
import tokensDefinition from '@utrecht/components/badge-counter/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Badge counter',
  id: 'react-badge-counter',
  component: BadgeCounter,
  args: {
    children: '42',
  },
  argTypes: {
    value: {
      name: 'value',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: '' } },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-badge-counter',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  decorators: [(Story) => <Paragraph>{Story()}</Paragraph>],
} satisfies Meta<typeof BadgeCounter>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Value: Story = {
  args: {
    ...Default.args,
    children: '50,000',
    value: '50000',
  },
};

export const DesignTokens = designTokenStory(meta);
