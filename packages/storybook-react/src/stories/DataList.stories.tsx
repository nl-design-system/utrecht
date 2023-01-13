import { Meta, StoryObj } from '@storybook/react';
import {
  DataList,
  DataListItem,
  DataListKey,
  DataListValue,
} from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/data-list/README.md';
import tokensDefinition from '@utrecht/components/data-list/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Data List',
  id: 'react-data-list',
  component: DataList,
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-data-list',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof DataList>;

export default meta;

const Template: StoryObj<typeof DataList> = (args) => (
  <DataList {...args}>
    <DataListItem>
      <DataListKey>Gereserveerde zitplaats</DataListKey>
      <DataListValue>42</DataListValue>
    </DataListItem>
  </DataList>
);

export const Default = Template.bind({});

Default.args = {
  appearance: 'rows',
};

export const DesignTokens = designTokenStory(meta);
