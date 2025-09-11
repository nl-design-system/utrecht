import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/root-css/README.md?raw';
import tokensDefinition from '@utrecht/root-css/dist/tokens.mjs';
import { Root } from '@utrecht/root-react/dist/css';
import React from 'react';
import { designTokenStory } from './util.js';

const meta = {
  title: 'React Component/Root',
  id: 'react-root',
  component: Root,
  args: {
    children: <Root>Root component</Root>,
  },
  parameters: {
    tokensPrefix: 'utrecht-root',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
