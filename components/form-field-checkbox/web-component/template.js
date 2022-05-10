export const defaultArgs = {
  checked: false,
  disabled: false,
  invalid: false,
  label: '',
  required: false,
};

export const FormFieldCheckbox = ({
  checked = false,
  disabled = false,
  invalid = false,
  label = '',
  required = false,
}) =>
  `<utrecht-form-field-checkbox${checked ? ' checked="true"' : ''}${disabled ? ' disabled="true"' : ''}${
    invalid ? ' invalid="true"' : ''
  }${required ? ' required="true"' : ''}>${label}</utrecht-form-field-checkbox>`;
