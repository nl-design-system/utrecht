/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/code/README.md?raw';
import tokensDefinition from '@utrecht/components/code/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';

const Code = ({ children }) => <code>{children}</code>;

const meta = {
  title: 'HTML Component/Code',
  id: 'html-code',
  component: Code,
  decorators: [htmlContentDecorator],
  argTypes: {
    children: {
      description: 'Code',
      control: 'text',
    },
  },
  args: {
    children: '<input type="url" value="https://example.fi/">',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-code',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Code>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `<code>` element.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
