/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/alert/README.md?raw';
import tokensDefinition from '@utrecht/components/alert/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { Alert } from './Alert';
import { Heading2 } from './Heading2';
import { Paragraph } from './Paragraph';
import { designTokenStory } from './util';
import '@utrecht/components/alert/css/index.scss';

const meta = {
  title: 'CSS Component/Alert',
  id: 'css-alert',
  component: Alert,
  argTypes: {
    children: {
      description: 'HTML content of the alert',
    },
    type: {
      description: 'Type',
      control: { type: 'select' },
      options: ['', 'error', 'info', 'ok', 'warning'],
    },
  },
  args: {
    children: [
      <Heading2>Lorem ipsum</Heading2>,
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>,
    ],
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokensPrefix: 'utrecht-alert',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Alert>;

export default meta;

export const Default: StoryObj<typeof Alert> = {};

export const Info: StoryObj<typeof Alert> = {
  args: {
    type: 'info',
  },
};

export const OK: StoryObj<typeof Alert> = {
  args: {
    type: 'ok',
  },
};

export const Warning: StoryObj<typeof Alert> = {
  args: {
    type: 'warning',
  },
};

export const Error: StoryObj<typeof Alert> = {
  args: {
    type: 'error',
  },
};

export const DesignTokens: StoryObj<typeof Alert> = designTokenStory(meta);
