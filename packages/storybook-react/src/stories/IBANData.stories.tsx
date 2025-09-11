import { Meta, StoryObj } from '@storybook/react-vite';
import { IBANData, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/iban-data-css/README.md?raw';
import tokensDefinition from '@utrecht/iban-data-css/dist/tokens.mjs';
import React from 'react';
import { designTokenStory } from './util.js';

const meta = {
  title: 'React Component/IBAN data',
  id: 'react-iban-data',
  component: IBANData,
  args: {
    value: '',
  },
  argTypes: {
    value: {
      name: 'value',
      type: { name: 'string', required: true },
      table: { defaultValue: { summary: '' } },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-iban-data',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  decorators: [(Story) => <Paragraph>{Story()}</Paragraph>],
} satisfies Meta<typeof IBANData>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'GO00BACK123467899012',
  },
};

export const DesignTokens = designTokenStory(meta);
