export const argTypes = {
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
  value: {
    name: 'value',
    type: { name: 'string', required: false },
  },
};

export const data = [
  { id: '1', label: 'Gratis trouwen', name: 'gratis-trouwen' },
  { id: '2', label: 'Flits/balie-huwelijk', name: 'flits-balie-huwelijk' },
  { id: '3', label: 'Eenvoudig trouwen', name: 'eenvoudig-trouwen' },
  { id: '4', label: 'Uitgebreid trouwen', name: 'uitgebreid-trouwen' },
];
