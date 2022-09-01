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
  id: {
    description: 'Set the id used to link the input and label',
    control: 'text',
  },
};

export const defaultArgs = {
  label: '',
  id: 'id-ce0239e2',
};

export const exampleArgs = {
  label: 'I agree',
};

export const FormFieldRadio = ({ label = defaultArgs.label, id = defaultArgs.id }) => (
  <div className="utrecht-form-field-radio utrecht-form-field-radio--distanced">
    <input type="radio" className="utrecht-form-field-radio__input utrecht-radio-button" id={id} />
    <label className="utrecht-form-field-radio__label utrecht-form-label utrecht-form-label--radio" htmlFor={id}>
      {label}
    </label>
  </div>
);

export default FormFieldRadio;
