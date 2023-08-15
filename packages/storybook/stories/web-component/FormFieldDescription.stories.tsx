/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/form-field-description/README.md?raw';
import tokensDefinition from '@utrecht/components/form-field-description/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from '../components/util';

const FormFieldDescription = ({ children, id, status }) => (
  <utrecht-form-field-description id={id} status={status}>
    {children}
  </utrecht-form-field-description>
);

const meta = {
  title: 'Web Component/Form field description',
  id: 'web-component-form-field-description',
  component: FormFieldDescription,
  argTypes: {
    id: {
      description: 'Unique identifier to associate it with a form input',
      control: 'text',
    },
    children: {
      description: 'Set the content of the description',
      control: 'text',
    },
    status: {
      control: { type: 'select' },
      description: 'Status',
      options: ['', 'invalid', 'valid'],
    },
  },
  args: {
    children: [],
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-form-field-description',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof FormFieldDescription>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: '8e42ecf4-902c-4472-b9fb-74e594294fb6',
    children: <utrecht-paragraph>Your password must contain at least 16 characters.</utrecht-paragraph>,
  },
};

export const Invalid: Story = {
  args: {
    id: '381e25ec-9af5-4c56-8245-2c45503c29f9',
    children: <utrecht-paragraph>This is a required field and must not be left empty.</utrecht-paragraph>,
    status: 'invalid',
  },
  name: 'Invalid',
};

export const Valid: Story = {
  args: {
    id: '6fda501a-1512-4310-800d-7e4b5d305823',
    children: <utrecht-paragraph>This is very safe password!</utrecht-paragraph>,
    status: 'valid',
  },
  name: 'Valid',
};

export const DesignTokens = designTokenStory(meta);
