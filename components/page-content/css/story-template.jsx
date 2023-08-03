/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import clsx from 'clsx';
import parse from 'html-react-parser';
import React from 'react';
import locale from '../../breadcrumb/i18n/nl.json';

export const argTypes = {
  asideHTML: {
    description: 'Aside HTML content',
    control: 'text',
  },
  navHTML: {
    description: 'Navigation HTML content',
    control: 'text',
  },
  innerHTML: {
    description: 'HTML content',
    control: 'text',
  },
};

export const breadcrumbArgs = {
  label: locale.label,
  items: [
    { href: 'https://example.com/', title: 'Home', rel: 'home', focus: true },
    { href: 'https://example.com/a/', title: 'Wonen en leven' },
    { href: 'https://example.com/a/b/', title: 'Afval', rel: 'up' },
  ],
  variant: 'arrows',
};

export const defaultArgs = {
  asideHTML: '',
  innerHTML: '',
  navHTML: '',
};

export const exampleArgs = {
  innerHTML: `<h1>The Quick Brown Fox Jumps Over The Lazy Dog</h1>`,
};

export const PageContent = ({
  asideHTML = defaultArgs.asideHTML,
  innerHTML = defaultArgs.innerHTML,
  navHTML = defaultArgs.navHTML,
}) => (
  <div className="utrecht-page-content">
    {navHTML && <nav className="utrecht-page-content__nav">{parse(navHTML)}</nav>}
    {innerHTML && <main className="utrecht-page-content__main">{parse(innerHTML)}</main>}
    {asideHTML && <aside className="utrecht-page-content__aside">{parse(asideHTML)}</aside>}
  </div>
);

export const Breadcrumb = ({
  label = breadcrumbArgs.label,
  items = breadcrumbArgs.items,
  variant = breadcrumbArgs.variant,
}) => (
  <nav
    className={clsx('utrecht-breadcrumb', variant === 'arrows' && 'utrecht-breadcrumb--arrows')}
    aria-labelledby="breadcrumb-heading"
  >
    <h2 className="utrecht-breadcrumb__heading" id="breadcrumb-heading" aria-hidden="true">
      {label}
    </h2>
    <ol className="utrecht-breadcrumb__list" itemScope={null} itemType={null}>
      {items.map(({ href, title, rel, current, focus }) => (
        <li key={href} className="utrecht-breadcrumb__item" itemScope={null} itemType={null} itemProp={null}>
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
            itemProp={null}
          >
            <span className="utrecht-breadcrumb__text" itemProp={null}>
              {title}
            </span>
          </a>
        </li>
      ))}
    </ol>
  </nav>
);

export default PageContent;
