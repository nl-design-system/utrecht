import { Meta, StoryObj } from '@storybook/react';
import { Select, SelectOption } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/select/README.md?raw';
import tokensDefinition from '@utrecht/components/select/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Select',
  id: 'react-select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-select',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
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
} as Meta<typeof Select>;

export default meta;

const options = [
  { value: '', label: 'Select an option', disabled: true },
  { value: '1', label: 'Option #1' },
  { value: '2', label: 'Option #2' },
  { value: '3', label: 'Option #3' },
  { value: '4', label: 'Option #4' },
];

const Template: StoryObj<typeof Select> = ({ options, ...args }) => (
  <Select {...args}>
    {options &&
      options.length > 0 &&
      options.map(({ label, value, disabled }, index) => (
        <SelectOption key={index} value={value} disabled={disabled}>
          {label}
        </SelectOption>
      ))}
  </Select>
);

export const Default = Template.bind({});

Default.args = {
  options,
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
  options,
};

export const Required = Template.bind({});

Required.args = {
  options,
  required: true,
};

export const RequiredServerSideRendering = Template.bind({});

RequiredServerSideRendering.args = {
  options,
  required: true,
  noscript: true,
};

export const Invalid = Template.bind({});

Invalid.args = {
  invalid: true,
  options,
};

export const Focus = Template.bind({});

Focus.args = {
  options,
};

Focus.parameters = {
  pseudo: { focus: true },
};

export const FocusVisible = Template.bind({});

FocusVisible.args = {
  options,
};

FocusVisible.parameters = {
  pseudo: { focusVisible: true, focus: true },
};

export const Hover = Template.bind({});

Hover.args = {
  options,
};

Hover.parameters = {
  pseudo: { hover: true },
};

export const DesignTokens = designTokenStory(meta);
