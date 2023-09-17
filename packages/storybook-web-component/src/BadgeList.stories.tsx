/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/badge-list/README.md?raw';
import tokensDefinition from '@utrecht/components/badge-list/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtBadgeData, UtrechtBadgeList } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/Badge list',
  id: 'web-component-badge-list',
  component: UtrechtBadgeList,
  argTypes: {
    children: {
      description: 'Items',
    },
  },
  args: {
    children: [],
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-badge-list',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtBadgeList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        .split(/[\s.,()&;]+/g)
        .filter(Boolean)
        .map((item, index) => <UtrechtBadgeData key={index}>{item}</UtrechtBadgeData>),
  },
};

export const DesignTokens = designTokenStory(meta);
