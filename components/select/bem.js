/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const defaultArgs = {
  disabled: false,
  focus: false,
  invalid: false,
  options: [],
  required: false,
};

export const Select = ({ disabled = false, focus = false, invalid = false, options = [], required = false }) =>
  `<select${invalid ? ' aria-invalid="true"' : ''}${disabled ? ' disabled' : ''}${
    required ? ' required' : ''
  } class="${clsx('utrecht-select', {
    'utrecht-select--disabled': disabled,
    'utrecht-select--focus': focus,
    'utrecht-select--invalid': invalid,
    'utrecht-select--required': required,
  })}">
  ${options
    .map(
      ({ label, selected, value }) =>
        `<option${selected ? ' selected' : ''}${value ? ` value="${value}"` : ''}>${label}</option>`,
    )
    .join('\n  ')}
</select>`;

export const exampleOptions = [
  { value: '1', label: 'Option #1' },
  { value: '2', label: 'Option #2', selected: true },
  { value: '3', label: 'Option #3' },
];
