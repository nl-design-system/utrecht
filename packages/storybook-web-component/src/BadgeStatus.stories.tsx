/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/status-badge-css/README.md?raw';
import tokensDefinition from '@utrecht/status-badge-css/src/tokens.json';
import { UtrechtStatusBadge } from '@utrecht/web-component-library-react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/Badge status',
  id: 'web-component-status-badge',
  component: UtrechtStatusBadge,
  argTypes: {
    children: {
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
    children: '',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-status-badge',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtStatusBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: '',
    children: 'Normaal',
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
    children: '',
  },
};

export const Neutral: Story = {
  args: {
    status: 'neutral',
    children: 'Neutral',
  },
};

export const Success: Story = {
  args: {
    status: 'success',
    children: 'Success',
  },
};

export const Warning: Story = {
  args: {
    status: 'warning',
    children: 'Warning',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    children: 'Error',
  },
};

export const Safe: Story = {
  args: {
    status: 'safe',
    children: 'Safe',
  },
};

export const Danger: Story = {
  args: {
    status: 'danger',
    children: 'Danger',
  },
};

export const Active: Story = {
  args: {
    status: 'active',
    children: 'Active',
  },
};

export const Inactive: Story = {
  args: {
    status: 'inactive',
    children: 'Inactive',
  },
};

export const Valid: Story = {
  args: {
    status: 'valid',
    children: 'Valid',
  },
};

export const Invalid: Story = {
  args: {
    status: 'invalid',
    children: 'Invalid',
  },
};

export const DesignTokens = designTokenStory(meta);
