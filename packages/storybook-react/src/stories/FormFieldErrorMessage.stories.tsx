import { Meta, StoryObj } from '@storybook/react-vite';
import { Code, FormFieldErrorMessage, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/form-field-error-message-css/README.md?raw';
import tokensDefinition from '@utrecht/form-field-error-message-css/dist/tokens.mjs';
import React from 'react';
import { designTokenStory } from './util.js';

const meta = {
  title: 'React Component/Form field error message',
  id: 'react-form-field-error-message',
  component: FormFieldErrorMessage,
  args: {
    children: '',
  },
  parameters: {
    tokensPrefix: 'utrecht-form-field-error-message',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  decorators: [(Story) => <Paragraph>{Story()}</Paragraph>],
} satisfies Meta<typeof FormFieldErrorMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'aee06f60-3496-44de-a177-72dea88b5362',
    children: <Paragraph>This is a required field and must not be left empty.</Paragraph>,
  },
};

export const CodeError: Story = {
  args: {
    id: '8a2e3430-d6b1-4575-8353-4c624c87aba9',
    children: (
      <Paragraph>
        <Code>SyntaxError: JSON.parse: unexpected end of data at line 1 column 1 of the JSON data</Code>
      </Paragraph>
    ),
  },
  name: 'Code error',
  parameters: {
    docs: {
      description: {
        story:
          'Gebruik een _paragraph_ en een _code_ component (en geen _code block_), zodat de tekst kan wrappen over meedere regels en de line-height voldoende is.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
