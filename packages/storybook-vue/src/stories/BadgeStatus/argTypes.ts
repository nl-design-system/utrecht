export const argTypes = {
  textContent: {
    type: 'text',
    table: {
      defaultValue: { summary: '' },
    },
  },
  status: {
    type: 'select',
    options: ['neutral', 'danger', 'safe', 'invalid', 'valid', 'error', 'warning', 'success', 'inactive', 'active'],
    table: {
      defaultValue: { summary: '' },
    },
  },
};
