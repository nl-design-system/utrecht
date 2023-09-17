/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/custom-checkbox/README.md?raw';
import tokensDefinition from '@utrecht/components/custom-checkbox/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtCustomCheckbox } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from '../components/util';

interface CustomCheckboxStoryProps {
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  invalid?: boolean;
  required?: boolean;
  value?: string;
}

const CustomCheckboxStory = ({
  checked,
  disabled,
  indeterminate,
  invalid,
  required,
  value,
}: CustomCheckboxStoryProps) => (
  <UtrechtCustomCheckbox
    checked={checked || null}
    disabled={disabled || null}
    indeterminate={indeterminate || null}
    invalid={invalid || null}
    required={required || null}
    value={value}
  ></UtrechtCustomCheckbox>
);

const meta = {
  title: 'Web Component/Custom checkbox',
  id: 'web-component-custom-checkbox',
  component: CustomCheckboxStory,
  argTypes: {
    checked: {
      description: 'Checked',
      control: 'boolean',
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    indeterminate: {
      description: 'Indeterminate',
      control: 'boolean',
    },
    invalid: {
      description: 'Invalid',
      control: 'boolean',
    },
    required: {
      description: 'Required',
      control: 'boolean',
    },
    value: {
      description: 'Internal value represented by the checkbox',
      control: 'text',
    },
  },
  args: {
    checked: false,
    disabled: false,
    indeterminate: false,
    invalid: false,
    required: false,
    value: '',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-custom-checkbox',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof CustomCheckboxStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'I agree',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    value: 'I agree',
  },
  name: 'Checked',
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'I agree',
  },
  name: 'Disabled',
};

export const CheckedAndDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
    value: 'I agree',
  },
  name: 'Checked and disabled',
};

export const Intederminate: Story = {
  args: {
    indeterminate: true,
    value: 'I agree',
  },
  name: 'Intederminate',
};

export const IntederminateAndDisabled: Story = {
  args: {
    indeterminate: true,
    disabled: true,
    value: 'I agree',
  },
  name: 'Intederminate and disabled',
};

export const RequiredAndInvalid: Story = {
  args: {
    invalid: true,
    required: true,
    value: 'I agree',
  },
  name: 'Required and invalid',
};

export const DesignTokens = designTokenStory(meta);
