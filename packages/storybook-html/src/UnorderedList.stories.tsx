/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/unordered-list-css/README.md?raw';
import tokensDefinition from '@utrecht/unordered-list-css/src/tokens.json';
import React, { HTMLAttributes, PropsWithChildren } from 'react';
import hiddenDocs from './_hidden.md?raw';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';
import { hidden } from './util/htmlArgTypes';

interface UnorderedListItemStoryProps extends HTMLAttributes<HTMLLIElement> {}

interface UnorderedListProps extends HTMLAttributes<HTMLUListElement> {}

interface UnorderedListStoryProps extends UnorderedListProps {
  items: PropsWithChildren<UnorderedListItemStoryProps>[];
}

const UnorderedList = ({ children, ...attributes }: UnorderedListProps) => <ul {...attributes}>{children}</ul>;

const UnorderedListItem = ({ children, ...attributes }: UnorderedListItemStoryProps) => (
  <li {...attributes}>{children}</li>
);

const UnorderedListStory = ({ items, ...restProps }: UnorderedListStoryProps) => (
  <UnorderedList {...restProps}>
    {items.map(({ children }) => (
      <UnorderedListItem>{children}</UnorderedListItem>
    ))}
  </UnorderedList>
);

const meta = {
  title: 'HTML Component/Unordered list',
  id: 'html-unordered-list',
  component: UnorderedListStory,
  decorators: [htmlContentDecorator],
  argTypes: {
    hidden,
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
    hidden: false,
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-unordered-list',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UnorderedListStory>;

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
        story: 'Markup using the `<ul>` and `<li>` elements.',
      },
    },
  },
};

export const Nested: Story = {
  render: () => (
    <ul>
      <li>Lorem</li>
      <li>
        Ipsum
        <ul>
          <li>Lorem</li>
          <li>Ipsum</li>
        </ul>
      </li>
      <li>Dolor</li>
    </ul>
  ),
  name: 'Nested',
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
