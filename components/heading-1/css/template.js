/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const Heading1 = ({ textContent = '', distanced = false }) =>
  `<h1 class="${clsx('utrecht-heading-1', {
    'utrecht-heading-1--distanced': distanced,
  })}">${textContent}</h1>`;
