export const argTypes = {
  appearance: {
    description: 'Appearance',
    control: { type: 'select' },
    options: ['', 'button', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
    table: {
      category: 'API',
      defaultValue: { summary: '' },
    },
  },
  external: {
    type: 'boolean',
    table: {
      category: 'API',
      defaultValue: { summary: false },
    },
  },
  placeholder: {
    name: 'placeholder',
    type: 'boolean',
    table: {
      category: 'API',
      defaultValue: { summary: false },
    },
  },
  href: {
    type: 'string',
    table: {
      category: 'API',
      defaultValue: { summary: '', required: true },
    },
  },
};
