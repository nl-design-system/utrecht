/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/mark/README.md?raw';
import tokensDefinition from '@utrecht/components/mark/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';

const Mark = ({ children }) => <mark>{children}</mark>;

const meta = {
  title: 'HTML Component/Mark',
  id: 'html-mark',
  component: Mark,
  decorators: [htmlContentDecorator],
  argTypes: {
    children: {
      description: 'Content of the marked text',
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
    tokensPrefix: 'utrecht-mark',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Mark>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `<mark>` element.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
