/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { clsx } from 'clsx';
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
    type: {
      name: 'enum',
      required: false,
    },
    description: 'Status',
    options: ['', 'invalid', 'valid'],
  },
};

export const defaultArgs = {
  id: null,
  innerHTML: '',
  status: '',
  distanced: false,
};

export const exampleArgs = {};

export const FormFieldDescription = ({
  id = defaultArgs.id,
  innerHTML = defaultArgs.innerHTML,
  status = defaultArgs.status,
  distanced = defaultArgs.distanced,
  className,
  children,
}) => (
  <div
    id={id}
    className={clsx(
      'utrecht-form-field-description',
      distanced && 'utrecht-form-field-description--distanced',
      status === 'invalid' && 'utrecht-form-field-description--invalid',
      status === 'valid' && 'utrecht-form-field-description--valid',
      status === 'warning' && 'utrecht-form-field-description--warning',
      className,
    )}
  >
    {children}
    {parse(innerHTML)}
  </div>
);

export default FormFieldDescription;
