/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/emphasis/README.md?raw';
import tokensDefinition from '@utrecht/components/emphasis/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from '../components/util';

const Strong = ({ children }) => <strong>{children}</strong>;

const meta = {
  title: 'HTML Component/Strong',
  id: 'html-strong',
  component: Strong,
  decorators: [htmlContentDecorator],
  argTypes: {
    children: {
      description: 'Content of the strong emphasis',
    },
  },
  args: {
    children: '',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-emphasis',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Strong>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    docs: {
      description: {
        story: `Markup using the \`<strong>\` element.

Strong emphasis: very important or urgent content`,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
