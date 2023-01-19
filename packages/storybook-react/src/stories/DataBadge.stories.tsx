import { Meta, StoryObj } from '@storybook/react';
import { DataBadge, Paragraph } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/badge-data/README.md?raw';
import tokensDefinition from '@utrecht/components/badge-data/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Data badge',
  id: 'react-data-badge',
  component: DataBadge,
  tags: ['autodocs'],
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
    tokensPrefix: 'utrecht-badge-data',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  decorators: [(Story) => <Paragraph>{Story()}</Paragraph>],
} as Meta<typeof DataBadge>;

export default meta;

const Template: StoryObj<typeof DataBadge> = (args) => <DataBadge {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Utrecht',
};

export const Value = Template.bind({});

Value.args = {
  children: '50,000',
  value: '50000',
};

export const Time = Template.bind({});

Time.args = {
  children: '19 januari 2038 om 03:14:08',
  dateTime: '2038-01-19T03:14:08Z',
};

export const DesignTokens = designTokenStory(meta);
