import { Meta, StoryObj } from '@storybook/react';
import { FormField, FormLabel, RadioButton } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/radio-button/README.md';
import tokensDefinition from '@utrecht/components/radio-button/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Radio Button',
  id: 'react-radio-button',
  component: RadioButton,
  subcomponents: { FormLabel, FormField },
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-radio-button',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  argTypes: {
    checked: {
      name: 'checked',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
        category: 'HTML attribute',
      },
    },
    disabled: {
      name: 'disabled',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: false },
        category: 'HTML attribute',
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
        defaultValue: { summary: false },
        category: 'HTML attribute',
      },
    },
    value: {
      name: 'value',
      type: { name: 'string', required: false },
      table: {
        category: 'HTML attribute',
      },
    },
  },
} as Meta<typeof RadioButton>;

export default meta;

const Template: StoryObj<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});

export const Hover = Template.bind({});

Hover.parameters = {
  pseudo: { hover: true },
};

export const Focus = Template.bind({});

Focus.parameters = {
  pseudo: { focus: true },
};

export const FocusVisible = Template.bind({});

FocusVisible.parameters = {
  pseudo: { focusVisible: true },
};

export const Checked = Template.bind({});

Checked.args = {
  checked: true,
  value: 'checked',
};

export const CheckedAndDisabled = Template.bind({});

CheckedAndDisabled.args = {
  checked: true,
  disabled: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};

export const Invalid = Template.bind({});

Invalid.args = {
  invalid: true,
};

export const Required = Template.bind({});

Required.args = {
  required: true,
};

export const DesignTokens = designTokenStory(meta);
