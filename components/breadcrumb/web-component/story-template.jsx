/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';

export const argTypes = {
  items: {
    description: 'Menu items',
    type: {
      name: 'array',
      required: true,
    },
  },
  variant: {
    description: 'Variant',
    type: {
      name: 'enum',
    },
    options: ['', 'arrows'],
  },
};

export const defaultArgs = {
  items: [],
  variant: '',
};

export const exampleArgs = {
  items: [
    { href: 'https://example.com/', title: 'Home' },
    { href: 'https://example.com/a/', title: 'Wonen en leven' },
    { href: 'https://example.com/a/b/', title: 'Afval' },
    { href: 'https://example.com/a/b/c/', title: "Kliko's", current: true },
  ],
  variant: 'arrows',
};

export const Breadcrumb = ({ items = defaultArgs.items, variant = defaultArgs.variant }) => {
  return <utrecht-breadcrumb json={JSON.stringify(items)} variant={variant}></utrecht-breadcrumb>;
};

export default Breadcrumb;
