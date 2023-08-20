/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/select/README.md?raw';
import tokensDefinition from '@utrecht/components/select/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from '../components/util';

const Select = ({ disabled, invalid, options, required, value }) => (
  <select aria-invalid={invalid || null} disabled={disabled || null} required={required || null} defaultValue={value}>
    {options.map(({ label, selected, value }) => (
      <option selected={selected || null} value={value || null}>
        {label}
      </option>
    ))}
  </select>
);

const meta = {
  title: 'HTML Component/Select',
  id: 'html-select',
  component: Select,
  decorators: [htmlContentDecorator],
  argTypes: {
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    invalid: {
      description: 'Invalid',
      control: 'boolean',
    },
    options: {
      description: 'Options',
      type: {
        name: 'array',
        required: true,
      },
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
    disabled: false,
    invalid: false,
    options: [],
    required: false,
    value: '',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-select',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { value: '1', label: 'Option #1' },
      { value: '2', label: 'Option #2', selected: true },
      { value: '3', label: 'Option #3' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `<select>` element.',
      },
    },
  },
};

export const Invalid: Story = {
  args: {
    ...Default.args,
    invalid: true,
  },
  name: 'Invalid',
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `aria-invalid="true"` attribute.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `disabled` attribute.',
      },
    },
  },
};

export const Required: Story = {
  args: {
    ...Default.args,
    required: true,
  },
  name: 'Required',
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `required` or `aria-required="true"` attribute.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
