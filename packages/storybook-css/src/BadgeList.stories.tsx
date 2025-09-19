import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from '@utrecht/badge-list-css/README.md?raw';
import tokensDefinition from '@utrecht/badge-list-css/src/tokens.json';
import { BadgeList, DataBadge } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

interface BadgeListStoryProps {
  items: string | string[];
}

const BadgeListStory = ({ items }: BadgeListStoryProps) => (
  <BadgeList>
    {(typeof items === 'string' ? items.split(/[\s.,()&;]+/g).filter(Boolean) : Array.isArray(items) ? items : []).map(
      (item, index) => (
        <DataBadge key={index}>{item}</DataBadge>
      ),
    )}
  </BadgeList>
);

const meta = {
  title: 'CSS Component/Badge list',
  id: 'css-badge-list',
  component: BadgeListStory,
  args: {
    items: '',
  },
  argTypes: {
    items: {
      description: 'Items',
      control: 'text',
    },
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fbadge-list',
    tokensPrefix: 'utrecht-badge-list',
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
} satisfies Meta<typeof BadgeListStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via the `.utrecht-badge-list` class name.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
