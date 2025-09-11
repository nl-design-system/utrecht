import { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@utrecht/component-library-react/dist/css-module/index';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/tooltip-css/README.md?raw';
import tokensDefinition from '@utrecht/tooltip-css/dist/tokens.mjs';
import { Tooltip, TooltipAnchor } from '@utrecht/tooltip-react/dist/css.mjs';
import React from 'react';
import { designTokenStory } from './util.js';

const meta = {
  title: 'React Component/Tooltip',
  id: 'react-tooltip',
  component: Tooltip,
  decorators: [
    (Story) => (
      <div style={{ padding: '3em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <TooltipAnchor>
          <Button appearance="primary-action-button">Click me!</Button>
          {Story()}
        </TooltipAnchor>
      </div>
    ),
  ],

  args: {
    children: 'Hello, World!',
  },
  argTypes: {
    position: {
      description: 'Position',
      control: { type: 'select' },
      options: {
        '': undefined,
        'block-start': 'block-start',
        'block-end': 'block-end',
        'inline-start': 'inline-start',
        'inline-end': 'inline-end',
        top: 'top',
        right: 'right',
        bottom: 'bottom',
        left: 'left',
      },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: false },
      },
    },
    status: {
      description: 'Status Tooltip',
      control: 'boolean',
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-tooltip',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const BlockStart: Story = {
  args: {
    position: 'block-start',
  },
};
export const BlockEnd: Story = {
  args: {
    position: 'block-end',
  },
};
export const InlineStart: Story = {
  args: {
    position: 'inline-start',
  },
};
export const InlineEnd: Story = {
  args: {
    position: 'inline-end',
  },
};
export const Top: Story = {
  args: {
    position: 'top',
  },
};
export const Right: Story = {
  args: {
    position: 'right',
  },
};

export const Bottom: Story = {
  args: {
    position: 'bottom',
  },
};
export const Left: Story = {
  args: {
    position: 'left',
  },
};

export const DesignTokens = designTokenStory(meta);
