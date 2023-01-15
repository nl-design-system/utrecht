import { Meta, StoryObj } from '@storybook/react';
import { FormField, Paragraph, Textbox } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/form-field/README.md?raw';
import tokensDefinition from '@utrecht/components/form-field/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Form Field/Textbox',
  id: 'react-form-field',
  component: FormField,
  argTypes: {
    disabled: {
      description: 'Disabled',
      control: 'boolean',
      table: {
        category: 'Component',
        defaultValue: { summary: false },
      },
    },
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
  tags: ['autodocs'],
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
} as Meta<typeof FormField>;

export default meta;

const Template: StoryObj<typeof FormField> = (args) => {
  const { description, invalid, label, type, input } = args;
  return (
    <FormField invalid={invalid} type={type}>
      <Paragraph className="utrecht-form-field__label">{label}</Paragraph>
      <Paragraph className="utrecht-form-field__input">{input}</Paragraph>
      {description}
    </FormField>
  );
};

export const FormFieldStory = Template.bind({});

FormFieldStory.args = {
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
};

export const DesignTokens = designTokenStory(meta);
