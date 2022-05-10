export const FormFieldTextarea = ({
  disabled = false,
  invalid = false,
  label = '',
  placeholder = '',
  readOnly = false,
  required = false,
  value = '',
}) =>
  `<utrecht-form-field-textarea${disabled ? ' disabled="true"' : ''}${invalid ? ' invalid="true"' : ''}${
    placeholder ? ` placeholder="${placeholder}"` : ''
  }${readOnly ? ' readonly="true"' : ''}${required ? ' required="true"' : ''}${
    value ? ` value="${value}"` : ''
  }>${label}</utrecht-form-field-textarea>`;
