/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from '../components/util';

const FormFieldCheckbox = ({ checked, disabled, invalid, label, required }) => (
  <utrecht-form-field-checkbox
    checked={checked || null}
    disabled={disabled || null}
    invalid={invalid || null}
    required={required || null}
  >
    {label}
  </utrecht-form-field-checkbox>
);

const meta = {
  title: 'Web Component/Form field with checkbox',
  id: 'web-component-form-field-checkbox',
  component: FormFieldCheckbox,
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
    label: {
      description: 'Set the content of the label',
      control: 'text',
    },
    required: {
      description: 'Required',
      control: 'boolean',
    },
  },
  args: {
    checked: false,
    disabled: false,
    invalid: false,
    label: '',
    required: false,
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-form-field-checkbox',
    tokens,
    tokensDefinition: {},
    docs: {
      description: {
        component: '',
      },
    },
  },
} satisfies Meta<typeof FormFieldCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
    label: 'I agree',
  },
  name: 'Checked',
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'I agree',
  },
  name: 'Disabled',
};

export const Invalid: Story = {
  args: {
    invalid: true,
    label: 'I agree',
  },
  name: 'Invalid',
};

export const Required: Story = {
  args: {
    label: 'I agree',
    required: true,
  },
  name: 'Required',
};

export const DesignTokens = designTokenStory(meta);
