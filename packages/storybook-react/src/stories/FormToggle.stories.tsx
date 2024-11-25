import { Meta, StoryObj } from '@storybook/react';
import { FormToggle } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/form-toggle-css/README.md?raw';
import tokensDefinition from '@utrecht/form-toggle-css/dist/tokens.mjs';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Form toggle',
  id: 'react-form-toggle',
  component: FormToggle,
  parameters: {
    tokensPrefix: 'utrecht-form-toggle',
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
    invalid: {
      name: 'invalid',
      type: { name: 'boolean', required: false },
      table: { defaultValue: { summary: false } },
    },
    name: {
      name: 'name',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: '' } },
    },
    required: {
      name: 'required',
      type: { name: 'boolean', required: false },
      table: { defaultValue: { summary: false } },
    },
    value: {
      name: 'value',
      type: { name: 'string', required: false },
    },
  },
} satisfies Meta<typeof FormToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'd26299c0-d61d-460b-9278-4adab8440a28',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    id: '20e01936-911e-4114-8ecb-28e0ead124df',
  },
};

export const CheckedAndDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
    id: '16e6432c-0617-4d4b-8137-66bf02ebc91c',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    id: '7f57a350-5885-4566-8eaa-4012d8dadfda',
  },
};

export const Invalid: Story = {
  args: {
    id: '074a441b-95a1-43cd-b5ec-67ad2145b4b0',
    invalid: true,
  },
};

export const Required: Story = {
  args: {
    id: '63f42fd0-0add-4fe9-9a30-46e4dd3c028a',
    required: true,
  },
};

export const Hover: Story = {
  args: {
    id: '1bccae3f-3444-4f6d-a266-ba81a2d76959',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Focus: Story = {
  args: {
    id: '8082bd47-a99e-4f34-9898-d718e17b20f5',
  },
  parameters: {
    pseudo: { focus: true },
  },
};

export const FocusVisible: Story = {
  args: {
    id: 'de352dc4-7a42-4314-941d-55005f948561',
  },
  parameters: {
    pseudo: { focusVisible: true, focus: true },
  },
};

export const DesignTokens = designTokenStory(meta);
