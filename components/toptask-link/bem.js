/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const defaultArgs = {
  focus: false,
  focusVisible: false,
  href: '',
  hover: false,
  textContent: '',
  icon: null,
};

export const ToptaskLink = ({
  focus = false,
  focusVisible = false,
  hover = false,
  href = '',
  icon = null,
  textContent = '',
}) =>
  `<a href="${href}" class="${clsx('utrecht-toptask-link', {
    'utrecht-toptask-link--hover': hover,
    'utrecht-toptask-link--focus': focus,
    'utrecht-toptask-link--focus-visible': focusVisible,
  })}">
  ${icon ? `<${icon} class="utrecht-toptask-link__icon"></${icon}>` : ''}
 <span class="utrecht-toptask-link__title">${textContent}</span>
</a>`;
