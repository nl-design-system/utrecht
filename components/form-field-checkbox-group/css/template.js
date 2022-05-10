/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

export const FormFieldCheckboxGroup = ({
  label,
  options,
  groupLabelId = 'group-label',
}) => `<div class="utrecht-form-field-checkbox-group utrecht-form-field-checkbox-group--distanced" role="group" aria-labelledby="${groupLabelId}">
  <div class="utrecht-form-field-checkbox-group__label utrecht-form-label" id="${groupLabelId}">${label}</div>
  ${options
    .map((option, index) => ({
      ...option,
      id: options.id || `option-${index}`,
    }))
    .map(
      ({
        id,
        label,
        name,
        value,
        checked,
      }) => `<div class="utrecht-form-field utrecht-form-field--checkbox utrecht-form-field--distanced">
    <input type="checkbox" class="utrecht-form-field__input utrecht-checkbox" id="${id}" value="${value}"${
        checked ? ' checked' : ''
      } name="${name}">
    <label class="utrecht-form-field__label utrecht-form-field__label--checkbox utrecht-form-label utrecht-form-label--checkbox" for="${id}">${label}</label>
  </div>`,
    )
    .join('\n')}
  </div>`;
