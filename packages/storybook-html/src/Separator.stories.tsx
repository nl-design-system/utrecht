/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/separator/README.md?raw';
import tokensDefinition from '@utrecht/components/separator/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';

const Separator = () => <hr />;

const meta = {
  title: 'HTML Component/Separator',
  id: 'html-separator',
  component: Separator,
  decorators: [htmlContentDecorator],
  argTypes: {},
  args: {},
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-separator',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `<hr>` element.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
