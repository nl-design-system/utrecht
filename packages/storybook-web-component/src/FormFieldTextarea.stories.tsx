/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtFormFieldTextarea } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

interface FormFieldTextareaProps {
  disabled?: boolean;
  invalid?: boolean;
  label?: string;
  placeholder?: string;
  readOnly?: string;
  required?: boolean;
  value?: boolean;
}

const FormFieldTextareaStory = ({
  disabled,
  invalid,
  label,
  placeholder,
  readOnly,
  required,
  value,
}: FormFieldTextareaProps) => (
  <UtrechtFormFieldTextarea
    disabled={disabled || null}
    invalid={invalid || null}
    placeholder={placeholder || null}
    readOnly={readOnly || null}
    required={required || null}
    value={value}
  >
    {label}
  </UtrechtFormFieldTextarea>
);
const meta = {
  title: 'Web Component/Form field with textarea',
  id: 'web-component-form-field-textarea',
  component: FormFieldTextareaStory,
  argTypes: {
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
    placeholder: {
      description: 'Placeholder',
      control: 'text',
    },
    readOnly: {
      description: 'Read-only',
      control: 'boolean',
    },
    required: {
      description: 'Required',
      control: 'boolean',
    },
    value: {
      description: 'Value',
      control: 'text',
    },
  },
  args: {
    disabled: false,
    invalid: false,
    label: '',
    placeholder: '',
    readOnly: false,
    required: false,
    value: '',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-form-field-textarea',
    tokens,
    tokensDefinition: {},
    docs: {
      description: {
        component: '',
      },
    },
  },
} satisfies Meta<typeof FormFieldTextareaStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Message',
    value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Message',
    value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  name: 'Disabled',
};

export const Invalid: Story = {
  args: {
    invalid: true,
    label: 'Message',
    value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  name: 'Invalid',
};

export const Required: Story = {
  args: {
    label: 'Message',
    required: true,
    value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  name: 'Required',
};

export const DesignTokens = designTokenStory(meta);
