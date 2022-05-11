/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const Heading2 = ({ textContent = '', distanced = false }) =>
  `<h2 class="${clsx('utrecht-heading-2', {
    'utrecht-heading-2--distanced': distanced,
  })}">${textContent}</h2>`;
