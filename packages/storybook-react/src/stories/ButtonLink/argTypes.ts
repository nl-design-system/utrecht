export const argTypes = {
  appearance: {
    description: 'Appearance',
    control: { type: 'select' },
    options: ['', 'button', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
  },
  external: {
    type: 'boolean',
    table: {
      defaultValue: { summary: false },
    },
  },
  href: {
    type: 'string',
    table: {
      defaultValue: { summary: '' },
    },
  },
};
