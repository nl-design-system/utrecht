/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { Menulijst } from './Menulijst';
import { designTokenStory } from './design-token-story';
import readme from '../../../components/menulijst/README.md?raw';

const meta = {
  title: 'CSS Component/Menulijst',
  id: 'css-menulijst',
  component: Menulijst,
  argTypes: {
    items: {
      description: 'Items of the menu',
      type: {
        name: 'array',
        value: {
          name: 'object',
          value: {
            id: { name: 'number' },
            label: { name: 'string' },
          },
        },
        required: true,
      },
      control: { type: 'object' },
      table: {
        type: { summary: 'Array<{ id: number; label: string }>' },
        defaultValue: { summary: '[]' },
      },
    },
  },
  decorators: [
    (story) => <div style={{ maxInlineSize: 'var(--utrecht-sidebar-max-inline-size, 20rem)' }}>{story()}</div>,
  ],
  args: {
    items: [],
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fmenulijst',
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
