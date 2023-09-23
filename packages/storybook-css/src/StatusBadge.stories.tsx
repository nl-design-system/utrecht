import { Meta, StoryObj } from '@storybook/react';
import { StatusBadge } from '@utrecht/component-library-react';
import readme from '@utrecht/components/badge-status/README.md?raw';
import tokensDefinition from '@utrecht/components/badge-status/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Badge/Status Badge',
  id: 'css-status-badge',
  component: StatusBadge,
  args: {
    status: 'neutral',
    children: '',
  },
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
  parameters: {
    tokensPrefix: 'utrecht-badge-status',
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
} satisfies Meta<typeof StatusBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: 'neutral',
    children: 'normaal',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via the `.utrecht-badge-status` class name.',
      },
    },
  },
};

export const Neutral: Story = {
  args: {
    status: 'neutral',
    children: 'neutral',
  },
  name: 'Neutral',
};

export const Success: Story = {
  args: {
    status: 'success',
    children: 'success',
  },
  name: 'Success',
};

export const Warning: Story = {
  args: {
    status: 'warning',
    children: 'warning',
  },
  name: 'Warning',
};

export const Error: Story = {
  args: {
    status: 'error',
    children: 'error',
  },
  name: 'Error',
};

export const Safe: Story = {
  args: {
    status: 'safe',
    children: 'safe',
  },
  name: 'Safe',
};

export const Danger: Story = {
  args: {
    status: 'danger',
    children: 'danger',
  },
  name: 'Danger',
};

export const Active: Story = {
  args: {
    status: 'active',
    children: 'active',
  },
  name: 'Active',
};

export const Inactive: Story = {
  args: {
    status: 'inactive',
    children: 'inactive',
  },
  name: 'Inactive',
};

export const Valid: Story = {
  args: {
    status: 'valid',
    children: 'valid',
  },
  name: 'Valid',
};

export const Invalid: Story = {
  args: {
    status: 'invalid',
    children: 'invalid',
  },
  name: 'Invalid',
};

export const DesignTokens = designTokenStory(meta);
