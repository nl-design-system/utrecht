/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';

export const argTypes = {
  textContent: {
    description: 'Content of the link',
    control: 'text',
  },
};

export const decorators = [(story) => <section class="utrecht-html">{story()}</section>];

export const defaultArgs = {
  textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const Link = ({ external = false, href = null, textContent = '' }) => (
  <a href={href === null ? '#' : href} rel={external && 'external noopener noreferrer'}>
    {textContent}
  </a>
);

export const AlternateLangLink = ({ textContent, title, current, lang, hreflang, alternate }) => (
  <a
    href={`https://example.com/${lang}/`}
    ariaCurrent={current && 'page'}
    title={title}
    hreflang={hreflang}
    lang={lang}
    rel={alternate && 'alternate'}
  >
    {textContent}
  </a>
);

export default Link;
