/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/emphasis/README.md?raw';
import tokensDefinition from '@utrecht/components/emphasis/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React, { HTMLAttributes, PropsWithChildren } from 'react';
import hiddenDocs from './_hidden.md?raw';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';
import { hidden } from './util/htmlArgTypes';

const Strong = ({ ...restProps }: PropsWithChildren<HTMLAttributes<HTMLElement>>) => <strong {...restProps} />;

const meta = {
  title: 'HTML Component/Strong',
  id: 'html-strong',
  component: Strong,
  decorators: [htmlContentDecorator],
  argTypes: {
    children: {
      description: 'Content of the strong emphasis',
    },
    hidden,
  },
  args: {
    children: '',
    hidden: false,
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

export const Hidden: Story = {
  args: {
    ...Default.args,
    hidden: true,
  },
  parameters: {
    docs: {
      description: {
        story: hiddenDocs,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
