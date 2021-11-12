/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const defaultArgs = {
  distanced: false,
  items: [],
  nested: false,
};

export const UnorderedList = ({ distanced = false, items = [], nested = false }) =>
  `<ul class="${clsx(
    'utrecht-unordered-list',
    distanced && 'utrecht-unordered-list--distanced',
    nested && 'utrecht-unordered-list--nested',
  )}">
${items
  .map(
    ({ items: subItems, textContent }) =>
      `  <li class="utrecht-unordered-list__item">${textContent || ''}${
        subItems ? UnorderedList({ nested: true, items: subItems }) : ''
      }</li>`,
  )
  .join('\n')}
</ul>`;
