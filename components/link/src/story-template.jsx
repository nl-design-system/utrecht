/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  active: {
    description: 'Active',
    control: 'boolean',
  },
  ariaLabel: {
    description: 'Provide the full accessible name here if the accessible name cannot be used as text content.',
    control: 'text',
  },
  boxContent: {
    description: 'Content is a box, such as an image or a section, not just text',
    control: 'boolean',
  },
  external: {
    description: 'External',
    control: 'boolean',
  },
  hover: {
    description: 'Hover',
    control: 'boolean',
  },
  focus: {
    description: 'Focus',
    control: 'boolean',
  },
  focusVisible: {
    description: 'Focus visible',
    control: 'boolean',
  },
  href: {
    description: 'Target URL',
    type: {
      name: 'string',
      required: true,
    },
  },
  tabIndex: {
    description: 'Tabindex',
    type: {
      name: 'string',
      required: false,
    },
  },
  telephone: {
    description: 'Link to telephone number',
    control: 'boolean',
  },
  textContent: {
    description: 'Link text',
    type: {
      name: 'string',
      required: true,
    },
  },
  visited: {
    description: 'Visited',
    control: 'boolean',
  },
  placeholder: {
    description: 'Placeholder for a link',
    control: 'boolean',
  },
};

export const defaultArgs = {
  active: false,
  ariaLabel: '',
  boxContent: false,
  current: false,
  external: false,
  hrefLang: '',
  hover: false,
  lang: '',
  focus: false,
  focusVisible: false,
  href: null,
  placeholder: false,
  tabIndex: '',
  telephone: false,
  textContent: '',
  visited: false,
  iconleft: false,
};

export const exampleArgs = {
  textContent: 'Voorbeeldlink',
};

export const Link = ({
  active = defaultArgs.active,
  ariaLabel = defaultArgs.ariaLabel,
  boxContent = defaultArgs.boxContent,
  children,
  current = defaultArgs.current,
  external = defaultArgs.external,
  hrefLang = defaultArgs.hrefLang,
  hover = defaultArgs.hover,
  lang = defaultArgs.lang,
  focus = defaultArgs.focus,
  focusVisible = defaultArgs.focusVisible,
  href = defaultArgs.href,
  placeholder = defaultArgs.placeholder,
  tabIndex = defaultArgs.tabIndex,
  telephone = defaultArgs.telephone,
  textContent = defaultArgs.textContent,
  visited = defaultArgs.visited,
  iconleft = defaultArgs.iconleft,
  ...restProps
}) => (
  <a
    href={placeholder ? null : href === null ? `https://example.com/${lang}` : href}
    className={clsx('utrecht-link', {
      'utrecht-link--active': active,
      'utrecht-link--alternate-lang': lang && !current,
      'utrecht-link--box-content': boxContent,
      'utrecht-link--current-lang': lang && current,
      'utrecht-link--external': external,
      'utrecht-link--focus': focus,
      'utrecht-link--focus-visible': focusVisible,
      'utrecht-link--hover': hover,
      'utrecht-link--placeholder': placeholder,
      'utrecht-link--telephone': telephone,
      'utrecht-link--visited': visited,
      'utrecht-link--icon-left': iconleft,
    })}
    rel={external ? 'external noopener noreferrer' : null}
    aria-label={ariaLabel || null}
    aria-current={current ? 'page' : null}
    aria-disabled={placeholder ? 'true' : null}
    role={placeholder ? 'link' : null}
    hrefLang={hrefLang || null}
    lang={lang || null}
    tabIndex={tabIndex || null}
    {...restProps}
  >
    {children}
    {textContent}
  </a>
);

export default Link;
