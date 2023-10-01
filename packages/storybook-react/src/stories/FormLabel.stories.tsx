import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { FormLabel } from '@utrecht/component-library-react/src/css-module/index';
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
