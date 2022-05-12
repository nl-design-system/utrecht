/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const defaultArgs = {
  distanced: false,
};

export const LinkTemplate = ({ disabled = false, href = '', rel = null, textContent = '', title = '' }) =>
  `<${disabled ? 'span' : 'a'} href="${href}" class="${clsx(
    'utrecht-pagination__relative-link',
    disabled && 'utrecht-pagination__relative-link--disabled',
    rel === 'next' && 'utrecht-pagination__relative-link--next',
    rel === 'prev' && 'utrecht-pagination__relative-link--prev',
  )}"${rel ? ` rel="${rel}"` : ''}${title ? ` aria-label="${title}"` : ''}>${textContent}</${disabled ? 'span' : 'a'}>`;

export const ItemTemplate = ({ current = false, href = '', rel = null, textContent = '' }) =>
  `<a class="${clsx(
    'utrecht-pagination__page-link',
    current && 'utrecht-pagination__page-link--current',
  )}" href="${href}"${current ? ' aria-current="true"' : ''}${rel ? ` rel="${rel}"` : ''}>${textContent}</a>`;

export const Pagination = ({ currentIndex = -1, distanced = false, links = [], next = null, prev = null }) =>
  `<nav class="${clsx(
    'utrecht-pagination',
    distanced && 'utrecht-pagination--distanced',
  )}"><span class="utrecht-pagination__before">${
    prev ? LinkTemplate({ ...prev, rel: 'prev', textContent: 'Vorige' }) : ''
  }</span><span role="group" class="utrecht-pagination__pages">${links
    .sort((a, b) => (a.index === b.index ? 0 : a.index > b.index ? 1 : -1))
    .map((link, arrayIndex) => {
      const index = typeof link.index === 'number' ? link.index : arrayIndex;
      return {
        index,
        current: typeof currentIndex === 'number' && index === currentIndex,
        rel:
          typeof currentIndex === 'number'
            ? index === currentIndex + 1
              ? 'next'
              : index === currentIndex - 1
              ? 'prev'
              : null
            : null,
        textContent: link.index || index,
        ...link,
      };
    })
    .map((link) => ItemTemplate(link))
    .join('')}</span><span class="utrecht-pagination__before">${
    next ? LinkTemplate({ ...next, rel: 'next', textContent: 'Volgende' }) : ''
  }</span></nav>`;
