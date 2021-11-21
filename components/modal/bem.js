/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */
import clsx from 'clsx';

export const defaultArgs = { contentHTML: '' };

export const Modal = ({ contentHTML = '' }) =>
  `<div class="utrecht-modal">
  <div class="utrecht-modal__backdrop utrecht-backdrop"></div>
  <div class="utrecht-modal__content">${contentHTML}</div>
</div>`;
