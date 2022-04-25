/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const defaultArgs = {
  active: false,
  current: false,
  external: false,
  hreflang: '',
  hover: false,
  lang: '',
  focus: false,
  focusVisible: false,
  href: null,
  telephone: false,
  textContent: '...',
  title: '',
  visited: false,
  iconleft: false,
};

export const Link = ({
  active = defaultArgs.active,
  current = defaultArgs.current,
  external = defaultArgs.external,
  hreflang = defaultArgs.hreflang,
  hover = defaultArgs.hover,
  lang = defaultArgs.lang,
  focus = defaultArgs.focus,
  focusVisible = defaultArgs.focusVisible,
  href = defaultArgs.href,
  telephone = defaultArgs.telephone,
  textContent = defaultArgs.textContent,
  title = defaultArgs.title,
  visited = defaultArgs.visited,
  iconleft = defaultArgs.iconleft,
}) =>
  `<a href="${href === null ? `https://example.com/${lang}` : href}" class="${clsx('utrecht-link', {
    'utrecht-link--active': active,
    'utrecht-link--alternate-lang': lang && !current,
    'utrecht-link--current-lang': lang && current,
    'utrecht-link--external': external,
    'utrecht-link--focus': focus,
    'utrecht-link--focus-visible': focusVisible,
    'utrecht-link--hover': hover,
    'utrecht-link--telephone': telephone,
    'utrecht-link--visited': visited,
    'utrecht-link-icon-left': iconleft,
  })}"${external ? ' rel="external noopener noreferrer"' : ''}${current ? ' aria-current="page"' : ''}${
    title ? ` title="${title}"` : ''
  }${hreflang ? ` hreflang="${hreflang}"` : ''}${lang ? ` lang="${lang}"` : ''}${
    !current ? ' rel="alternate"' : ''
  }>${textContent}</a>`;
