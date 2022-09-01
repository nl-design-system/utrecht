/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  items: {
    description: 'Menu items',
    type: {
      name: 'array',
      required: true,
    },
  },
};

export const defaultArgs = { items: [] };

export const exampleArgs = {
  items: [
    { href: 'https://example.com/', title: 'Wonen en leven' },
    { href: 'https://example.com/', title: 'Werk en inkomen' },
    { href: 'https://example.com/', title: 'Ondernemen' },
    { href: 'https://example.com/', title: 'Bestuur en organisatie' },
  ],
};

export const Topnav = ({ items = defaultArgs.items }) => (
  <div className="utrecht-navhtml">
    <nav className="topnav">
      <ul className="utrecht-topnav__list">
        {items.map(({ href, title, current, focus, focusVisible }) => (
          <li className="utrecht-topnav__item">
            <a
              className={clsx(
                'utrecht-topnav__link',
                current && 'utrecht-topnav__link--current',
                focus && 'utrecht-topnav__link--focus',
                focusVisible && 'utrecht-topnav__link--focus-visible',
              )}
              href={href}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default Topnav;
