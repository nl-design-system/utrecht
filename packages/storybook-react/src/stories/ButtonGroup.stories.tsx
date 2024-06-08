import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/button-group-css/README.md?raw';
import tokensDefinition from '@utrecht/button-group-css/src/tokens.json';
import { Button, ButtonGroup } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Button group',
  id: 'react-button-group',
  component: ButtonGroup,
  args: {},
  argTypes: {
    direction: {
      description: 'Layout of the button group',
      control: 'select',
      options: {
        '': undefined,
        column: 'column',
        row: 'row',
      },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-button-group',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof ButtonGroup>;

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
