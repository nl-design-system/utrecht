import type { Meta, StoryObj } from '@storybook/react';
import { Alert, Heading1, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/alert/README.md?raw';
import tokensDefinition from '@utrecht/components/alert/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Alert',
  id: 'react-alert',
  component: Alert,
  args: {
    children: [
      <Heading1>Lorem ipsum</Heading1>,
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>,
    ],
  },
  parameters: {
    tokensPrefix: 'utrecht-alert',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Info: Story = {
  args: {
    ...Default.args,
    type: 'info',
  },
};

export const OK: Story = {
  args: {
    ...Default.args,
    type: 'ok',
  },
};

export const Warning: Story = {
  args: {
    ...Default.args,
    type: 'warning',
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    type: 'error',
  },
};

export const DesignTokens = designTokenStory(meta);
