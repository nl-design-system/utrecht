/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from '../components/util';

const FormFieldTextbox = ({
  autoComplete,
  disabled,
  invalid,
  label,
  pattern,
  placeholder,
  readOnly,
  required,
  type,
  value,
  min,
  max,
}) => (
  <utrecht-form-field-textbox
    autoComplete={autoComplete || null}
    disabled={disabled || null}
    invalid={invalid || null}
    min={min || null}
    max={max || null}
    pattern={pattern || null}
    placeholder={placeholder || null}
    readOnly={readOnly || null}
    required={required || null}
    value={value}
    type={type || null}
  >
    {label}
  </utrecht-form-field-textbox>
);

const meta = {
  title: 'Web Component/Form field with textbox',
  id: 'web-component-form-field-textbox',
  component: FormFieldTextbox,
  argTypes: {
    autoComplete: {
      description: 'Autocomplete',
      control: { type: 'select' },
      options: [
        '',
        'additional-name',
        'address-level1',
        'address-level2',
        'address-level3',
        'address-level4',
        'address-line1',
        'address-line2',
        'address-line3',
        'bday',
        'bday-day',
        'bday-month',
        'bday-year',
        'cc-additional-name',
        'cc-csc',
        'cc-exp',
        'cc-exp-month',
        'cc-exp-year',
        'cc-family-name',
        'cc-given-name',
        'cc-name',
        'cc-number',
        'cc-type',
        'country',
        'country-name',
        'current-password',
        'email',
        'family-name',
        'fax',
        'given-name',
        'home',
        'honorific-prefix',
        'honorific-suffix',
        'impp',
        'language',
        'mobile',
        'name',
        'new-password',
        'nickname',
        'one-time-code',
        'organization',
        'organization-title',
        'pager',
        'photo',
        'postal-code',
        'sex',
        'street-address',
        'tel',
        'tel-area-code',
        'tel-country-code',
        'tel-extension',
        'tel-local',
        'tel-local-prefix',
        'tel-local-suffix',
        'tel-national',
        'transaction-amount',
        'transaction-currency',
        'url',
        'username',
        'work',
      ],
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
    min: {
      description: 'Minimum',
      control: 'number',
    },
    max: {
      description: 'Maximum',
      control: 'number',
    },
    pattern: {
      description: 'Pattern',
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
    type: {
      description: 'Type',
      control: { type: 'select' },
      options: ['', 'email', 'password', 'search', 'tel', 'text', 'url'],
    },
  },
  args: {
    autoComplete: '',
    disabled: false,
    invalid: false,
    label: '',
    pattern: '',
    placeholder: '',
    readOnly: false,
    required: false,
    type: '',
    value: '',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-form-field-textbox',
    tokens,
    tokensDefinition: {},
    docs: {
      description: {
        component: '',
      },
    },
  },
} satisfies Meta<typeof FormFieldTextbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Message',
    value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
};

export const NumberType: Story = {
  args: {
    min: 0,
    max: 100,
    label: 'Lucky number',
    type: 'number',
    value: '42',
  },
  name: 'Number',
};

export const Password: Story = {
  args: {
    autoComplete: 'new-password',
    label: 'New password',
    type: 'password',
    value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  name: 'Password',
};

export const Placeholder: Story = {
  args: {
    label: 'Message',
    placeholder: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  name: 'Placeholder',
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
