/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/form-toggle/README.md?raw';
import tokensDefinition from '@utrecht/components/form-toggle/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from '../components/util';

const FormToggle = ({ checked, disabled }) => (
  <utrecht-form-toggle checked={checked || null} disabled={disabled || null}></utrecht-form-toggle>
);

const meta = {
  title: 'Web Component/Form toggle',
  id: 'web-component-form-toggle',
  component: FormToggle,
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
} satisfies Meta<typeof FormToggle>;

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
