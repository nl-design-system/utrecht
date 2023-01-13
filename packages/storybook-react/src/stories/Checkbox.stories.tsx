import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/checkbox/README.md';
import tokensDefinition from '@utrecht/components/checkbox/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Checkbox',
  id: 'react-checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-checkbox',
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
      table: { defaultValue: { summary: false } },
    },
    disabled: {
      name: 'disabled',
      type: { name: 'boolean', required: false },
      table: { defaultValue: { summary: false } },
    },
    value: {
      name: 'value',
      type: { name: 'string', required: false },
    },
  },
} as Meta<typeof Checkbox>;

export default meta;

const Template: StoryObj<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

export const Checked = Template.bind({});

Checked.args = {
  checked: true,
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

export const DesignTokens = designTokenStory(meta);
