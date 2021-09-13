/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const Heading4 = ({ textContent = '', distanced = false }) =>
  `<h4 class="${clsx('utrecht-heading-4', {
    'utrecht-heading-4--distanced': distanced,
  })}">${textContent}</h4>`;
