/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/link-list/README.md?raw';
import tokensDefinition from '@utrecht/components/link-list/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { LinkList } from './LinkList';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Link list',
  id: 'css-link-list',
  component: LinkList,
  argTypes: {
    links: {
      description: 'Links',
      type: {
        name: 'array',
        required: true,
      },
    },
  },
  args: {
    links: [],
  },
  parameters: {
    tokensPrefix: 'utrecht-link-list',
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
} satisfies Meta<typeof LinkList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      { href: '#', children: 'Link 1 with so much content wow look how long!' },
      { href: '#', children: 'Link 2' },
      { href: '#', children: 'Link 3' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'The CSS code is currently very specific to Utrecht, and has no white label design tokens yet.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
