import { Meta, StoryObj } from '@storybook/react-vite';
import readme from '@utrecht/body-css/README.md?raw';
import tokensDefinition from '@utrecht/body-css/dist/tokens.mjs';
import { Body } from '@utrecht/body-react/dist/css';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import React from 'react';
import { designTokenStory } from './util.js';

const meta = {
  title: 'React Component/Body',
  id: 'react-body',
  component: Body,
  args: {
    children: <Body>Body component</Body>,
  },
  parameters: {
    tokensPrefix: 'utrecht-body',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Body>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
