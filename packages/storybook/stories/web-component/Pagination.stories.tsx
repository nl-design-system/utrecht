/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/pagination/README.md?raw';
import tokensDefinition from '@utrecht/components/pagination/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from '../components/util';

const Pagination = ({ currentIndex, links, next, prev }) => (
  <utrecht-pagination
    links={JSON.stringify(links)}
    next={JSON.stringify(next)}
    prev={JSON.stringify(prev)}
    current-index={currentIndex}
  ></utrecht-pagination>
);

const meta = {
  title: 'Web Component/Pagination',
  id: 'web-component-pagination',
  component: Pagination,
  argTypes: {
    currentIndex: {
      description: 'Current index',
      type: 'number',
    },
    links: {
      description: 'Items',
      type: 'array',
    },
    prev: {
      description: 'Previous link',
      type: 'object',
    },
    next: {
      description: 'Next link',
      type: 'object',
    },
  },
  args: {
    currentIndex: -1,
    links: [],
    next: null,
    prev: null,
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-pagination',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentIndex: 3,
    distanced: true,
    links: [
      {
        href: './1',
        index: 1,
        title: 'Resultaat 1 tot 10',
      },
      {
        href: './2',
        index: 2,
        title: 'Resultaat 11 tot 20',
      },
      {
        href: './3',
        index: 3,
        title: 'Resultaat 21 tot 30',
      },
      {
        href: './4',
        index: 4,
        title: 'Resultaat 31 tot 40',
      },
      {
        href: './5',
        index: 5,
        title: 'Resultaat 41 tot 50',
      },
    ],
    next: {
      href: './2',
    },
    prev: {
      disabled: true,
    },
  },
};

export const DesignTokens = designTokenStory(meta);
