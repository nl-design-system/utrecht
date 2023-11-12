/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/unordered-list/README.md?raw';
import tokensDefinition from '@utrecht/components/unordered-list/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtUnorderedList, UtrechtUnorderedListItem } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/Unordered list',
  id: 'web-component-unordered-list',
  component: UtrechtUnorderedList,
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
    tokensPrefix: 'utrecht-unordered-list',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtUnorderedList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'].map((item, index) => (
      <UtrechtUnorderedListItem key={index}>{item}</UtrechtUnorderedListItem>
    )),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Avoid this web component, and use the CSS component instead. In Safari 17 `display: contents` is buggy, and because of it `<utrecht-unordered-list>` and `<utrecht-unordered-list-item>` do not result in an accessibe list.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
