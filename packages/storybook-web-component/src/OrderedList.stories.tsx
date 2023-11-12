/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/ordered-list/README.md?raw';
import tokensDefinition from '@utrecht/components/ordered-list/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechOrderedList, UtrechOrderedListItem } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/Ordered list',
  id: 'web-component-ordered-list',
  component: UtrechOrderedList,
  argTypes: {
    children: {
      description: 'Items',
    },
  },
  args: {
    children: [],
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-ordered-list',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechOrderedList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'].map((item, index) => (
      <UtrechOrderedListItem key={index}>{item}</UtrechOrderedListItem>
    )),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Avoid this web component, and use the CSS component instead. In Safari 17 `display: contents` is buggy, and because of it `<utrecht-ordered-list>` and `<utrecht-ordered-list-item>` do not result in an accessibe list.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
