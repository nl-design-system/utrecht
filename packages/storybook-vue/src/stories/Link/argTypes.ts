export const argTypes = {
  external: {
    name: 'external',
    type: { name: 'boolean', required: false },
    defaultValue: false,
  },
  href: {
    name: 'href',
    type: { name: 'string', required: false },
    defaultValue: false,
  },
  target: {
    type: { name: 'string', required: false },
  },
};

export const componentArgs = {
  external: false,
  href: 'https://example.com',
};
