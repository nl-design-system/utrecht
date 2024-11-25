// performance optimizations are not relevant for story rendering, ignore ESLint

import { Meta, StoryObj } from '@storybook/react';
import { UnorderedList, UnorderedListItem } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/unordered-list-css/README.md?raw';
import tokensDefinition from '@utrecht/unordered-list-css/dist/tokens.mjs';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Unordered List',
  id: 'react-unordered-list',
  component: UnorderedList,
  argTypes: {},
  args: {
    children: [
      <UnorderedListItem>List item 1</UnorderedListItem>,
      <UnorderedListItem>List item 2</UnorderedListItem>,
      <UnorderedListItem>List item 3</UnorderedListItem>,
    ],
  },
  parameters: {
    tokensPrefix: 'utrecht-unordered-list',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UnorderedList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
