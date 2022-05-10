/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const FormFieldDescription = ({ id = null, innerHTML = '', status = null, distanced = false }) =>
  `<div${id ? ` id="${id}"` : ''} class="${clsx(
    'utrecht-form-field-description',
    distanced && 'utrecht-form-field-description--distanced',
    status === 'invalid' && 'utrecht-form-field-description--invalid',
    status === 'valid' && 'utrecht-form-field-description--valid',
    status === 'warning' && 'utrecht-form-field-description--warning',
  )}">${innerHTML}</div>`;
