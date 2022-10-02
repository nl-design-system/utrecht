/*
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import parse from 'html-react-parser';
import React from 'react';

export const argTypes = {
  innerHTML: {
    description: 'Set the content of the fieldset',
    type: {
      name: 'string',
      required: true,
    },
  },
  disabled: {
    description: 'Disabled',
    control: 'boolean',
  },
  legend: {
    description: 'Set the content of the legend',
    control: 'text',
  },
};

export const defaultArgs = {
  disabled: false,
  innerHTML: '',
  legend: '',
};

export const exampleArgs = {
  innerHTML: '<p>Fieldset body</p>',
  legend: 'Fieldset legend',
};

export const FormFieldset = ({
  disabled = defaultArgs.disabled,
  innerHTML = defaultArgs.innerHTML,
  legend = defaultArgs.legend,
}) => (
  <div className="utrecht-html">
    <fieldset disabled={disabled}>
      {legend && <legend>{legend}</legend>}
      {parse(innerHTML)}
    </fieldset>
  </div>
);

export default FormFieldset;
