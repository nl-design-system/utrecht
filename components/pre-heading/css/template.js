/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const defaultArgs = {
  distanced: false,
};

export const PreHeading = ({ textContent = '', distanced = false }) =>
  `<div class="${clsx('utrecht-pre-heading', {
    'utrecht-pre-heading--distanced': distanced,
  })}">${textContent}</div>`;
