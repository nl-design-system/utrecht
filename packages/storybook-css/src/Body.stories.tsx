/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from '@utrecht/body-css/README.md?raw';
import tokensDefinition from '@utrecht/body-css/src/tokens.json';
import { Body } from '@utrecht/body-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import Paragraph from './Paragraph';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Body',
  id: 'css-body',
  component: Body,
  argTypes: {
    children: {
      description: 'Body content',
      control: 'object',
      table: { type: { summary: 'ReactNode' } },
    },
  },
  args: {
    children: [],
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fbody',
    layout: 'fullscreen',
    tokensPrefix: 'utrecht-body',
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
} satisfies Meta<typeof Body>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [<Paragraph>Body content</Paragraph>],
  },
};

export const DesignTokens = designTokenStory(meta);
