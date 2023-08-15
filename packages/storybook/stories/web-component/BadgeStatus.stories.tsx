/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/badge-status/README.md?raw';
import tokensDefinition from '@utrecht/components/badge-status/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from '../components/util';

const BadgeStatus = ({ textContent, status }) => (
  <utrecht-badge-status status={status}>{textContent}</utrecht-badge-status>
);

const meta = {
  title: 'Web Component/Badge status',
  id: 'web-component-badge-status',
  component: BadgeStatus,
  argTypes: {
    textContent: {
      description: 'Text content',
      control: 'text',
    },
    status: {
      control: { type: 'select' },
      description: 'Status',
      options: ['error', 'success', 'valid', 'invalid', 'active', 'inactive', 'neutral', 'danger', 'warning', 'safe'],
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
    tokensPrefix: 'utrecht-badge-status',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof BadgeStatus>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: '',
    textContent: 'Normaal',
  },
  parameters: {
    docs: {
      description: {
        story: 'When status is not set, status="neutral" will be used as default',
      },
    },
  },
};

export const Empty: Story = {
  args: {
    status: 'neutral',
    textContent: '',
  },
};

export const Neutral: Story = {
  args: {
    status: 'neutral',
    textContent: 'Neutral',
  },
};

export const Success: Story = {
  args: {
    status: 'success',
    textContent: 'Success',
  },
};

export const Warning: Story = {
  args: {
    status: 'warning',
    textContent: 'Warning',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    textContent: 'Error',
  },
};

export const Safe: Story = {
  args: {
    status: 'safe',
    textContent: 'Safe',
  },
};

export const Danger: Story = {
  args: {
    status: 'danger',
    textContent: 'Danger',
  },
};

export const Active: Story = {
  args: {
    status: 'active',
    textContent: 'Active',
  },
};

export const Inactive: Story = {
  args: {
    status: 'inactive',
    textContent: 'Inactive',
  },
};

export const Valid: Story = {
  args: {
    status: 'valid',
    textContent: 'Valid',
  },
};

export const Invalid: Story = {
  args: {
    status: 'invalid',
    textContent: 'Invalid',
  },
};

export const DesignTokens = designTokenStory(meta);
