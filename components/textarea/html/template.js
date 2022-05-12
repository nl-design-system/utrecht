export const defaultArgs = {
  disabled: false,
  invalid: false,
  placeholder: '',
  readOnly: false,
  required: false,
  textContent: '',
};

export const Textarea = ({
  disabled = false,
  invalid = false,
  placeholder = '',
  readOnly = false,
  required = false,
  textContent = '',
}) =>
  `<textarea class="utrecht-textarea"${disabled ? ' disabled' : ''}${invalid ? ' aria-invalid="true"' : ''}${
    placeholder ? ` placeholder="${placeholder}"` : ''
  }${readOnly ? ' readonly' : ''}${required ? ' required' : ''}>${textContent}</textarea>`;
