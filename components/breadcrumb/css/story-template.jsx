/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';
import locale from '../i18n/nl.json';
import './index.scss';

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
  label: '',
  items: [],
  microdata: false,
  variant: '',
};

export const exampleArgs = {
  label: locale.label,
  items: [
    { href: 'https://example.com/', title: 'Home', rel: 'home', focus: true },
    { href: 'https://example.com/a/', title: 'Wonen en leven' },
    { href: 'https://example.com/a/b/', title: 'Afval', rel: 'up' },
  ],
  variant: 'arrows',
};

export const Breadcrumb = ({
  label = defaultArgs.label,
  items = defaultArgs.items,
  microdata = defaultArgs.microdata,
  variant = defaultArgs.variant,
}) => (
  <nav
    className={clsx('utrecht-breadcrumb', variant === 'arrows' && 'utrecht-breadcrumb--arrows')}
    aria-labelledby="breadcrumb-heading"
  >
    <h2 className="utrecht-breadcrumb__heading" id="breadcrumb-heading" aria-hidden="true">
      {label}
    </h2>
    <ol
      className="utrecht-breadcrumb__list"
      itemScope={microdata || null}
      itemType={(microdata && 'https://schema.org/BreadcrumbList') || null}
    >
      {items.map(({ href, title, rel, current, focus }, index) => (
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
            rel={rel}
            aria-current={current && 'location'}
            itemProp={microdata ? 'item' : null}
          >
            <span className="utrecht-breadcrumb__text" itemProp={microdata ? 'name' : null}>
              {title}
            </span>
            {microdata && <meta itemProp="position" content={String(index + 1)} />}
          </a>
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumb;
