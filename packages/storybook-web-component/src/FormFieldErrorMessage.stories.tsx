/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/form-field-error-message/README.md?raw';
import tokensDefinition from '@utrecht/components/form-field-error-message/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtFormFieldErrorMessage } from '@utrecht/web-component-library-react';
import React, { PropsWithChildren } from 'react';
import { designTokenStory } from './design-token-story';

interface FormFieldErrorMessageStoryProps {
  id?: string;
}

const FormFieldErrorMessageStory = ({ children, id }: PropsWithChildren<FormFieldErrorMessageStoryProps>) => (
  <UtrechtFormFieldErrorMessage id={id}>{children}</UtrechtFormFieldErrorMessage>
);

const meta = {
  title: 'Web Component/Form field error message',
  id: 'web-component-form-field-error-message',
  component: FormFieldErrorMessageStory,
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
    children: [],
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-form-field-error-message',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof FormFieldErrorMessageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'db126fdc-4a71-429c-86e5-32a17d2e29a5',
    children: <utrecht-paragraph>This is a required field and must not be left empty.</utrecht-paragraph>,
  },
};
export const CodeError: Story = {
  args: {
    id: '709e0cf1-91f4-480e-ae03-34ffbb1386c8',
    children: (
      <utrecht-paragraph>
        <utrecht-code>SyntaxError: JSON.parse: unexpected end of data at line 1 column 1 of the JSON data</utrecht-code>
      </utrecht-paragraph>
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
