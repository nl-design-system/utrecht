/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import readme from '@utrecht/checkbox-css/README.md?raw';
import tokensDefinition from '@utrecht/checkbox-css/src/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React, { InputHTMLAttributes } from 'react';
import hiddenDocs from './_hidden.md?raw';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';
import { hidden } from './util/htmlArgTypes';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  indeterminate?: boolean;
  invalid?: boolean;
}

const Checkbox = ({
  checked,
  disabled,
  indeterminate,
  invalid,
  name,
  required,
  value,
  ...attributes
}: CheckboxProps) => (
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
    hidden,
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
    hidden: false,
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

export const Hidden: Story = {
  args: {
    ...Default.args,
    hidden: true,
  },
  parameters: {
    docs: {
      description: {
        story: hiddenDocs,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
