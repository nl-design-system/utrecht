export const argTypes = {
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
  checked: {
    description: 'Checked',
    control: 'boolean',
    table: {
      category: 'Story',
      defaultValue: { summary: false },
    },
  },
  disabled: {
    description: 'Disabled',
    control: 'boolean',
    table: {
      category: 'Component',
      defaultValue: { summary: false },
    },
  },
  required: {
    description: 'Required',
    control: 'boolean',
    table: {
      category: 'Story',
      defaultValue: { summary: false },
    },
  },
  id: {
    description: 'ID',
    type: { name: 'text', required: true },
    table: {
      category: 'Story',
      defaultValue: { summary: '' },
    },
  },
  name: {
    description: 'Name',
    control: 'text',
    table: {
      category: 'Story',
      defaultValue: { summary: '' },
    },
  },
  value: {
    description: 'Value',
    control: 'text',
    table: {
      category: 'Story',
      defaultValue: { summary: '' },
    },
  },
  label: {
    name: 'label',
    type: { name: 'text', required: true },
    table: {
      defaultValue: { summary: false },
      category: 'Story',
    },
  },
  invalidDescription: {
    name: 'invalidDescription',
    description: 'Description for invalid input',
    type: { name: 'text', required: false },
    table: {
      defaultValue: { summary: false },
      category: 'Story',
    },
  },
  description: {
    description: 'Description',
    type: { name: 'text', required: false },
    table: {
      category: 'Story',
      defaultValue: { summary: '' },
    },
  },
};
