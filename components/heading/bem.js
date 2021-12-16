/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const Heading1 = ({ textContent = '', distanced = false }) =>
  `<h1 class="${clsx('utrecht-heading-1', {
    'utrecht-heading-1--distanced': distanced,
  })}">${textContent}</h1>`;

export const Heading2 = ({ textContent = '', distanced = false }) =>
  `<h2 class="${clsx('utrecht-heading-2', {
    'utrecht-heading-2--distanced': distanced,
  })}">${textContent}</h2>`;

export const Heading3 = ({ textContent = '', distanced = false }) =>
  `<h3 class="${clsx('utrecht-heading-3', {
    'utrecht-heading-3--distanced': distanced,
  })}">${textContent}</h3>`;

export const Heading4 = ({ textContent = '', distanced = false }) =>
  `<h4 class="${clsx('utrecht-heading-4', {
    'utrecht-heading-4--distanced': distanced,
  })}">${textContent}</h4>`;

export const Heading5 = ({ textContent = '', distanced = false }) =>
  `<h5 class="${clsx('utrecht-heading-5', {
    'utrecht-heading-5--distanced': distanced,
  })}">${textContent}</h5>`;

export const Heading6 = ({ textContent = '', distanced = false }) =>
  `<h6 class="${clsx('utrecht-heading-6', {
    'utrecht-heading-6--distanced': distanced,
  })}">${textContent}</h6>`;