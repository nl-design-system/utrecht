/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import {
  Code,
  FormFieldErrorMessage,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';
import readme from '@utrecht/components/form-field-error-message/README.md?raw';
import tokensDefinition from '@utrecht/components/form-field-error-message/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
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

export const PlainText: Story = {
  args: {
    id: 'f4f534ae-ed96-4af4-9cb0-3752194cde89',
    children: 'Your password must contain at least 16 characters.',
  },
  name: 'Plain text',
};

export const PlainTextMultiline: Story = {
  args: {
    id: 'f4f534ae-ed96-4af4-9cb0-3752194cde89',
    children: 'Your password must contain at least 16 characters. '.repeat(10),
  },
  name: 'Multiple lines of plain text',
  parameters: {
    docs: {
      description: {
        story: 'De `line-height` van foutmeldingen moet voldoende zijn voor goede leesbaarheid.',
      },
    },
  },
};

export const UnorderedListStory: Story = {
  args: {
    id: 'f4f534ae-ed96-4af4-9cb0-3752194cde89',
    children: (
      <UnorderedList>
        <UnorderedListItem>Your password must contain at least 16 characters.</UnorderedListItem>
        <UnorderedListItem>Your password must contain at least 1 number.</UnorderedListItem>
      </UnorderedList>
    ),
  },
  name: 'Unordered list',
};

export const UnorderedListParagraphStory: Story = {
  args: {
    id: 'f4f534ae-ed96-4af4-9cb0-3752194cde89',
    children: (
      <UnorderedList>
        <UnorderedListItem>
          <Paragraph>Your password must contain at least 16 characters.</Paragraph>
        </UnorderedListItem>
        <UnorderedListItem>
          <Paragraph>Your password must contain at least 1 number.</Paragraph>
        </UnorderedListItem>
      </UnorderedList>
    ),
  },
  name: 'Unordered list with paragraphs',
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
