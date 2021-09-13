/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const Heading6 = ({ textContent = '', distanced = false }) =>
  `<h6 class="${clsx('utrecht-heading-6', {
    'utrecht-heading-6--distanced': distanced,
  })}">${textContent}</h6>`;
