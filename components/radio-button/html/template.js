/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

export const defaultArgs = {
  checked: false,
  disabled: false,
  invalid: false,
  required: false,
  value: '',
};

export const RadioButton = ({ checked = false, disabled = false, invalid = false, required = false, value = '' }) =>
  `<div class="utrecht-html">
  <input type="radio"${checked ? ' checked' : ''}${invalid ? ' aria-invalid="true"' : ''}${
    disabled ? ' disabled' : ''
  }${required ? ' required' : ''}${value ? ` value="${value}"` : ''}>
</div>`;
