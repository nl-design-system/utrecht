/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/value-number/README.md?raw';
import tokensDefinition from '@utrecht/components/value-number/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { NumberValue } from './NumberValue';
import { designTokenStory } from './util';
import '@utrecht/components/value-number/css/index.scss';

const meta = {
  title: 'CSS Component/Number Value',
  id: 'css-value-number',
  component: NumberValue,
  argTypes: {
    value: {
      description: 'Value',
      defaultValue: '',
      type: {
        name: 'text',
        required: false,
      },
    },
    appearance: {
      description: 'Appearance',
      options: ['', 'positive', 'negative'],
      control: { type: 'select' },
      defaultValue: '',
      type: {
        required: false,
      },
    },
    textContent: {
      description: 'Children',
      type: 'text',
      defaultValue: '',
    },
  },
  args: {
    // A Mersenne prime number
    textContent: '137438953471',
    value: 137438953471,
  },
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-value-number',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof NumberValue>;

export default meta;

export const Default: StoryObj<typeof NumberValue> = {
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  name: 'Number value',
};

export const Positive: StoryObj<typeof NumberValue> = {
  args: {
    value: 123,
    textContent: '123',
    appearance: 'positive',
  },
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  name: 'Positive',
};

export const Negative: StoryObj<typeof NumberValue> = {
  args: {
    value: -123,
    textContent: '-123',
    appearance: 'negative',
  },
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  name: 'Negative',
};

export const NumberFormatting: StoryObj<typeof NumberValue> = {
  args: {
    value: 137438953471,
    textContent: new Intl.NumberFormat('nl-NL').format(137438953471),
  },
  decorators: [(Story) => <span lang="nl-NL">{Story()}</span>],

  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },

  name: 'Number formatting',
};

export const DesignTokens: StoryObj<typeof NumberValue> = designTokenStory(meta);
