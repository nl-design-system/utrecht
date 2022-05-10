export const defaultArgs = {
  checked: false,
  disabled: false,
  invalid: false,
  required: false,
  value: '',
};

export const Checkbox = ({ checked = false, disabled = false, invalid = false, required = false, value = '' }) =>
  `<div class="utrecht-html">
  <input type="checkbox"${checked ? ' checked' : ''}${invalid ? ' aria-invalid="true"' : ''}${
    disabled ? ' disabled' : ''
  }${required ? ' required' : ''}${value ? ` value="${value}"` : ''}>
</div>`;
