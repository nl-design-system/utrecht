/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/checkbox/README.md?raw';
import tokensDefinition from '@utrecht/components/checkbox/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import clsx from 'clsx';
import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { designTokenStory } from './util';
import '@utrecht/components/alert/css/index.scss';

type ExtraAttributes = {
  indeterminate: boolean;
  invalid: boolean;
};

type CheckboxType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & ExtraAttributes;

const defaultArgs: CheckboxType = {
  checked: false,
  disabled: false,
  id: '',
  indeterminate: false,
  invalid: false,
  name: '',
  required: false,
  value: '',
} as CheckboxType;

const Checkbox = ({
  checked = defaultArgs.checked,
  className,
  custom = false,
  disabled = defaultArgs.disabled,
  id = defaultArgs.id,
  indeterminate = defaultArgs.indeterminate,
  invalid = defaultArgs.invalid,
  name = defaultArgs.name,
  required = defaultArgs.required,
  value = defaultArgs.value,
  ...restProps
}) => (
  <input
    aria-invalid={invalid || undefined}
    className={clsx(
      'utrecht-checkbox',
      'utrecht-checkbox--html-input',
      custom && 'utrecht-checkbox--custom',
      checked && 'utrecht-checkbox--checked',
      disabled && 'utrecht-checkbox--disabled',
      className,
    )}
    defaultChecked={checked}
    disabled={disabled}
    id={id || undefined}
    indeterminate={!!indeterminate}
    name={name || undefined}
    required={!!required}
    type="checkbox"
    value={value || undefined}
    {...restProps}
  />
);

const meta = {
  title: 'CSS Component/Checkbox',
  id: 'css-checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      description: 'Checked',
      control: 'boolean',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: false },
      },
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: false },
      },
    },
    id: {
      description: 'ID',
      control: 'text',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    indeterminate: {
      name: 'indeterminate',
      type: { name: 'boolean', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: false },
      },
    },
    invalid: {
      name: 'invalid',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
      },
    },
    name: {
      description: 'Name',
      control: 'text',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    required: {
      name: 'required',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
        category: 'HTML attribute',
      },
    },
    value: {
      description: 'Value',
      control: 'text',
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
  },
  args: {},
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokensPrefix: 'utrecht-button-link',
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

export const Default: Story = {};

export const StateChecked: Story = {
  id: 'css-checkbox--state',
  title: 'CSS Component/Checkbox/States',
  args: {
    ...Default.args,
    checked: true,
  },
};

export const StateDisabled: Story = {
  id: 'css-checkbox--state',
  title: 'CSS Component/Checkbox/States',
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const StateCheckedAndDisabled: Story = {
  id: 'css-checkbox--state',
  title: 'CSS Component/Checkbox/States',
  args: {
    ...Default.args,
    checked: true,
    disabled: true,
  },
};

export const DesignTokens = designTokenStory(meta);
