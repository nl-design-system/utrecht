export const argTypes = {
  checked: {
    name: 'checked',
    type: { name: 'boolean', required: false },
    table: {
      defaultValue: { summary: false },
      category: 'HTML attribute',
    },
  },
  disabled: {
    name: 'disabled',
    type: { name: 'boolean', required: false },
    table: {
      defaultValue: { summary: false },
      category: 'HTML attribute',
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
      category: 'HTML attribute',
    },
  },
  value: {
    name: 'value',
    type: { name: 'string', required: false },
    table: {
      category: 'HTML attribute',
    },
  },
};

export const data = [
  { id: '1', label: 'Publiekszaken', value: 'publiekszaken' },
  { id: '2', label: 'Wijkservicecentrum Vleuten - De Meern', value: 'wijkservicecentrum-vleuten-de-meern' },
];
