import { Meta, StoryObj } from '@storybook/react-vite';
import { Paragraph, StatusBadge } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/status-badge-css/README.md?raw';
import tokensDefinition from '@utrecht/status-badge-css/dist/tokens.mjs';
import React from 'react';
import { designTokenStory } from './util.js';

const meta = {
  title: 'React Component/Status badge',
  id: 'react-status-badge',
  component: StatusBadge,
  args: {
    children: 'status',
  },
  argTypes: {
    status: {
      name: 'status',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: '' } },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-status-badge',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  decorators: [(Story) => <Paragraph>{Story()}</Paragraph>],
} satisfies Meta<typeof StatusBadge>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Success: Story = {
  args: {
    ...Default.args,
    children: 'success',
    status: 'success',
  },
};

export const Warning: Story = {
  args: {
    ...Default.args,
    children: 'warning',
    status: 'warning',
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    children: 'error',
    status: 'error',
  },
};

export const Safe: Story = {
  args: {
    ...Default.args,
    children: 'safe',
    status: 'safe',
  },
};

export const Danger: Story = {
  args: {
    ...Default.args,
    children: 'danger',
    status: 'danger',
  },
};

export const Active: Story = {
  args: {
    ...Default.args,
    children: 'active',
    status: 'active',
  },
};
export const Inactive: Story = {
  args: {
    ...Default.args,
    children: 'inactive',
    status: 'inactive',
  },
};
export const Valid: Story = {
  args: {
    ...Default.args,
    children: 'valid',
    status: 'valid',
  },
};
export const Invalid: Story = {
  args: {
    ...Default.args,
    children: 'invalid',
    status: 'invalid',
  },
};

export const DesignTokens = designTokenStory(meta);
