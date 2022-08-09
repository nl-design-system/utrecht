export const argTypes = {
  checked: {
    name: 'checked',
    type: { name: 'boolean', required: false },
    table: {
      defaultValue: { summary: false },
    },
  },
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
  modelValue: {
    name: 'modelValue',
    type: { name: 'string', required: false },
    table: {
      defaultValue: { summary: '' },
    },
  },
  value: {
    name: 'value',
    type: { name: 'string', required: false },
    table: {
      defaultValue: { summary: '' },
    },
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

export const checkboxWithFieldsetAndLegendData = [
  { id: 1, label: 'Gratis trouwen', name: 'gratis-trouwen' },
  { id: 2, label: 'Flits/balie-huwelijk', name: 'flits-bali-huwelijk' },
  { id: 3, label: 'Eenvoudig trouwen', name: 'eenvoudig-trouwen' },
  { id: 4, label: 'Uitgebreid trouwen', name: 'uitgebreid-trouwen' },
];
