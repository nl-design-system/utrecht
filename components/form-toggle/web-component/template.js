export const defaultArgs = {
  checked: false,
  disabled: false,
};

export const FormToggle = ({ checked = false, disabled = false }) =>
  `<utrecht-form-toggle${checked ? ' checked="true"' : ''}${disabled ? ' disabled="true"' : ''}></utrecht-form-toggle>`;
