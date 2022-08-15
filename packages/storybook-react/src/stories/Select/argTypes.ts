export const argTypes = {
  disabled: {
    name: 'disabled',
    type: { name: 'boolean', required: false },
    table: {
      category: 'HTML attribute',
      defaultValue: { summary: false },
    },
  },
  invalid: {
    name: 'invalid',
    type: { name: 'boolean', required: false },
    table: {
      defaultValue: { summary: false },
    },
  },
  required: {
    name: 'required',
    type: { name: 'boolean', required: false },
    table: {
      category: 'HTML attribute',
      defaultValue: { summary: false },
    },
  },
  noscript: {
    name: 'noscript',
    type: { name: 'boolean', required: false },
    table: {
      category: 'HTML attribute',
      defaultValue: { summary: false },
    },
  },
  value: {
    name: 'value',
    type: { name: 'string' },
    table: {
      category: 'HTML attribute',
      defaultValue: { summary: '' },
    },
  },
};

export const options = [
  { value: '', label: 'Select an option', disabled: true },
  { value: '1', label: 'Option #1' },
  { value: '2', label: 'Option #2' },
  { value: '3', label: 'Option #3' },
  { value: '4', label: 'Option #4' },
];
