/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtFormFieldCheckbox } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

interface FormFieldCheckboxStoryProps {
  checked?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  label?: string;
  required?: boolean;
}

const FormFieldCheckboxStory = ({ checked, disabled, invalid, label, required }: FormFieldCheckboxStoryProps) => (
  <UtrechtFormFieldCheckbox
    checked={checked || null}
    disabled={disabled || null}
    invalid={invalid || null}
    required={required || null}
  >
    {label}
  </UtrechtFormFieldCheckbox>
);

const meta = {
  title: 'Web Component/Form field with checkbox',
  id: 'web-component-form-field-checkbox',
  component: FormFieldCheckboxStory,
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
} satisfies Meta<typeof FormFieldCheckboxStory>;

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
