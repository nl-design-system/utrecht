import { Meta, StoryObj } from '@storybook/react';
import { FormLabel } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/form-label/README.md?raw';
import tokensDefinition from '@utrecht/components/form-label/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Form Label',
  id: 'react-form-label',
  component: FormLabel,
  argTypes: {
    type: {
      type: 'select',
      options: [undefined, 'checkbox', 'radio'],
    },
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
  },
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-form-label',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof FormLabel>;

export default meta;

const Template: StoryObj<typeof FormLabel> = (args) => <FormLabel {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Username',
};

export const Checked = Template.bind({});

Checked.args = {
  children: 'Form Label Checked',
  type: 'checkbox',
};

export const Disabled = Template.bind({});

Disabled.args = {
  children: 'Form Label Disabled',
  type: 'radio',
};

export const Checkbox = Template.bind({});

Checkbox.args = {
  children: 'Form Label Checkbox',
  type: 'checkbox',
};

export const Radio = Template.bind({});

Radio.args = {
  children: 'Form Label Radio',
  type: 'radio',
};

export const DesignTokens = designTokenStory(meta);
