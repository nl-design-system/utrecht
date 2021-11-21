/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */
import clsx from 'clsx';

export const defaultArgs = {
  viewport: false,
};

export const Backdrop = ({ viewport = false }) =>
  `<div class="${clsx('utrecht-backdrop', viewport && 'utrecht-backdrop--viewport')}"></div>`;
