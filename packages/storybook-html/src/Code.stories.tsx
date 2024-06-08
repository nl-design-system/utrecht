/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/code-css/README.md?raw';
import tokensDefinition from '@utrecht/code-css/src/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React, { HTMLAttributes, PropsWithChildren } from 'react';
import hiddenDocs from './_hidden.md?raw';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';
import { hidden } from './util/htmlArgTypes';

const Code = ({ ...restProps }: PropsWithChildren<HTMLAttributes<HTMLElement>>) => <code {...restProps} />;

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
    hidden,
  },
  args: {
    children: '<input type="url" value="https://example.fi/">',
    hidden: false,
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
