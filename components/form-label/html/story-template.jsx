/*
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';

export const argTypes = {
  textContent: {
    description: 'Set the content of the label',
    control: 'text',
  },
  type: {
    description: 'Set the type of the form control',
    options: ['hidden', 'checkbox', 'radio'],
    control: { type: 'radio' },
  },
};

export const defaultArgs = {
  textContent: '',
  type: null,
  id: 'abc-1232e',
};

export const exampleArgs = {
  textContent: 'Username',
  type: 'hidden',
};

export const FormLabel = ({ textContent = defaultArgs.textContent, type = defaultArgs.type, id = defaultArgs.id }) => (
  <div className="utrecht-html">
    <input type={type} id={id} />
    <label htmlFor={id}>{textContent}</label>
  </div>
);

export default FormLabel;
