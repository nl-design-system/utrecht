import { Meta, StoryObj } from '@storybook/react';
import { BadgeList, DataBadge } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/badge-list/README.md?raw';
import tokensDefinition from '@utrecht/components/badge-list/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Badge list',
  id: 'react-badge-list',
  component: BadgeList,
  tags: ['autodocs'],
  argTypes: {
    items: {
      name: 'value',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: '' } },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-badge-list',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof BadgeList>;

export default meta;

const Template: StoryObj<typeof BadgeList> = (args) => <BadgeList {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: [<DataBadge>Badge A</DataBadge>, <DataBadge>Badge B</DataBadge>, <DataBadge>Badge C</DataBadge>],
};

export const DesignTokens = designTokenStory(meta);
