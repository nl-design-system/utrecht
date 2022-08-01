export const argTypes = {
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
  readonly: {
    name: 'readonly',
    type: { name: 'boolean', required: false },
    defaultValue: false,
  },
  modelValue: {
    name: 'modelValue',
    type: { name: 'string', required: false },
    defaultValue: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  rows: {
    name: 'rows',
    type: { name: 'number', required: false },
  },
  cols: {
    name: 'cols',
    type: { name: 'number', required: false },
  },
};
