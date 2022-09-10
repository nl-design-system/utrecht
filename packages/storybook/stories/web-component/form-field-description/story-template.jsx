/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import parse from 'html-react-parser';
import React from 'react';

export const argTypes = {
  id: {
    description: 'Unique identifier to associate it with a form input',
    control: 'text',
  },
  innerHTML: {
    description: 'Set the content of the description',
    control: 'text',
  },
  status: {
    control: { type: 'select' },
    description: 'Status',
    options: ['', 'invalid', 'valid'],
  },
};

export const defaultArgs = {
  id: null,
  innerHTML: '',
  status: '',
};

export const exampleArgs = {
  id: '0427f759-009c-43ad-8e1c-3d7b9982a133',
  innerHTML: '<p>Your password must contain at least 16 characters.</p>',
};

export const FormFieldDescription = ({
  id = defaultArgs.id,
  innerHTML = defaultArgs.innerHTML,
  status = defaultArgs.status,
}) => (
  <utrecht-form-field-description id={id} status={status}>
    {parse(innerHTML)}
  </utrecht-form-field-description>
);

export default FormFieldDescription;
