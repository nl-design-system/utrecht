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
    control: 'text',
  },
  legend: {
    description: 'Set the content of the legend',
    control: 'text',
  },
};

export const defaultArgs = {
  innerHTML: '',
  legend: '',
};

export const exampleArgs = {
  innerHTML: '<p>Fieldset body</p>',
  legend: 'Fieldset legend',
};

export const FormFieldset = ({ innerHTML = defaultArgs.innerHTML, legend = defaultArgs.legend }) => (
  <div className="utrecht-form-fieldset">
    {legend && <div className="utrecht-form-fieldset__legend utrecht-form-fieldset__legend--distanced">{legend}</div>}
    {parse(innerHTML)}
  </div>
);

export default FormFieldset;
