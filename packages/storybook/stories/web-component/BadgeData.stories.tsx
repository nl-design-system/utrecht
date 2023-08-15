/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/badge-data/README.md?raw';
import tokensDefinition from '@utrecht/components/badge-data/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from '../components/util';

const BadgeData = ({ textContent }) => <utrecht-badge-data>{textContent}</utrecht-badge-data>;

const meta = {
  title: 'Web Component/Badge data',
  id: 'web-component-badge-data',
  component: BadgeData,
  argTypes: {
    textContent: {
      description: 'Text content',
      control: 'text',
    },
  },
  args: {
    textContent: '',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-badge-data',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof BadgeData>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    textContent: 'Festivals',
  },
};

export const DesignTokens = designTokenStory(meta);
