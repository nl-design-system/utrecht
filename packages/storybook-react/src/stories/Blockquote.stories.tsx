import { Meta, StoryObj } from '@storybook/react';
import tokensDefinition from '@utrecht/blockquote-css/src/tokens.json';
import { Blockquote, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/blockquote/README.md?raw';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Blockquote',
  id: 'react-blockquote',
  component: Blockquote,
  tags: ['autodocs'],
  args: {
    children: (
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum
      </Paragraph>
    ),
  },
  argTypes: {
    attribution: {
      name: 'attribution',
      type: { name: 'string', required: false },
      table: {
        category: 'API',
        defaultValue: { summary: false },
      },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-blockquote',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Blockquote>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Attribution: Story = {
  name: 'Attribution',
  args: {
    children: <Paragraph>hello, world</Paragraph>,
    attribution: <cite>The C Programming Language</cite>,
  },
};

export const DesignTokens = designTokenStory(meta);
