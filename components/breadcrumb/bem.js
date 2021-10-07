/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const exampleItems = [
  { href: 'https://example.com/', title: 'Home' },
  { href: 'https://example.com/a/', title: 'Wonen en leven' },
  { href: 'https://example.com/a/b/', title: 'Afval' },
  { href: 'https://example.com/a/b/c/', title: "Kliko's", current: true },
];

export const Breadcrumb = ({ items, microdata, variant }) => `<nav class="${clsx(
  'utrecht-breadcrumb',
  variant === 'arrows' && 'utrecht-breadcrumb--arrows',
)}">
  <ol class="utrecht-breadcrumb__list"${
    microdata ? ' itemscope itemtype="https://schema.org/BreadcrumbList"' : ''
  }>${items
  .map(
    ({ href, title, current, focus }, index) => `
    <li class="utrecht-breadcrumb__item"${
      microdata ? ' itemscope itemtype="https://schema.org/ListItem" itemprop="itemListElement"' : ''
    }>
      <a class="${clsx(
        'utrecht-breadcrumb__link',
        focus && 'utrecht-breadcrumb__link--focus',
        'utrecht-link',
        current && 'utrecht-link--current',
        focus && 'utrecht-link--focus',
      )}" href="${href}"${current ? ' aria-current="location"' : ''}${microdata ? ' itemprop="item"' : ''}>
      <span class="utrecht-breadcrumb__text"${microdata ? ' itemprop="name"' : ''}>${title}</span>
      ${microdata ? `<meta itemprop="position" content="${index + 1}" />` : ''}
    </a>
      </li>`,
  )
  .join('\n')}
  </ol>
</nav>`;
