import { Meta, StoryObj } from '@storybook/react';
import {
  FormField,
  FormFieldDescription,
  FormLabel,
  Paragraph,
  Textarea,
  Textbox,
} from '@utrecht/component-library-react';
import React from 'react';
import FormFieldMeta from './FormField.stories.js';

const storyArgTypes = {
  ...FormFieldMeta.argTypes,
  required: {
    description: 'Required',
    control: 'boolean',
    table: {
      category: 'Story',
      defaultValue: { summary: false },
    },
  },
  id: {
    description: 'ID',
    type: { name: 'text', required: true },
    table: {
      category: 'Story',
      defaultValue: { summary: '' },
    },
  },
  name: {
    description: 'Name',
    control: 'text',
    table: {
      category: 'Story',
      defaultValue: { summary: '' },
    },
  },
  value: {
    description: 'Value',
    control: 'text',
    table: {
      category: 'Story',
      defaultValue: { summary: '' },
    },
  },
  label: {
    name: 'label',
    type: { name: 'text', required: true },
    table: {
      defaultValue: { summary: false },
      category: 'Story',
    },
  },
  invalidDescription: {
    name: 'invalidDescription',
    description: 'Description for invalid input',
    type: { name: 'text', required: false },
    table: {
      defaultValue: { summary: false },
      category: 'Story',
    },
  },
  description: {
    description: 'Description',
    type: { name: 'text', required: false },
    table: {
      category: 'Story',
      defaultValue: { summary: '' },
    },
  },
};

const meta = {
  title: 'React Component/Form Field/Textbox',
  id: 'react-form-field',
  component: FormField,
  argTypes: storyArgTypes,
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
  render: (args) => {
    const { description, disabled, id, Input, invalid, invalidDescription, label, name, required, value, type } = args;
    const descriptionId = description ? `${id}-description` : null;
    const invalidDescriptionId = invalidDescription ? `${id}-invalid-description` : null;
    return (
      <FormField invalid={invalid} type={type}>
        <Paragraph className="utrecht-form-field__label">
          <FormLabel disabled={disabled} htmlFor={id}>
            {label}
          </FormLabel>
        </Paragraph>
        <Paragraph className="utrecht-form-field__input">
          <Input
            id={id}
            disabled={disabled}
            invalid={invalid}
            name={name}
            type={type}
            required={required}
            value={value}
          />
        </Paragraph>
        {description ? (
          <FormFieldDescription id={descriptionId} className="utrecht-form-field__description">
            {description}
          </FormFieldDescription>
        ) : undefined}
        {invalidDescription ? (
          <FormFieldDescription id={invalidDescriptionId} invalid className="utrecht-form-field__description">
            {invalidDescription}
          </FormFieldDescription>
        ) : undefined}
      </FormField>
    );
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FormFieldTextbox: Story = {};

export const FormFieldTextarea: Story = {
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
    Input: Textarea,
  },
};
