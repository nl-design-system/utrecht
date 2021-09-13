/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const OrderedList = ({ distanced = false }) =>
  `<ol class="${clsx('utrecht-ordered-list', distanced && 'utrecht-ordered-list--distanced')}">
  <li class="utrecht-ordered-list__item">Lorem</li>
  <li class="utrecht-ordered-list__item">Ipsum</li>
  <li class="utrecht-ordered-list__item">Dolor</li>
</ol>`;
