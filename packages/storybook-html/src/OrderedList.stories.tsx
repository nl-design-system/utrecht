/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/ordered-list-css/README.md?raw';
import tokensDefinition from '@utrecht/ordered-list-css/src/tokens.json';
import React, { LiHTMLAttributes, OlHTMLAttributes, PropsWithChildren } from 'react';
import hiddenDocs from './_hidden.md?raw';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';
import { hidden } from './util/htmlArgTypes';

const OrderedList = ({ ...restProps }: PropsWithChildren<OlHTMLAttributes<HTMLOListElement>>) => <ol {...restProps} />;

type OrderedListItemProps = PropsWithChildren<LiHTMLAttributes<HTMLLIElement>>;

const OrderedListItem = ({ ...restProps }: OrderedListItemProps) => <li {...restProps} />;

const OrderedListStory = ({ items, ...restProps }: { items: OrderedListItemProps[] }) => (
  <OrderedList {...restProps}>
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
    hidden,
    lang: {
      description: 'Lang',
      control: 'text',
    },
  },
  args: {
    hidden: false,
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

export const Hidden: Story = {
  args: {
    ...Default.args,
    hidden: true,
  },
  parameters: {
    docs: {
      description: {
        story: hiddenDocs,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
