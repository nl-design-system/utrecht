/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Emphasis, Strong as StrongComponent } from '@utrecht/component-library-react';
import readme from '@utrecht/components/emphasis/README.md?raw';
import tokensDefinition from '@utrecht/components/emphasis/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { designTokenStory } from './design-token-story';

interface EmphasisStoryProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  stressed?: boolean;
  strong?: boolean;
}

const EmphasisStory = ({ children, stressed, strong }: EmphasisStoryProps) => {
  let out = children;
  if (stressed) {
    out = <Emphasis>{out}</Emphasis>;
  }
  if (strong) {
    out = <StrongComponent>{out}</StrongComponent>;
  }
  return out;
};

const meta = {
  title: 'CSS Component/Emphasis',
  id: 'css-emphasis',
  component: EmphasisStory,
  argTypes: {
    children: {
      description: 'Set the text content',
      control: 'text',
    },
    stressed: {
      description: 'Stressed emphasis',
      control: 'boolean',
    },
    strong: {
      description: 'Strong emphasis: very important or urgent content',
      control: 'boolean',
    },
  },
  args: {
    stressed: false,
    strong: false,
    children: '',
  },
  parameters: {
    tokensPrefix: 'utrecht-emphasis',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof EmphasisStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stressed: true,
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via `utrecht-emphasis` and `utrecht-emphasis--stressed` class name.',
      },
    },
  },
};

export const Strong: Story = {
  args: {
    strong: true,
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via `utrecht-emphasis` and `utrecht-emphasis--strong` class name.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
