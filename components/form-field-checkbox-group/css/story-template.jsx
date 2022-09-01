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
  options: {
    description: 'Options for which there must be a the checkbox',
    type: {
      name: 'array',
      required: true,
    },
  },
};

export const defaultArgs = {
  label: '',
  options: [],
};

export const exampleArgs = {
  label: 'Ik verklaar dat de volgende beweringen kloppen:',
  options: [
    {
      name: 'requirement1',
      value: 'true',
      label: 'Ik sta niet onder curatele',
      checked: true,
    },
    {
      name: 'requirement2',
      value: 'true',
      label: 'Ik ben woonachtig in Nederland',
    },
    {
      name: 'requirement3',
      value: 'true',
      label: 'Ik trouw niet onder dwang',
    },
  ],
};

export const FormFieldCheckboxGroup = ({
  label = defaultArgs.label,
  options = defaultArgs.options,
  groupLabelId = 'group-label',
}) => (
  <div
    className="utrecht-form-field-checkbox-group utrecht-form-field-checkbox-group--distanced"
    role="group"
    aria-labelledby={groupLabelId}
  >
    <div className="utrecht-form-field-checkbox-group__label utrecht-form-label" id={groupLabelId}>
      {label}
    </div>

    {options
      .map((option, index) => ({
        ...option,
        id: options.id || `option-${index}`,
      }))
      .map(({ id, label, name, value, checked }) => (
        <div key={id} className="utrecht-form-field utrecht-form-field--checkbox utrecht-form-field--distanced">
          <input
            type="checkbox"
            className="utrecht-form-field__input utrecht-checkbox"
            id={id}
            value={value}
            checked={checked || null}
            name={name}
          />
          <label
            className="utrecht-form-field__label utrecht-form-field__label--checkbox utrecht-form-label utrecht-form-label--checkbox"
            htmlFor={id}
          >
            {label}
          </label>
        </div>
      ))}
  </div>
);

export default FormFieldCheckboxGroup;
