import { Meta, StoryObj } from '@storybook/react-vite';
import { Heading1, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/note-css/README.md?raw';
import tokensDefinition from '@utrecht/note-css/dist/tokens.mjs';
import { Note } from '@utrecht/note-react/css';
import React from 'react';
import { designTokenStory } from './util.js';

const meta = {
  title: 'React Component/Note',
  id: 'react-note',
  component: Note,
  argTypes: {
    aside: {
      name: 'Aside',
      control: { type: 'boolean' },
    },
    purpose: {
      name: 'Type',
      control: { type: 'select' },
      options: ['', 'info', 'warning', 'error', 'success'],
    },
  },
  args: {
    children: [
      <Heading1>Lorem ipsum</Heading1>,
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>,
    ],
  },
  parameters: {
    tokensPrefix: 'utrecht-note',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Note>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Info: Story = {
  args: {
    purpose: 'info',
  },
};

export const Warning: Story = {
  args: {
    purpose: 'warning',
  },
};

export const Error: Story = {
  args: {
    purpose: 'error',
  },
};

export const Success: Story = {
  args: {
    purpose: 'success',
  },
};

export const DesignTokens = designTokenStory(meta);
