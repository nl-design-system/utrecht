/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/menulijst/README.md?raw';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { Menulijst } from './Menulijst';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Menulijst',
  id: 'css-menulijst',
  component: Menulijst,
  argTypes: {
    items: {
      description: 'Items of the menu',
      type: {
        name: 'array',
        required: true,
      },
    },
  },
  decorators: [
    (story) => <div style={{ 'max-inline-size': 'var(--utrecht-sidebar-max-inline-size, 20rem)' }}>{story()}</div>,
  ],
  args: {
    items: [],
  },
  parameters: {
    tokensPrefix: 'utrecht-menulijst',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition: {},
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Menulijst>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { href: 'https://example.com/1', children: 'Menu item label #1', active: true },
      { href: 'https://example.com/2', children: 'Menu item label #2' },
      { href: 'https://example.com/3', children: 'Menu item label #3' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via `utrecht-menulijst` class name.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
