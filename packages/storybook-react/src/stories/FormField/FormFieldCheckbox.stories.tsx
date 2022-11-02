import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox, FormField, FormFieldDescription, FormLabel } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React.js Component/Form Field',
  id: 'react-form-label',
  component: FormField,
  argTypes,
} as ComponentMeta<typeof FormField>;

const Template: ComponentStory<typeof FormField> = (args) => {
  const { description, disabled, id, invalid, invalidDescription, label, name, required, value, type } = args;
  const descriptionId = description ? `${id}-description` : null;
  const invalidDescriptionId = invalidDescription ? `${id}-invalid-description` : null;
  return (
    <FormField invalid={invalid} type={type}>
      <p className="utrecht-form-field__label utrecht-form-field__label--checkbox">
        <FormLabel disabled={disabled} type="checkbox" htmlFor={id}>
          <Checkbox
            aria-describedby={[descriptionId, invalidDescriptionId].filter(Boolean).join(' ') || null}
            className="utrecht-form-field__input"
            disabled={disabled}
            id={id}
            invalid={invalid}
            required={required}
            name={name}
            value={value}
          />
          {label}
        </FormLabel>
      </p>
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
