import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/button/README.md?raw';
import tokensDefinition from '@utrecht/components/button/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { designTokenStory } from '../util';

const meta = {
  title: 'CSS Component/Button',
  id: 'css-button',
  component: Button,
  args: {
    appearance: '',
    busy: false,
    disabled: false,
    hint: '',
    pressed: false,
    type: 'button',
    children: 'Read',
  },
  argTypes: {
    appearance: {
      description: 'Appearance',
      control: { type: 'select' },
      options: ['', 'button', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
    },
    busy: {
      description: 'Busy',
      control: 'boolean',
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    children: {
      description: 'Button text',
      control: 'text',
    },
    type: {
      control: { type: 'select' },
      options: ['', 'button', 'reset', 'submit'],
    },
    hint: {
      control: { type: 'select' },
      options: ['', 'danger', 'warning', 'ready'],
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-button',
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
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PrimaryAction: Story = {
  args: {
    appearance: 'primary-action-button',
    children: 'Primary action button',
    type: 'button',
  },
  parameters: {
    ...Default.parameters,
    docs: {
      description: {
        story: `Styling via the \`.utrecht-button\` and \`.utrecht-button--primary-action-button\` class names.`,
      },
    },
  },
};

export const SecondaryAction: Story = {
  args: {
    appearance: 'secondary-action-button',
    children: 'Secondary action button',
    type: 'button',
  },
  parameters: {
    ...Default.parameters,
    docs: {
      description: {
        story: `Styling via the \`.utrecht-button\` and \`.utrecht-button--secondary-action-button\` class names.`,
      },
    },
  },
};

export const Subtle: Story = {
  args: {
    appearance: 'subtle-button',
    children: 'Subtle button',
    type: 'button',
  },
  parameters: {
    ...Default.parameters,
    docs: {
      description: {
        story: `Styling via the \`.utrecht-button\` and \`.utrecht-button--subtle-button\` class names.`,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
