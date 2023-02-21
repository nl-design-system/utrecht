/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import { Link as LinkComponent } from '@utrecht/component-library-react/dist/css-module';
import type { LinkProps } from '@utrecht/component-library-react/src/Link';
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

interface CSSLinkProps extends LinkProps {
  ariaLabelledby?: string;
  active?: boolean;
  current?: boolean;
  hover?: boolean;
  href?: string;
  iconleft?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
  tabIndex?: number;
  telephone?: boolean;
  textContent?: string;
  visited?: boolean;
}

export const defaultArgs: CSSLinkProps = {
  active: false,
  boxContent: false,
  current: false,
  external: false,
  hrefLang: '',
  hover: false,
  lang: '',
  focus: false,
  focusVisible: false,
  href: undefined,
  placeholder: false,
  tabIndex: undefined,
  telephone: false,
  textContent: '',
  title: '',
  visited: false,
  iconleft: false,
  ariaLabelledby: '',
};

export const Link = ({
  active = defaultArgs.active,
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
  title = defaultArgs.title,
  visited = defaultArgs.visited,
  iconleft = defaultArgs.iconleft,
  ...restProps
}: PropsWithChildren<CSSLinkProps>) => (
  <LinkComponent
    aria-current={current ? 'page' : undefined}
    aria-disabled={placeholder ? 'true' : undefined}
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
    href={placeholder ? undefined : href === null ? `https://example.com/${lang}` : href}
    hrefLang={hrefLang || undefined}
    lang={lang || undefined}
    rel={external ? 'external noopener noreferrer' : undefined}
    role={placeholder ? 'link' : undefined}
    tabIndex={typeof tabIndex === 'string' && tabIndex ? parseInt(tabIndex, 10) : undefined}
    title={title || undefined}
    {...restProps}
  >
    {children}
    {textContent}
  </LinkComponent>
);

export default Link;
