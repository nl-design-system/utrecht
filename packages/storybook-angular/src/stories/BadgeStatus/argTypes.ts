export const argTypes = {
  badgeStatusContent: {
    name: 'badgeStatusContent',
    type: { name: 'string', require: false },
    table: {
      category: 'DEMO Property',
      defaultValue: { summary: '' },
    },
  },
  status: {
    name: 'status',
    type: { name: 'select', required: false },
    options: ['neutral', 'danger', 'safe', 'invalid', 'valid', 'error', 'warning', 'success', 'inactive', 'active'],
    table: {
      category: 'API',
      defaultValue: { summary: '' },
    },
  },
};
