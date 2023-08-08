import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { BadgeCounter, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/badge-counter/README.md?raw';
import tokensDefinition from '@utrecht/components/badge-counter/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'CSS Component/Badge Counter',
  id: 'css-badge-counter',
  component: BadgeCounter,
  args: {
    children: '4',
  },
  argTypes: {
    children: {
      name: 'value',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: '' } },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-badge-counter',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      page: () => (
        <>
          <Description>{readme}</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
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
    children: '4',
  },
};

export const TripleDigits: Story = {
  args: {
    ...Default.args,
    children: '316',
  },
};

export const QuadrupleDigits: Story = {
  args: {
    ...Default.args,
    children: '2148',
  },
};

export const Empty: Story = {
  args: {
    ...Default.args,
    children: '',
  },
};

export const DesignTokens = designTokenStory(meta);
