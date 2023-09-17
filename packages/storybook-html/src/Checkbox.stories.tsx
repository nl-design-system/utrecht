/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/checkbox/README.md?raw';
import tokensDefinition from '@utrecht/components/checkbox/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';

const Checkbox = ({ checked, disabled, indeterminate, invalid, name, required, value, ...attributes }) => (
  <input
    name={name}
    type="checkbox"
    defaultChecked={checked || indeterminate}
    aria-invalid={invalid || undefined}
    disabled={disabled}
    aria-checked={indeterminate ? 'mixed' : undefined}
    required={required}
    value={value}
    {...attributes}
  />
);

const meta = {
  title: 'HTML Component/Checkbox',
  id: 'html-checkbox',
  component: Checkbox,
  decorators: [htmlContentDecorator],
  argTypes: {
    checked: {
      description: 'Checked',
      control: 'boolean',
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    invalid: {
      description: 'Invalid',
      control: 'boolean',
    },
    indeterminate: {
      description: 'Indeterminate',
      control: 'boolean',
    },
    name: {
      description: 'Name',
      control: 'text',
    },
    required: {
      description: 'Required',
      control: 'boolean',
    },
    value: {
      description: 'Set the value of the text box',
      control: 'text',
    },
  },
  args: {
    checked: false,
    disabled: false,
    invalid: false,
    required: false,
    name: 'i-agree',
    value: 'yes',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-checkbox',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `<input type="checkbox">` element.',
      },
    },
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
  name: 'Checked',
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  name: 'Disabled',
};

export const CheckedAndDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
  name: 'Checked and disabled',
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
  name: 'Indeterminate',
};

export const DesignTokens = designTokenStory(meta);
