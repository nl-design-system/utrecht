/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/checkbox/README.md?raw';
import tokensDefinition from '@utrecht/components/checkbox/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtCheckbox } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

interface CheckboxStoryProps {
  checked?: boolean;
  disabled?: boolean;
  value?: string;
}

const Checkbox = ({ checked, disabled, value }: CheckboxStoryProps) => (
  <UtrechtCheckbox checked={checked || null} disabled={disabled || null} value={value || null} />
);

const meta = {
  title: 'Web Component/Checkbox',
  id: 'web-component-checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      description: 'Checked',
      control: 'boolean',
    },
    disabled: {
      description: 'Disabled',
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
    value: '',
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

export const DesignTokens = designTokenStory(meta);
