/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/radio-button/README.md?raw';
import tokensDefinition from '@utrecht/components/radio-button/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from '../components/util';

const RadioButton = ({ checked, disabled, invalid, required, value, ...attributes }) => (
  <input
    type="radio"
    defaultChecked={checked || null}
    aria-invalid={invalid || null}
    disabled={disabled || null}
    required={required || null}
    value={value}
    {...attributes}
  />
);

const meta = {
  title: 'HTML Component/Radio button',
  id: 'html-radio-button',
  component: RadioButton,
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
    invalid: {
      description: 'Invalid',
      control: 'boolean',
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
    invalid: false,
    required: false,
    value: '',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-radio-button',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'option',
    value: 'option-a',
  },
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `<input type="radio">` element.',
      },
    },
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    name: 'option',
    value: 'option-a',
  },
  name: 'Checked',
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `checked` attribute.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    name: 'option',
    value: 'option-a',
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

export const CheckedAndDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
    name: 'option',
    value: 'option-a',
  },
  name: 'Checked and disabled',
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `checked` and `disabled` attributes.',
      },
    },
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    name: 'option',
    value: 'option-a',
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

export const DesignTokens = designTokenStory(meta);
