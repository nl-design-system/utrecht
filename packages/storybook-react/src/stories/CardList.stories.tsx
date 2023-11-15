// performance optimizations are not relevant for story rendering, ignore ESLint

import { Meta, StoryObj } from '@storybook/react';
import { CardList, CardListItem, Paragraph } from '@utrecht/component-library-react/src/css-module/index';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Card List',
  id: 'react-Card-list',
  component: CardList,
  argTypes: {},
  args: {
    children: [
      <CardListItem headingLevel={2} title="item 1" preHeading="list item 1">
        <Paragraph>item 1</Paragraph>
      </CardListItem>,
      <CardListItem headingLevel={3} title="item 2">
        item 2
      </CardListItem>,
      <CardListItem headingLevel={1}>
        <Paragraph>item 3</Paragraph>
      </CardListItem>,
    ],
  },
  parameters: {
    tokensPrefix: 'utrecht-card-list',
  },
} satisfies Meta<typeof CardList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
