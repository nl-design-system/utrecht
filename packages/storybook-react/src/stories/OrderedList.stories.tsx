// performance optimizations are not relevant for story rendering, ignore ESLint

import { Meta, StoryObj } from '@storybook/react-vite';
import { OrderedList, OrderedListItem } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/ordered-list-css/README.md?raw';
import tokensDefinition from '@utrecht/ordered-list-css/dist/tokens.mjs';
import React from 'react';
import { designTokenStory } from './util.js';

const meta = {
  title: 'React Component/Ordered List',
  id: 'react-ordered-list',
  component: OrderedList,
  argTypes: {
    reversed: {
      type: { name: 'boolean', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: false },
      },
    },
    start: {
      type: { name: 'number', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: 1 },
      },
    },
  },
  args: {
    children: [
      <OrderedListItem>List item 1</OrderedListItem>,
      <OrderedListItem>List item 2</OrderedListItem>,
      <OrderedListItem>List item 3</OrderedListItem>,
    ],
  },
  parameters: {
    tokensPrefix: 'utrecht-ordered-list',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof OrderedList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
