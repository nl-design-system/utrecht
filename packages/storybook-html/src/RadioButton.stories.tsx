/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/radio-button-css/README.md?raw';
import tokensDefinition from '@utrecht/radio-button-css/src/tokens.json';
import React, { InputHTMLAttributes } from 'react';
import hiddenDocs from './_hidden.md?raw';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';
import { hidden } from './util/htmlArgTypes';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

const RadioButton = ({ checked, disabled, invalid, required, value, ...attributes }: RadioButtonProps) => (
  <input
    type="radio"
    defaultChecked={checked || undefined}
    aria-invalid={invalid || undefined}
    disabled={disabled || undefined}
    required={required || undefined}
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
    hidden,
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
    hidden: false,
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
