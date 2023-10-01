/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { OrderedList, OrderedListItem } from '@utrecht/component-library-react';
import type { OrderedListProps } from '@utrecht/component-library-react';
import readme from '@utrecht/components/ordered-list/README.md?raw';
import tokensDefinition from '@utrecht/components/ordered-list/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { designTokenStory } from './design-token-story';

interface OrderedListItemData {
  children?: ReactNode;
  items?: OrderedListItemData[];
}

interface OrderedListStoryProps extends OrderedListProps {
  element?: string | 'div';
  center?: boolean;
  items?: OrderedListItemData[];
  htmlContent?: boolean;
}

const HTMLList = ({ items }: { items: OrderedListItemData[] }) => (
  <ol>
    {items?.map(({ children: subChildren, items: subItems }, index) => (
      <li key={index}>
        {subChildren}
        {subItems && HTMLList({ items: subItems })}
      </li>
    ))}
  </ol>
);

const OrderedListStory = ({ children, center, items, htmlContent }: OrderedListStoryProps) => {
  return (
    <OrderedList
      className={clsx({
        'utrecht-ordered-list--center': center,
        'utrecht-ordered-list--html-content': htmlContent,
      })}
    >
      {children}
      {htmlContent
        ? items?.map(({ children: subChildren, items: subItems }, index) => (
            <li key={index}>
              {subChildren}
              {subItems && HTMLList({ items: subItems })}
            </li>
          ))
        : items?.map(({ children: subChildren, items: subItems }, index) => (
            <OrderedListItem key={index}>
              {subChildren}
              {subItems && OrderedListStory({ items: subItems })}
            </OrderedListItem>
          ))}
    </OrderedList>
  );
};

const meta = {
  title: 'CSS Component/Ordered list',
  id: 'css-ordered-list',
  component: OrderedListStory,
  argTypes: {
    children: {
      description: 'Content of the list.',
      control: 'text',
    },
    htmlContent: {
      description: 'Content of the list is HTML without BEM class names on each element.',
      control: 'boolean',
    },
  },
  args: {
    children: [],
  },
  parameters: {
    tokensPrefix: 'utrecht-ordered-list',
    status: {
      type: 'WORK IN PROGRESS',
    },
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
};

const ContainerWithCenteredText = (Story) => <div style={{ textAlign: 'center' }}>{Story()}</div>;

export const Center: Story = {
  args: {
    center: true,
    items: [
      {
        children: 'The Quick Brown Fox',
      },
      {
        children: 'Jumps',
      },
      {
        children: 'Over The Lazy Dog',
      },
    ],
  },
  name: 'Center',
  decorators: [ContainerWithCenteredText],
  parameters: {
    docs: {
      description: {
        story:
          '_Ordered list_ moet niet als gecentreerde tekst gebruikt worden worden. Wanneer het niet te vermijden is, dan moeten marker dicht naast de tekst staan, niet in de marge.',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

const NarrowContainerWithCenteredText = (Story) => (
  <div
    style={{
      textAlign: 'center',
      inlineSize: '50%',
      'border-inline-start': '1px solid currentColor',
      'border-inline-end': '1px solid currentColor',
    }}
  >
    {Story()}
  </div>
);

export const NarrowContainerCenter: Story = {
  args: {
    center: true,
    items: [
      {
        children: 'The Quick Brown Fox',
      },
      {
        children: 'Jumps',
      },
      {
        children: 'Over The Lazy Dog',
      },
    ],
  },
  name: 'Center (container width is 50%)',
  decorators: [NarrowContainerWithCenteredText],
  parameters: {
    docs: {
      description: {
        story: 'De _list item marker_ moet niet te ver van de tekst staan.',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const NarrowContainerCenterLongText: Story = {
  args: {
    center: true,
    items: [
      {
        children: 'The Quick Brown Fox',
      },
      {
        children: 'Jumps',
      },
      {
        children: 'Over The Lazy Dog',
      },
      {
        children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.`,
      },
    ],
  },
  name: 'Center (multiple lines of text, container width is 50%)',
  decorators: [NarrowContainerWithCenteredText],
  parameters: {
    docs: {
      description: {
        story: 'Lange tekst moet binnen de container passen.',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const HTMLContent: Story = {
  args: {
    htmlContent: true,
    items: [
      {
        children: 'Lorem',
      },
      {
        children: 'Ipsum',
        items: [
          {
            children: 'Lorem',
          },
          {
            children: 'Ipsum',
          },
        ],
      },
      {
        children: 'Dolor',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use the `utrecht-ordered-list--html-content` modifier when you only have control over the template for the outer `<ol>` and cannot add BEM class names to the `<li>` elements.',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export const DesignTokens = designTokenStory(meta);
