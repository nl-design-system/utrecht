/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const OrderedList = ({ distanced = false, items = [] }) =>
  `<ol class="${clsx('utrecht-ordered-list', distanced && 'utrecht-ordered-list--distanced')}">
${items.map(({ textContent }) => `  <li class="utrecht-ordered-list__item">${textContent}</li>`).join('\n')}
</ol>`;
