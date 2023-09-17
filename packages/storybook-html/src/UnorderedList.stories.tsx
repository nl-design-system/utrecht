/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/unordered-list/README.md?raw';
import tokensDefinition from '@utrecht/components/unordered-list/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';

const UnorderedList = ({ children, ...attributes }) => <ul {...attributes}>{children}</ul>;

const UnorderedListItem = ({ children, ...attributes }) => <li {...attributes}>{children}</li>;

const UnorderedListStory = ({ items }) => (
  <UnorderedList>
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

export const DesignTokens = designTokenStory(meta);
