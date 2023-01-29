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

const Template: StoryObj<typeof meta> = ({ innerHTML, ...args }) => <NumberValue {...args}>{innerHTML}</NumberValue>;

export const Default = Template.bind({});

Default.storyName = 'Number value';

Default.parameters = {
  status: {
    type: 'WORK IN PROGRESS',
  },
};

export const Positive = Template.bind({});

Positive.args = {
  value: 123,
  textContent: '123',
  appearance: 'positive',
};

Positive.parameters = {
  status: {
    type: 'WORK IN PROGRESS',
  },
};

Positive.storyName = 'Positive';

export const Negative = Template.bind({});

Negative.args = {
  value: -123,
  textContent: '-123',
  appearance: 'negative',
};

Negative.parameters = {
  status: {
    type: 'WORK IN PROGRESS',
  },
};

Negative.storyName = 'Negative';

export const NumberFormatting = Template.bind({});

NumberFormatting.args = {
  value: 137438953471,
  textContent: new Intl.NumberFormat('nl-NL').format(137438953471),
};

NumberFormatting.decorators = [(Story) => <span lang="nl-NL">{Story()}</span>];

NumberFormatting.parameters = {
  status: {
    type: 'WORK IN PROGRESS',
  },
};

NumberFormatting.storyName = 'Number formatting';

export const DesignTokens = designTokenStory(meta);
