export const argTypes = {
  disabled: {
    name: 'disabled',
    type: { name: 'boolean', required: false },
    table: {
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
      defaultValue: { summary: false },
    },
  },
  readonly: {
    name: 'readonly',
    type: { name: 'boolean', required: false },
    table: {
      defaultValue: { summary: false },
    },
  },
  modelValue: {
    name: 'modelValue',
    type: { name: 'string', required: false },
    table: {
      defaultValue: { summary: 'The Quick Brown Fox Jumps Over The Lazy Dog' },
    },
  },
  type: {
    name: 'type',
    type: { name: 'select', required: false },
    options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    table: {
      defaultValue: { summary: 'text' },
    },
  },
};
