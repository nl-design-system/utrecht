/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/textbox/README.md?raw';
import tokensDefinition from '@utrecht/components/textbox/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtTextbox } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from '../components/util';

interface TextboxStoryProps {
  autoComplete?: string;
  disabled?: boolean;
  invalid?: boolean;
  min?: number | string;
  max?: number | string;
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  value?: boolean;
  type?: boolean;
}

const TextboxStory = ({
  autoComplete,
  disabled,
  invalid,
  min,
  max,
  pattern,
  placeholder,
  readOnly,
  required,
  type,
  value,
}: TextboxStoryProps) => (
  <UtrechtTextbox
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
  ></UtrechtTextbox>
);

const meta = {
  title: 'Web Component/Textbox',
  id: 'web-component-textbox',
  component: TextboxStory,
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
    min: null,
    max: null,
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
    tokensPrefix: 'utrecht-textbox',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof TextboxStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
};

export const Number: Story = {
  args: {
    min: 0,
    max: 100,
    type: 'number',
    value: '42',
  },
  name: 'Number',
};

export const Invalid: Story = {
  args: {
    invalid: true,
    value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  name: 'Invalid',
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  name: 'Disabled',
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  name: 'Read-only',
};

export const Placeholder: Story = {
  args: {
    placeholder: 'The Quick Brown Fox Jumps Over The Lazy Dog',
    value: '',
  },
  name: 'Placeholder',
};

export const DesignTokens = designTokenStory(meta);
