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
  external: {
    description: 'Link is external link',
    type: 'boolean',
  },
  href: { description: 'Link href', type: 'text' },
};

export const decorators = [(story) => <section className="utrecht-html">{story()}</section>];

export const defaultArgs = {
  textContent: '',
  external: false,
  href: '',
};

export const exampleArgs = {
  textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const Link = ({
  external = defaultArgs.external,
  href = defaultArgs.href,
  textContent = defaultArgs.textContent,
}) => (
  <a href={href === null ? '#' : href} rel={external && 'external noopener noreferrer'}>
    {textContent}
  </a>
);

export const AlternateLangLink = ({
  textContent = '',
  title = '',
  current = false,
  lang = undefined,
  hrefLang = undefined,
  alternate = false,
}) => (
  <a
    href={`https://example.com/${lang}/`}
    aria-current={current ? 'page' : null}
    title={title || null}
    hrefLang={hrefLang || null}
    lang={lang || null}
    rel={alternate ? 'alternate' : null}
  >
    {textContent}
  </a>
);

export default Link;
