/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/number-value/README.md?raw';
import tokensDefinition from '@utrecht/components/number-value/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtNumberValue, UtrechtParagraph } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/Number value',
  id: 'web-component-number-value',
  component: UtrechtNumberValue,
  argTypes: {
    children: {
      description: 'Text content',
      control: 'text',
    },
  },
  args: {},
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-number-value',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  decorators: [(Story) => <UtrechtParagraph>{Story()}</UtrechtParagraph>],
} satisfies Meta<typeof UtrechtNumberValue>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '1.234.567.890',
    value: '1234567890',
  },
};

export const DesignTokens = designTokenStory(meta);
