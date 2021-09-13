/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const defaultArgs = {
  current: false,
  hreflang: '',
  lang: '',
  textContent: '',
  title: '',
};

export const AlternateLangLink = ({ textContent = '', title = '', current = false, lang = '', hreflang = '' }) =>
  `<a href="https://example.com/${lang}/" class="${clsx('utrecht-link', 'utrecht-link--alternate-lang', {
    'utrecht-link--current-lang': current,
  })}"${current ? ' aria-current="page"' : ''}${title ? ` title="${title}"` : ''}${
    hreflang ? ` hreflang="${hreflang}"` : ''
  }${lang ? ` lang="${lang}"` : ''}${!current ? ' rel="alternate"' : ''}>${textContent}</a>`;
