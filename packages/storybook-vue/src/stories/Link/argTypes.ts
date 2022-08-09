export const argTypes = {
  external: {
    name: 'external',
    type: { name: 'boolean', required: false },
    table: {
      defaultValue: { summary: false },
    },
  },
  href: {
    name: 'href',
    type: { name: 'string', required: false },
    table: {
      defaultValue: { summary: false },
    },
  },
  target: {
    type: { name: 'string', required: false },
  },
};

export const componentArgs = {
  external: false,
  href: 'https://example.com',
};
