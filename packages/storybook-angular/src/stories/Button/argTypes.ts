export const argTypes = {
  appearance: {
    name: 'appearance',
    type: { name: 'select', required: false },
    options: ['primary-action-button', 'secondary-action-button', 'subtle-button'],
    table: {
      category: 'API',
      defaultValue: { summary: false },
    },
  },
  type: {
    name: 'type',
    type: { name: 'select', required: false },
    options: ['button', 'submit', 'reset'],
    table: {
      category: 'API',
      defaultValue: { summary: false },
    },
  },
  disabled: {
    name: 'disabled',
    type: { name: 'boolean', required: false },
    table: {
      category: 'HTML',
      defaultValue: { summary: false },
    },
  },
  busy: {
    name: 'busy',
    type: { name: 'boolean', required: false },
    table: {
      category: 'API',
      defaultValue: { summary: false },
    },
  },
};
