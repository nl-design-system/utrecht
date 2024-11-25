import { Meta, StoryObj } from '@storybook/react';
import { Paragraph, PreserveData } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/preserve-data-css/README.md?raw';
import tokensDefinition from '@utrecht/preserve-data-css/dist/tokens.mjs';
import React from 'react';
import { designTokenStory } from './util.js';

const meta = {
  title: 'React Component/Preserve data',
  id: 'react-preserve-data',
  component: PreserveData,
  args: {
    children: '',
  },
  argTypes: {
    dateTime: {
      name: 'dateTime',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: '' } },
    },
    value: {
      name: 'value',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: '' } },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-preserve-data',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  decorators: [(Story) => <Paragraph>{Story()}</Paragraph>],
} satisfies Meta<typeof PreserveData>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: ' (06) 249 0420 120',
  },
};

export const RightToLeft: Story = {
  args: {
    children: 'علي,',
  },
  name: 'Right-to-left',
};

export const NoTranslate: Story = {
  args: {
    children: 'Mees de Vos',
    lang: 'nl',
  },
  name: 'Prevent translation',
};

export const Value: Story = {
  args: {
    children: '50,000',
    value: '50000',
  },
};

export const Time: Story = {
  args: {
    children: '19 januari 2038 om 03:14:08',
    dateTime: '2038-01-19T03:14:08Z',
  },
};

export const DesignTokens = designTokenStory(meta);
