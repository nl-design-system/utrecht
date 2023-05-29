import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { Select, SelectOption } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/select/README.md?raw';
import tokensDefinition from '@utrecht/components/select/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

interface SelectOptions {
  value: string;
  label: string;
  disabled?: boolean;
}

const options: SelectOptions[] = [
  { value: '', label: 'Select an option', disabled: true },
  { value: '1', label: 'Option #1' },
  { value: '2', label: 'Option #2' },
  { value: '3', label: 'Option #3' },
  { value: '4', label: 'Option #4' },
];

const meta = {
  title: 'React Component/Select',
  id: 'react-select',
  component: Select,
  parameters: {
    tokensPrefix: 'utrecht-select',
    tokens,
    tokensDefinition,
    docs: {
      page: () => (
        <>
          <Description>{readme}</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    disabled: {
      name: 'disabled',
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
    required: {
      name: 'required',
      type: { name: 'boolean', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: false },
      },
    },
    noscript: {
      name: 'noscript',
      type: { name: 'boolean', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: false },
      },
    },
    value: {
      name: 'value',
      type: { name: 'string' },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
  },
  render: ({ options, ...args }) => (
    <Select {...args}>
      {options &&
        options.length > 0 &&
        options.map(({ label, value, disabled }, index) => (
          <SelectOption key={index} value={value} disabled={disabled}>
            {label}
          </SelectOption>
        ))}
    </Select>
  ),
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options,
  },
};

export const Required: Story = {
  args: {
    required: true,
    options,
  },
};

export const RequiredServerSideRendering: Story = {
  args: {
    required: true,
    noscript: true,
    options,
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    options,
  },
};

export const Focus: Story = {
  args: {
    options,
  },
  parameters: {
    pseudo: { focus: true },
  },
};

export const FocusVisible: Story = {
  args: {
    options,
  },
  parameters: {
    pseudo: { focusVisible: true, focus: true },
  },
};

export const Hover: Story = {
  args: {
    options,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const DesignTokens = designTokenStory(meta);
