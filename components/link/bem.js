/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const defaultArgs = {
  active: false,
  external: false,
  hover: false,
  focus: false,
  focusVisible: false,
  href: null,
  focus: false,
  telephone: false,
  textContent: '...',
  visited: false,
};

export const Link = ({
  active = false,
  external = false,
  focus = false,
  focusVisible = false,
  hover = false,
  href = null,
  telephone = false,
  textContent = '',
  visited = false,
}) =>
  `<a href="${href === null ? 'https://example.com/' : href}" class="${clsx('utrecht-link', {
    'utrecht-link--active': active,
    'utrecht-link--external': external,
    'utrecht-link--focus': focus,
    'utrecht-link--focus-visible': focusVisible,
    'utrecht-link--hover': hover,
    'utrecht-link--telephone': telephone,
    'utrecht-link--visited': visited,
  })}"${external ? ' rel="external noopener noreferrer"' : ''}>${textContent}</a>`;
