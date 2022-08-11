export const argTypes = {
  reversed: {
    type: { name: 'boolean', required: false },
    table: {
      category: 'HTML attribute',
      defaultValue: { summary: false },
    },
  },
  start: {
    type: { name: 'number', required: false },
    table: {
      category: 'HTML attribute',
      defaultValue: { summary: 1 },
    },
  },
};

export const itemArgTypes = {
  value: {
    type: { name: 'number', required: false },
    table: {
      category: 'HTML attribute',
      defaultValue: { summary: 0 },
    },
  },
};
