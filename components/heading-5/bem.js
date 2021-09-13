/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const Heading5 = ({ textContent = '', distanced = false }) =>
  `<h5 class="${clsx('utrecht-heading-5', {
    'utrecht-heading-5--distanced': distanced,
  })}">${textContent}</h5>`;
