// performance optimizations are not relevant for story rendering, ignore ESLint

import { Meta, StoryObj } from '@storybook/react';
import { CardList, CardListItem } from '@utrecht/component-library-react/src/css-module/index';
import readme from '@utrecht/components/unordered-list/README.md?raw';
import tokensDefinition from '@utrecht/components/unordered-list/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Unordered List',
  id: 'react-unordered-list',
  component: CardList,
  argTypes: {},
  args: {
    children: [
      <CardListItem headingLevel={2}>List item 1</CardListItem>,
      <CardListItem headingLevel={2}>List item 2</CardListItem>,
      <CardListItem headingLevel={2}>List item 3</CardListItem>,
    ],
  },
  parameters: {
    tokensPrefix: 'utrecht-card-list',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof CardList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
