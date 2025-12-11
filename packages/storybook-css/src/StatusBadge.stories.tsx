import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatusBadge } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/status-badge-css/README.md?raw';
import tokensDefinition from '@utrecht/status-badge-css/src/tokens.json';
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
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fstatus-badge',
    communityFigma:
      'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=1354-6672&t=CiZrkiC5t6Bn59Hg-0',
    figma:
      'https://www.figma.com/design/UXIHcIurAD8hyoBWx4hDBV/NLDS---Gemeente-Utrecht---Bibliotheek?node-id=1354-6672&t=kJatlKfN59e8T0eA-0',
    nldesignsystem: 'https://nldesignsystem.nl/status-badge',
    tokensPrefix: 'utrecht-status-badge',
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
        story: 'Styling via the `.utrecht-status-badge` class name.',
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
