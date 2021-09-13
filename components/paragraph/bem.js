/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const defaultArgs = {
  lead: false,
  textContent: '',
};

export const Paragraph = ({ textContent = '', lead = false }) =>
  `<p class="${clsx('utrecht-paragraph', { 'utrecht-paragraph--lead': lead })}">${textContent}</p>`;
