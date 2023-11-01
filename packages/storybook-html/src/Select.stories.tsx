/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/select/README.md?raw';
import multipleDocs from '@utrecht/components/select/_multiple.md?raw';
import tokensDefinition from '@utrecht/components/select/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React, { SelectHTMLAttributes } from 'react';
import hiddenDocs from './_hidden.md?raw';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';
import { hidden } from './util/htmlArgTypes';

interface OptionProps {
  label: string;
  selected?: boolean;
  value: string;
}
interface SelectStoryProps extends SelectHTMLAttributes<HTMLSelectElement> {
  invalid?: boolean;
  options: OptionProps[];
}

const Select = ({ disabled, invalid, options, required, value, ...restProps }: SelectStoryProps) => (
  <select
    aria-invalid={invalid || undefined}
    disabled={disabled || undefined}
    required={required || undefined}
    defaultValue={value}
    {...restProps}
  >
    {options.map(({ label, selected, value }: OptionProps) => (
      <option selected={selected || undefined} value={value || undefined}>
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
    hidden,
    invalid: {
      description: 'Invalid',
      control: 'boolean',
    },
    multiple: {
      description: 'Multiple',
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
    hidden: false,
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

export const Multiple: Story = {
  args: {
    ...Default.args,
    multiple: true,
  },
  name: 'Multiple',
  parameters: {
    docs: {
      description: {
        story: multipleDocs,
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
