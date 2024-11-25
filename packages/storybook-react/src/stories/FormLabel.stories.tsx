import { Meta, StoryObj } from '@storybook/react';
import { FormLabel } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/form-label-css/README.md?raw';
import tokensDefinition from '@utrecht/form-label-css/dist/tokens.mjs';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Form Label',
  id: 'react-form-label',
  component: FormLabel,
  argTypes: {
    type: {
      type: { name: 'string', required: false },
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
  args: {
    children: 'Username',
  },
} satisfies Meta<typeof FormLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    children: 'Form Label Checked',
    type: 'checkbox',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Form Label Disabled',
    type: 'radio',
  },
};

export const Checkbox: Story = {
  args: {
    children: 'Form Label Checkbox',
    type: 'checkbox',
  },
};

export const Radio: Story = {
  args: {
    children: 'Form Label Radio',
    type: 'radio',
  },
};

export const DesignTokens = designTokenStory(meta);
