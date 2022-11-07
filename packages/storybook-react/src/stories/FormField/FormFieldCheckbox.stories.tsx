import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox, FormField, FormFieldDescription, FormLabel, Paragraph } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

const storyArgTypes = {
  ...argTypes,
  checked: {
    description: 'Checked',
    control: 'boolean',
    table: {
      category: 'Story',
      defaultValue: { summary: false },
    },
  },
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

export default {
  title: 'React Component/Form Field',
  id: 'react-form-field',
  component: FormField,
  argTypes: storyArgTypes,
} as ComponentMeta<typeof FormField>;

const Template: ComponentStory<typeof FormField> = (args) => {
  const { checked, description, disabled, id, invalid, invalidDescription, label, name, required, value, type } = args;
  const descriptionId = description ? `${id}-description` : null;
  const invalidDescriptionId = invalidDescription ? `${id}-invalid-description` : null;
  return (
    <FormField invalid={invalid} type={type}>
      <Paragraph className="utrecht-form-field__label utrecht-form-field__label--checkbox">
        <FormLabel disabled={disabled} type="checkbox" htmlFor={id}>
          <Checkbox
            aria-describedby={[descriptionId, invalidDescriptionId].filter(Boolean).join(' ') || null}
            className="utrecht-form-field__input"
            defaultChecked={checked}
            disabled={disabled}
            id={id}
            invalid={invalid}
            required={required}
            name={name}
            value={value}
          />
          {label}
        </FormLabel>
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
};

export const FormFieldCheckbox = Template.bind({});

FormFieldCheckbox.args = {
  checked: false,
  description: 'U kunt ons echt vertrouwen!',
  disabled: false,
  id: '43f471c8-c6f1-4867-bc53-9602c06b8a32',
  invalid: true,
  invalidDescription: 'U moet akkoord gaan met de algemene voorwaarden, anders kunt u niet verder.',
  label: 'Ik ga akkoord met de algemene voorwaarden',
  name: 'consent',
  value: 'true',
  required: true,
  type: 'checkbox',
};
