import { Meta, StoryObj } from '@storybook/react';
import { IBANData, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/iban-data-css/README.md?raw';
import tokensDefinition from '@utrecht/iban-data-css/src/tokens.json';
import React from 'react';
import { designTokenStory } from './util';

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
