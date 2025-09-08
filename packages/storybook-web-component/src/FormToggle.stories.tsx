/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/form-toggle-css/README.md?raw';
import tokensDefinition from '@utrecht/form-toggle-css/src/tokens.json';
import { UtrechtFormToggle } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

interface FormToggleStoryProps {
  checked?: boolean;
  disabled?: boolean;
}

const FormToggleStory = ({ checked, disabled }: FormToggleStoryProps) => (
  <UtrechtFormToggle checked={checked || null} disabled={disabled || null}></UtrechtFormToggle>
);

const meta = {
  title: 'Web Component/Form toggle',
  id: 'web-component-form-toggle',
  component: FormToggleStory,
  argTypes: {
    checked: {
      description: 'Checked',
      control: 'boolean',
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
  },
  args: {
    checked: false,
    disabled: false,
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-form-toggle',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof FormToggleStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

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
    disabled: true,
    checked: true,
  },
  name: 'Checked and disabled',
};

export const DesignTokens = designTokenStory(meta);
