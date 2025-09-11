import { Meta, StoryObj } from '@storybook/react-vite';
import readme from '@utrecht/action-group-css/README.md?raw';
import tokensDefinition from '@utrecht/action-group-css/dist/tokens.mjs';
import { ActionGroup, Button } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import React from 'react';
import { designTokenStory } from './util.js';

const meta = {
  title: 'React Component/Action group',
  id: 'react-action-group',
  component: ActionGroup,
  args: {},
  argTypes: {
    direction: {
      description: 'Layout of the action group',
      control: 'select',
      options: {
        '': undefined,
        column: 'column',
        row: 'row',
      },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-action-group',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof ActionGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Button appearance="primary-action-button">Save and continue</Button>,
      <Button appearance="secondary-action-button">Back</Button>,
    ],
  },
};

export const DirectionColumn: Story = {
  args: {
    ...Default.args,
    direction: 'column',
  },
};

export const DesignTokens = designTokenStory(meta);
