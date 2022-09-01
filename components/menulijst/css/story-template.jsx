/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  items: {
    description: 'Items of the menu',
    type: {
      name: 'array',
      required: true,
    },
  },
};

export const decorators = [
  (story) => <div style={{ 'max-inline-size': 'var(--utrecht-sidebar-max-inline-size, 20rem)' }}>{story()}</div>,
];

export const defaultArgs = {
  items: [],
};

export const exampleArgs = {
  items: [
    { href: 'https://example.com/1', textContent: 'Menu item label #1', active: true },
    { href: 'https://example.com/2', textContent: 'Menu item label #2' },
    { href: 'https://example.com/3', textContent: 'Menu item label #3' },
  ],
};

export const Menulijst = ({ items = defaultArgs.items }) => (
  <ul className="utrecht-menulijst">
    {items.map(({ active, href, textContent }) => (
      <li className={clsx('utrecht-menulijst__item', active && 'utrecht-menulijst__item--active')}>
        <a className="utrecht-menulijst__link" href={href}>
          {textContent}
        </a>
      </li>
    ))}
  </ul>
);

export default Menulijst;
