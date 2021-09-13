/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const FormFieldDescription = ({ id = null, innerHTML = '', status = null }) =>
  `<div id="${id}" class="${clsx(
    'utrecht-form-field-description',
    'utrecht-form-field-description--distanced',
    status === 'valid' && 'utrecht-form-field-description--valid',
    status === 'invalid' && 'utrecht-form-field-description--invalid',
  )}">${innerHTML}</div>`;
