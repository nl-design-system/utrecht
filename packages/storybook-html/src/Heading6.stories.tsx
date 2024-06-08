/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/heading-6-css/README.md?raw';
import tokensDefinition from '@utrecht/heading-6-css/src/tokens.json';
import React, { HTMLAttributes, PropsWithChildren } from 'react';
import hiddenDocs from './_hidden.md?raw';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';
import { hidden } from './util/htmlArgTypes';

const Heading6 = ({ ...restProps }: PropsWithChildren<HTMLAttributes<HTMLElement>>) => <h6 {...restProps} />;

const meta = {
  title: 'HTML Component/Heading/Heading 6',
  id: 'html-heading-6',
  component: Heading6,
  decorators: [htmlContentDecorator],
  argTypes: {
    children: {
      description: 'Content of the heading',
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
    tokensPrefix: 'utrecht-heading-6',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Heading6>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `<h6>` element.',
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
