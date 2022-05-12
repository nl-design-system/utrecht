export const Textbox = ({
  autoComplete = '',
  disabled = false,
  invalid = false,
  min = '',
  max = '',
  pattern = '',
  placeholder = '',
  readOnly = false,
  required = false,
  type = '',
  value = '',
}) =>
  `<utrecht-textbox${autoComplete ? ` autocomplete="${autoComplete}"` : ''}${disabled ? ' disabled="true"' : ''}${
    invalid ? ' invalid="true"' : ''
  }${min !== '' ? ` min="${min}"` : ''}${max !== '' ? ` max="${max}"` : ''}${pattern ? ` pattern="${pattern}"` : ''}${
    placeholder ? ` placeholder="${placeholder}"` : ''
  }${readOnly ? ' readonly="true"' : ''}${required ? ' required="true"' : ''}${value ? ` value="${value}"` : ''}${
    type ? ` type="${type}"` : ''
  }></utrecht-textbox>`;
