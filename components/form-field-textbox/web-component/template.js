export const FormFieldTextbox = ({
  autoComplete = '',
  disabled = false,
  invalid = false,
  label = '',
  min = '',
  max = '',
  pattern = '',
  placeholder = '',
  readOnly = false,
  required = false,
  type = '',
  value = '',
}) =>
  `<utrecht-form-field-textbox${autoComplete ? ` autocomplete="${autoComplete}"` : ''}${
    disabled ? ' disabled="true"' : ''
  }${invalid ? ' invalid="true"' : ''}${min !== '' ? ` min="${min}"` : ''}${max !== '' ? ` max="${max}"` : ''}${
    pattern ? ` pattern="${pattern}"` : ''
  }${placeholder ? ` placeholder="${placeholder}"` : ''}${readOnly ? ' readonly="true"' : ''}${
    required ? ' required="true"' : ''
  }${value ? ` value="${value}"` : ''}${type ? ` type="${type}"` : ''}>${label}</utrecht-form-field-textbox>`;
