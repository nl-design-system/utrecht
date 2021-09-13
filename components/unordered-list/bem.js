/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const UnorderedList = ({ distanced = false }) =>
  `<ul class="${clsx('utrecht-unordered-list', distanced && 'utrecht-unordered-list--distanced')}">
  <li class="utrecht-unordered-list__item">Lorem</li>
  <li class="utrecht-unordered-list__item">Ipsum</li>
  <li class="utrecht-unordered-list__item">Dolor</li>
</ul>`;

export const UnorderedListNested = ({ distanced = false }) =>
  `<ul class="${clsx('utrecht-unordered-list', distanced && 'utrecht-unordered-list--distanced')}">
  <li class="utrecht-unordered-list__item">Lorem</li>
  <li class="utrecht-unordered-list__item">Ipsum
    <ul class="utrecht-unordered-list utrecht-unordered-list--nested">
      <li class="utrecht-unordered-list__item">Lorem</li>
      <li class="utrecht-unordered-list__item">Ipsum</li>
    </ul>
  </li>
  <li class="utrecht-unordered-list__item">Dolor</li>
</ul>`;
