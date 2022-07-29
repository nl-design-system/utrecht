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
  modelValue: {
    name: 'modelValue',
    defaultValue: '',
  },
  readonly: {
    name: 'readonly',
    type: { name: 'boolean', required: false },
    defaultValue: false,
  },
};

export const options = [
  { value: '', label: 'Select an option', disabled: true },
  { value: 1, label: 'Option #1' },
  { value: 2, label: 'Option #2' },
  { value: 3, label: 'Option #3' },
  { value: 4, label: 'Option #4' },
];
