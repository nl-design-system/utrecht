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
  items: [
    { href: 'https://example.com/', title: 'Home', focus: true },
    { href: 'https://example.com/a/', title: 'Wonen en leven' },
    { href: 'https://example.com/a/b/', title: 'Afval' },
    { href: 'https://example.com/a/b/c/', title: "Kliko's", current: true },
  ],
  microdata: true,
  variant: 'arrows',
};

export const Breadcrumb = ({ items, microdata, variant }) => (
  <nav className={clsx('utrecht-breadcrumb', variant === 'arrows' && 'utrecht-breadcrumb--arrows')}>
    <ol
      className="utrecht-breadcrumb__list"
      itemscope={microdata}
      itemType={microdata && 'https://schema.org/BreadcrumbList'}
    >
      {items.map(({ href, title, current, focus }) => (
        <li
          key={href}
          className="utrecht-breadcrumb__item"
          itemscope={microdata}
          itemtype={microdata && ' itemscope itemtype="https://schema.org/ListItem" itemprop="itemListElement"'}
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
            ariaCurrent={current && 'location'}
            itemprop={microdata && 'item'}
          >
            <span class="utrecht-breadcrumb__text" itemprop={microdata && 'name'}>
              {title}
            </span>
            {microdata && <meta itemprop="position" content="${index + 1}" />}
          </a>
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumb;
