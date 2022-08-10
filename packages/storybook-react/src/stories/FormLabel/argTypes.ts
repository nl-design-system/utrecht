export const argTypes = {
  type: {
    type: 'select',
    options: [undefined, 'checkbox', 'radio'],
  },
  checked: {
    name: 'checked',
    type: { name: 'boolean', required: false },
    table: { defaultValue: { summary: false } },
  },
  disabled: {
    name: 'disabled',
    type: { name: 'boolean', required: false },
    table: { defaultValue: { summary: false } },
  },
};
