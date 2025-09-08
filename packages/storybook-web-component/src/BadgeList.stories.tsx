/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import readme from '@utrecht/badge-list-css/README.md?raw';
import tokensDefinition from '@utrecht/badge-list-css/src/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtBadgeList, UtrechtDataBadge } from '@utrecht/web-component-library-react';
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
        .map((item, index) => <UtrechtDataBadge key={index}>{item}</UtrechtDataBadge>),
  },
};

export const DesignTokens = designTokenStory(meta);
