/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/ordered-list/README.md?raw';
import tokensDefinition from '@utrecht/components/ordered-list/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';

const OrderedList = ({ children, ...attributes }) => <ol {...attributes}>{children}</ol>;

const OrderedListItem = ({ children, ...attributes }) => <li {...attributes}>{children}</li>;

const OrderedListStory = ({ items }) => (
  <OrderedList>
    {items.map(({ children }) => (
      <OrderedListItem>{children}</OrderedListItem>
    ))}
  </OrderedList>
);

const meta = {
  title: 'HTML Component/Ordered list',
  id: 'html-ordered-list',
  component: OrderedListStory,
  decorators: [htmlContentDecorator],
  argTypes: {
    items: {
      description: 'List items',
      control: 'array',
    },
    dir: {
      description: 'Text direction',
      control: 'text',
    },
    lang: {
      description: 'Lang',
      control: 'text',
    },
  },
  args: {
    items: [],
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
} satisfies Meta<typeof OrderedListStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        children: 'Lorem',
      },
      {
        children: 'Ipsum',
      },
      {
        children: 'Dolor',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `<ol>` and `<li>` elements.',
      },
    },
  },
};

export const Arabic: Story = {
  args: {
    items: [
      {
        children: 'واحد',
      },
      {
        children: 'إثنان',
      },
      {
        children: 'ثلاثة',
      },
    ],
    dir: 'rtl',
    lang: 'ar',
  },
  name: 'Right to left',
  parameters: {
    docs: {
      description: {
        story: `Right-to-left text should have list item markers before the text, on the right.

With CSS you can use Arabic script digits for list item numbers, instead of the default latin numbers.`,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
