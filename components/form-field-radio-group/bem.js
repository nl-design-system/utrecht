/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

export const FormFieldRadioGroup = ({ label, name, options }) =>
  `<div class="utrecht-form-field-radio-group utrecht-form-field-radio-group--distanced" role="radiogroup" aria-labelledby="id-9e42cd3e">
  <div class="utrecht-form-field-radio-group__label utrecht-form-label" id="id-9e42cd3e">${label}</div>
  ${options
    .map(
      ({ checked, label, value }, index) => `
  <div class="utrecht-form-field-radio utrecht-form-field-radio--distanced">
    <input type="radio" name="${name}" value="${value}" class="utrecht-form-field-radio__input utrecht-radio-button" id="option-${index}"${
        checked ? ' checked' : ''
      }>
    <label class="utrecht-form-field-radio__label utrecht-form-label utrecht-form-label--radio" for="option-${index}">${label}</label>
  </div>`,
    )
    .join('\n')}
</div>`;
