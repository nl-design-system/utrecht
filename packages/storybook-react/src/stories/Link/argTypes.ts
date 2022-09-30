export const argTypes = {
  external: {
    name: 'external',
    type: { name: 'boolean', required: false },
    table: {
      category: 'API',
      defaultValue: { summary: false },
    },
  },
  href: {
    name: 'href',
    type: { name: 'string', required: false },
    table: {
      category: 'HTML attribute',
      defaultValue: { summary: '' },
    },
  },
  'aria-current': {
    name: 'aria-current',
    type: { name: 'string', required: false },
    options: [undefined, 'page', 'step', 'location', 'date', 'time', 'true', 'false'],
    table: {
      category: 'HTML attribute',
      defaultValue: { summary: 'false' },
    },
  },
  hrefLang: {
    name: 'hrefLang',
    type: { name: 'string', required: false },
    table: {
      category: 'HTML attribute',
      defaultValue: { summary: '' },
    },
  },
  lang: {
    name: 'lang',
    type: { name: 'string', required: false },
    table: {
      category: 'HTML attribute',
      defaultValue: { summary: '' },
    },
  },
  placeholder: {
    name: 'placeholder',
    type: { name: 'boolean', required: false },
    table: {
      category: 'API',
      defaultValue: { summary: false },
    },
  },
  rel: {
    name: 'rel',
    type: { name: 'string', required: false },
    table: {
      category: 'HTML attribute',
      defaultValue: { summary: '' },
    },
  },
  target: {
    name: 'target',
    type: { name: 'string', required: false },
    table: {
      category: 'HTML attribute',
      defaultValue: { summary: '' },
    },
  },
};
