export const argTypes = {
  checked: {
    name: 'checked',
    type: { name: 'boolean', required: false },
    defaultValue: false,
  },
  disabled: {
    name: 'disabled',
    type: { name: 'boolean', required: false },
    defaultValue: false,
  },
  invalid: {
    name: 'invalid',
    type: { name: 'boolean', required: false },
    defaultValue: false,
  },
  required: {
    name: 'required',
    type: { name: 'boolean', required: false },
    defaultValue: false,
  },
  modelValue: {
    name: 'modelValue',
    type: { name: 'string', required: false },
    defaultValue: '',
  },
  value: {
    name: 'value',
    type: { name: 'string', required: false },
    defaultValue: '',
  },
};

export const componentArgs = {
  value: '',
  modelValue: '',
  checked: false,
  required: false,
  disabled: false,
  invalid: false,
};
