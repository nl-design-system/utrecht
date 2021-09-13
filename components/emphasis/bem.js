/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const defaultArgs = {
  stressed: false,
  strong: false,
  textContent: '',
};

export const Emphasis = ({ textContent = '', stressed = false, strong = false }) =>
  `<span class="${clsx(
    'utrecht-emphasis',
    stressed && 'utrecht-emphasis--stressed',
    strong && 'utrecht-emphasis--strong',
  )}">${textContent}</span>`;
