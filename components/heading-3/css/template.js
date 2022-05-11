/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const Heading3 = ({ textContent = '', distanced = false }) =>
  `<h3 class="${clsx('utrecht-heading-3', {
    'utrecht-heading-3--distanced': distanced,
  })}">${textContent}</h3>`;
