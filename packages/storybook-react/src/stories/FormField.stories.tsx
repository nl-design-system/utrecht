import { Meta, StoryObj } from '@storybook/react';
import { FormField, Paragraph, Textbox } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/form-field-css/README.md?raw';
import tokensDefinition from '@utrecht/form-field-css/dist/tokens.mjs';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Form Field/Textbox',
  id: 'react-form-field',
  component: FormField,
  render: (args) => {
    const { description, invalid, label, type, input } = args;
    return (
      <FormField invalid={invalid} type={type}>
        <Paragraph className="utrecht-form-field__label">{label}</Paragraph>
        <Paragraph className="utrecht-form-field__input">{input}</Paragraph>
        {description}
      </FormField>
    );
  },
  args: {
    description: 'Maximaal 140 karakters',
    disabled: false,
    id: '3a43bbe9-635c-46c2-86cd-b0aa63855598',
    invalid: true,
    invalidDescription: 'Fout: het veld is nog leeg. Vul een bericht in.',
    label: 'Tweet',
    name: 'message',
    value: '',
    required: true,
    type: 'text',
    Input: Textbox,
  },
  argTypes: {
    invalid: {
      name: 'invalid',
      type: { name: 'boolean', required: false },
      table: {
        category: 'Component',
        defaultValue: { summary: false },
      },
    },
    type: {
      name: 'type',
      control: { type: 'select' },
      options: ['', 'checkbox', 'radio', 'text'],
      table: {
        category: 'Component',
        defaultValue: { summary: false },
      },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-form-field',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;
export const FormFieldStory: Story = {};

export const DesignTokens = designTokenStory(meta);
