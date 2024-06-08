/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { FormFieldErrorMessage, Paragraph } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/form-field-error-message-css/README.md?raw';
import tokensDefinition from '@utrecht/form-field-error-message-css/src/tokens.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Form field error message',
  id: 'css-form-field-error-message',
  component: FormFieldErrorMessage,
  argTypes: {
    id: {
      description: 'Unique identifier to associate it with a form input',
      control: 'text',
    },
    children: {
      description: 'Set the content of the error message',
      control: 'text',
    },
  },
  args: {
    id: null,
    children: '',
    distanced: false,
  },
  parameters: {
    tokensPrefix: 'utrecht-form-field-error-message',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof FormFieldErrorMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'f4f534ae-ed96-4af4-9cb0-3752194cde89',
    children: <Paragraph>Your password must contain at least 16 characters.</Paragraph>,
  },
};

export const DesignTokens = designTokenStory(meta);
