export const defaultArgs = {
  checked: false,
  disabled: false,
  indeterminate: false,
  invalid: false,
  required: false,
  value: '',
};

export const CustomCheckbox = ({
  checked = false,
  disabled = false,
  indeterminate = false,
  invalid = false,
  required = false,
  value = '',
}) =>
  `<utrecht-custom-checkbox${checked ? ' checked="true"' : ''}${disabled ? ' disabled="true"' : ''}${
    indeterminate ? ' indeterminate="true"' : ''
  }${invalid ? ' invalid="true"' : ''}${required ? ' required="true"' : ''}${
    value ? ` value="${value}"` : ''
  }></utrecht-custom-checkbox>`;
