/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { NumberValue } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/value-number/README.md?raw';
import tokensDefinition from '@utrecht/components/value-number/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import clsx from 'clsx';
import React from 'react';
import { designTokenStory } from './util';

const NumberValueStory = ({ appearance, ...restProps }) => (
  <NumberValue
    className={clsx(
      appearance === 'negative' && 'utrecht-value-number--negative',
      appearance === 'positive' && 'utrecht-value-number--positive',
    )}
    {...restProps}
  />
);

const meta = {
  title: 'CSS Component/Number value',
  id: 'css-value-number',
  component: NumberValueStory,
  argTypes: {
    children: {
      description: 'Number formatted as human readable text',
      type: {
        name: 'string',
        required: false,
      },
    },
    appearance: {
      description: 'Appearance',
      options: ['', 'positive', 'negative'],
      control: { type: 'select' },
      type: {
        required: false,
      },
    },
    value: {
      description: 'Value as programmatically determinable information',
      type: 'text',
    },
  },
  args: {
    children: [],
  },
  parameters: {
    tokensPrefix: 'utrecht-value-number',
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
} satisfies Meta<typeof NumberValueStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // A Mersenne prime number
    children: '137438953471',
    value: 137438953471,
  },
};

export const NumberFormatting: Story = {
  args: {
    lang: 'nl-NL',
    value: 137438953471,
    children: new Intl.NumberFormat('nl-NL').format(137438953471),
  },
  name: 'Number formatting',
};

export const PositiveAppearance: Story = {
  args: {
    value: 123,
    children: '123',
    appearance: 'positive',
  },
  name: 'Positive',
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const NegativeAppearance: Story = {
  args: {
    value: -123,
    children: '-123',
    appearance: 'negative',
  },
  name: 'Negative',
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const DesignTokens = designTokenStory(meta);
