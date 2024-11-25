import { Meta, StoryObj } from '@storybook/react';
import { DataList, DataListItem, DataListKey, DataListValue } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/data-list-css/README.md?raw';
import tokensDefinition from '@utrecht/data-list-css/dist/tokens.mjs';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import React from 'react';
import { designTokenStory } from './util.js';

const meta = {
  title: 'React Component/Data List',
  id: 'react-data-list',
  component: DataList,
  args: {
    appearance: 'rows',
    children: (
      <DataListItem>
        <DataListKey>Gereserveerde zitplaats</DataListKey>
        <DataListValue>42</DataListValue>
      </DataListItem>
    ),
  },
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
} satisfies Meta<typeof DataList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
