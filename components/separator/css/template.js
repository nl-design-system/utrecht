/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const defaultArgs = {
  distanced: false,
};

export const Separator = ({ distanced = false }) =>
  `<div role="separator" aria-orientation="horizontal" class="${clsx(
    'utrecht-separator',
    distanced && 'utrecht-separator--distanced',
  )}"></div>`;
