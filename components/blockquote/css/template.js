/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const defaultArgs = {
  textContent: '',
  attribution: null,
  distanced: false,
};

export const Blockquote = ({ textContent = '', attribution = null, distanced = false }) =>
  `<blockquote class="${clsx('utrecht-blockquote', { 'utrecht-blockquote--distanced': distanced })}">
  <div class="utrecht-blockquote__content">
    <p>${textContent}</p>${
    attribution
      ? `
    <div class="utrecht-blockquote__attribution">${attribution}</div>`
      : ''
  }
  </div>
</blockquote>`;
