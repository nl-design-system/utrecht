/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/digid-button/README.md?raw';
import tokensDefinition from '@utrecht/components/digid-button/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from '../components/util';

const DigidButton = ({ children }) => (
  <utrecht-digid-button>
    <utrecht-button appearance="primary-action-button">{children}</utrecht-button>
  </utrecht-digid-button>
);

const meta = {
  title: 'Web Component/DigiD button',
  id: 'web-component-digid-button',
  component: DigidButton,
  argTypes: {
    children: {
      description: 'Content of the digid-button',
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
    tokensPrefix: 'utrecht-digid-button',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof DigidButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: ['Inloggen', ' ', <utrecht-icon-arrow></utrecht-icon-arrow>],
  },
};

export const DesignTokens = designTokenStory(meta);
