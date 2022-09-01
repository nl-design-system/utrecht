/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';

export const argTypes = {
  label: {
    description: 'Set the content of the label',
    control: 'text',
  },
  name: {
    description: 'Set the name of the radio button',
    control: 'text',
  },
  options: {
    description: 'Options for which there must be a the radio button',
    type: {
      name: 'array',
      required: true,
    },
  },
  id: {
    description: 'Set the id to link the description with the formfield',
    type: 'text',
  },
};

export const defaultArgs = {
  label: '',
  name: '',
  options: [],
  id: 'id-9e42cd3e',
};

export const exampleArgs = {
  label: 'Which option do you like best?',
  name: 'radiobutton',
  options: [
    {
      label: 'Option 1',
      value: '1',
    },
    {
      checked: true,
      label: 'Option 2',
      value: '2',
    },
    {
      label: 'Option 3',
      value: '3',
    },
  ],
};

export const FormFieldRadioGroup = ({
  label = defaultArgs.label,
  name = defaultArgs.name,
  options = defaultArgs.options,
  id = defaultArgs.id,
}) => (
  <div
    className="utrecht-form-field-radio-group utrecht-form-field-radio-group--distanced"
    role="radiogroup"
    aria-labelledby={id}
  >
    <div className="utrecht-form-field-radio-group__label utrecht-form-label" id={id}>
      {label}
    </div>
    {options.map(({ checked, label, value }, index) => (
      <div className="utrecht-form-field-radio utrecht-form-field-radio--distanced">
        <input
          type="radio"
          name={name}
          value={value}
          className="utrecht-form-field-radio__input utrecht-radio-button"
          id={`option-${index}`}
          checked={checked || null}
        />
        <label
          className="utrecht-form-field-radio__label utrecht-form-label utrecht-form-label--radio"
          htmlFor={`option-${index}`}
        >
          {label}
        </label>
      </div>
    ))}
  </div>
);

export default FormFieldRadioGroup;
