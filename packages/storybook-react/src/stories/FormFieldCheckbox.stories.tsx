import { Meta, StoryObj } from '@storybook/react-vite';
import { FormFieldCheckbox } from '@utrecht/component-library-react/dist/css-module';
import React from 'react';
import FormFieldMeta from './FormField.stories.js';

const storyArgTypes = {
  ...FormFieldMeta.argTypes,
  inputInvalid: {
    description: 'Sets invalid on the input element only',
    control: 'boolean',
    table: {
      category: 'API',
      defaultValue: { summary: true },
    },
  },
  defaultChecked: {
    description: 'Checked',
    control: 'boolean',
    table: {
      category: 'API',
      defaultValue: { summary: false },
    },
  },
  indeterminate: {
    description: 'Indeterminate',
    control: 'boolean',
    table: {
      category: 'API',
      defaultValue: { summary: false },
    },
  },
  required: {
    description: 'Required',
    control: 'boolean',
    table: {
      category: 'API',
      defaultValue: { summary: false },
    },
  },
  id: {
    description: 'ID',
    type: { name: 'text', required: true },
    table: {
      category: 'DOM',
      defaultValue: { summary: '' },
    },
  },
  name: {
    description: 'Name',
    control: 'text',
    table: {
      category: 'API',
      defaultValue: { summary: '' },
    },
  },
  value: {
    description: 'Value',
    control: 'text',
    table: {
      category: 'API',
      defaultValue: { summary: '' },
    },
  },
  label: {
    name: 'label',
    type: { name: 'text', required: true },
    table: {
      defaultValue: { summary: false },
      category: 'API',
    },
  },
  errorMessage: {
    name: 'errorMessage',
    description: 'Description for invalid input',
    type: { name: 'text', required: false },
    table: {
      defaultValue: { summary: false },
      category: 'API',
    },
  },
  description: {
    description: 'Description',
    type: { name: 'text', required: false },
    table: {
      category: 'API',
      defaultValue: { summary: '' },
    },
  },
};

const meta = {
  title: 'React Component/Form Field with checkbox',
  id: 'react-form-field-checkbox',
  component: FormFieldCheckbox,
  argTypes: storyArgTypes,
  args: {
    inputInvalid: false,
    defaultChecked: false,
    description: 'U kunt ons echt vertrouwen!',
    disabled: false,
    id: '12157f39-9547-45b1-aa4b-e1c9d51fcf24',
    indeterminate: false,
    invalid: false,
    errorMessage: 'U moet akkoord gaan met de algemene voorwaarden, anders kunt u niet verder.',
    label: 'Ik ga akkoord met de algemene voorwaarden',
    name: 'consent',
    value: 'true',
    required: true,
  },
  render: (args) => {
    const {
      inputInvalid,
      defaultChecked,
      description,
      disabled,
      id,
      indeterminate,
      invalid,
      errorMessage,
      label,
      name,
      required,
      value,
    } = args;
    return (
      <FormFieldCheckbox
        inputInvalid={inputInvalid}
        id={id}
        defaultChecked={defaultChecked}
        description={description}
        disabled={disabled}
        errorMessage={errorMessage}
        indeterminate={indeterminate}
        invalid={invalid}
        label={label}
        name={name}
        required={required}
        value={value}
      />
    );
  },
} satisfies Meta<typeof FormFieldCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FormFieldCheckboxStory: Story = {};
