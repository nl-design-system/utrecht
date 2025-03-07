import { Meta, StoryObj } from '@storybook/react';
import { CurrencyData, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/currency-data-css/README.md?raw';
import tokensDefinition from '@utrecht/currency-data-css/dist/tokens.mjs';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import React from 'react';
import { designTokenStory } from './util.js';

const meta = {
  title: 'React Component/Currency data',
  id: 'react-currency-data',
  component: CurrencyData,
  args: {
    amount: '0',
    currency: 'EUR',
    locale: 'nl-NL',
  },
  argTypes: {
    amount: {
      name: 'amount',
      type: { name: 'string', required: true },
      table: { defaultValue: { summary: '' } },
    },
    currency: {
      name: 'amount',
      type: { name: 'string', required: true },
      table: { defaultValue: { summary: 'EUR' } },
    },
    locale: {
      name: 'locale',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: 'nl-NL' } },
    },
  },
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-currency-data',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  decorators: [(Story) => <Paragraph>{Story()}</Paragraph>],
} satisfies Meta<typeof CurrencyData>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Positive: Story = {
  args: {
    amount: '42.42',
  },
};

export const Negative: Story = {
  args: {
    amount: '-42.42',
  },
};

export const Million: Story = {
  args: {
    amount: '1212121',
  },
};

export const DesignTokens = designTokenStory(meta);
