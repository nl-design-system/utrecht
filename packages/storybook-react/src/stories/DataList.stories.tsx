import { Meta, StoryObj } from '@storybook/react';
import {
  DataList,
  DataListItem,
  DataListKey,
  DataListValue,
} from '@utrecht/component-library-react/src/css-module/index';
import readme from '@utrecht/components/data-list/README.md?raw';
import tokensDefinition from '@utrecht/components/data-list/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

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
