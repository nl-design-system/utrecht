export const argTypes = {
  disabled: {
    description: 'Disabled',
    control: 'boolean',
    table: {
      category: 'Component',
      defaultValue: { summary: false },
    },
  },
  invalid: {
    name: 'invalid',
    type: { name: 'boolean', required: false },
    table: {
      category: 'Component',
      defaultValue: { summary: false },
    },
  },
  type: {
    name: 'type',
    control: { type: 'select' },
    options: ['', 'checkbox', 'radio', 'text'],
    table: {
      category: 'Component',
      defaultValue: { summary: false },
    },
  },
};
