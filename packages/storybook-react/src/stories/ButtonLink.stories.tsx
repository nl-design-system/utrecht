import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/button-link-css/README.md?raw';
import tokensDefinition from '@utrecht/button-link-css/dist/tokens.mjs';
import { ButtonLink } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import { designTokenStory } from './util.js';

const meta = {
  title: 'React Component/Link that looks like a button',
  id: 'react-button-link',
  component: ButtonLink,
  parameters: {
    tokensPrefix: 'utrecht-button-link',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  args: {
    children: 'Read more...',
    href: '#',
  },
  argTypes: {
    appearance: {
      description: 'Appearance',
      control: { type: 'select' },
      options: ['', 'button', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
    external: {
      type: 'boolean',
      table: {
        category: 'API',
        defaultValue: { summary: false },
      },
    },
    placeholder: {
      name: 'placeholder',
      type: 'boolean',
      table: {
        category: 'API',
        defaultValue: { summary: false },
      },
    },
    href: {
      type: 'string',
      table: {
        category: 'API',
        defaultValue: { summary: '', required: true },
      },
    },
  },
} satisfies Meta<typeof ButtonLink>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const External: Story = {
  args: {
    children: 'Read more...',
    href: 'https://example.com/',
    external: true,
  },
};

export const PlaceholderForLink: Story = {
  args: {
    ...Default.args,
    placeholder: true,
  },
};

export const PrimaryButtonLink: Story = {
  name: 'Primary',
  args: {
    ...Default.args,
    appearance: 'primary-action-button',
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    appearance: 'secondary-action-button',
  },
};

export const Subtle: Story = {
  args: {
    ...Default.args,
    appearance: 'subtle-button',
  },
};

export const Hover: Story = {
  args: {
    ...Default.args,
    appearance: 'subtle-button',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Focus: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    pseudo: { focus: true },
  },
};

export const Active: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    pseudo: { active: true },
  },
};

export const FocusVisible: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    pseudo: { focusVisible: true, focus: true },
  },
};

export const DesignTokens = designTokenStory(meta);
