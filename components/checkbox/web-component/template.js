export const defaultArgs = {
  checked: false,
  disabled: false,
  value: '',
};

export const Checkbox = ({ checked = false, disabled = false, value = '' } = defaultArgs) =>
  `<utrecht-checkbox${checked ? ' checked="true"' : ''}${disabled ? ' disabled="true"' : ''} value="${value}" />`;
