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
  microdata: {
    description: 'Microdata',
    control: 'boolean',
  },
  variant: {
    description: 'Variant',
    control: { type: 'select' },
    options: ['', 'arrows'],
  },
};

export const defaultArgs = {
  items: [],
  microdata: false,
  variant: '',
};

export const exampleArgs = {
  items: [
    { href: 'https://example.com/', title: 'Home', focus: true },
    { href: 'https://example.com/a/', title: 'Wonen en leven' },
    { href: 'https://example.com/a/b/', title: 'Afval' },
    { href: 'https://example.com/a/b/c/', title: "Kliko's", current: true },
  ],
  variant: 'arrows',
};

export const Breadcrumb = ({
  items = defaultArgs.items,
  microdata = defaultArgs.microdata,
  variant = defaultArgs.variant,
}) => (
  <nav className={clsx('utrecht-breadcrumb', variant === 'arrows' && 'utrecht-breadcrumb--arrows')}>
    <ol
      className="utrecht-breadcrumb__list"
      itemScope={microdata || null}
      itemType={(microdata && 'https://schema.org/BreadcrumbList') || null}
    >
      {items.map(({ href, title, current, focus }) => (
        <li
          key={href}
          className="utrecht-breadcrumb__item"
          itemScope={microdata || null}
          itemType={microdata ? 'https://schema.org/ListItem' : null}
          itemProp={microdata ? 'itemListElement' : null}
        >
          <a
            className={clsx(
              'utrecht-breadcrumb__link',
              focus && 'utrecht-breadcrumb__link--focus',
              'utrecht-link',
              current && 'utrecht-link--current',
              focus && 'utrecht-link--focus',
            )}
            href={href}
            aria-current={current && 'location'}
            itemProp={microdata ? 'item' : null}
          >
            <span className="utrecht-breadcrumb__text" itemProp={microdata ? 'name' : null}>
              {title}
            </span>
            {microdata && <meta itemProp="position" content="${index + 1}" />}
          </a>
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumb;
