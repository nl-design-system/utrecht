export const defaultArgs = {
  autoComplete: null,
  disabled: false,
  invalid: false,
  min: '',
  max: '',
  pattern: '',
  placeholder: '',
  readOnly: false,
  required: false,
  type: 'text',
  value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
}

export const Textbox = ({
  autoComplete,
  disabled,
  invalid,
  min,
  max,
  pattern,
  placeholder,
  readOnly,
  required,
  type,
  value = '',
}) =>
  `<div class="utrecht-html">
  <input${type ? ` type="${type}"` : ''}${invalid ? ' aria-invalid="true"' : ''}${disabled ? ' disabled' : ''}${
    min !== '' ? ` min="${min}"` : ''
  }${max !== '' ? ` max="${max}"` : ''}${pattern ? ` pattern="${pattern}"` : ''}${
    placeholder ? ` placeholder="${placeholder}"` : ''
  }${required ? ' required' : ''}${readOnly ? ' readonly' : ''} value="${value}"${
    autoComplete ? ` autocomplete="${autoComplete}"` : ''
  }>
</div>`
