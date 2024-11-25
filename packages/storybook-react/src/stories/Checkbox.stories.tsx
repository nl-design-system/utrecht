import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/checkbox-css/README.md?raw';
import tokensDefinition from '@utrecht/checkbox-css/dist/tokens.mjs';
import { Checkbox } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Checkbox',
  id: 'react-checkbox',
  component: Checkbox,
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
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const CheckedAndDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Hover: Story = {
  parameters: {
    pseudo: { hover: true },
  },
};

export const Focus: Story = {
  parameters: {
    pseudo: { focus: true },
  },
};

export const FocusVisible: Story = {
  parameters: {
    pseudo: { focusVisible: true, focus: true },
  },
};

export const DesignTokens = designTokenStory(meta);
