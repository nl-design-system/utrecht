/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { Link } from './Link';

export const LinkTemplate = ({ disabled = false, href = '', rel = null, textContent = '', title = '' }) => {
  const className = clsx(
    'utrecht-pagination__relative-link',
    disabled && 'utrecht-pagination__relative-link--disabled',
    rel === 'next' && 'utrecht-pagination__relative-link--next',
    rel === 'prev' && 'utrecht-pagination__relative-link--prev',
  );

  return (
    <>
      {disabled ? (
        <span className={className} rel={rel || null} aria-label={title || null}>
          {textContent}
        </span>
      ) : (
        <a href={href} className={className} rel={rel || null} aria-label={title || null}>
          {textContent}
        </a>
      )}
    </>
  );
};

export const ItemTemplate = ({ current = false, href = '', rel = null, textContent = '' }) => (
  <a
    className={clsx('utrecht-pagination__page-link', current && 'utrecht-pagination__page-link--current')}
    href={href}
    aria-current={current || null}
    rel={rel || null}
  >
    {textContent}
  </a>
);

export interface PaginationNavProps {
  heading?: React.Node;
}

const Heading = ({ children, level }) => {
  const HeadingElement =
    level === 1
      ? 'h1'
      : level === 2
      ? 'h2'
      : level === 3
      ? 'h3'
      : level === 4
      ? 'h4'
      : level === 5
      ? 'h5'
      : level === 6
      ? 'h6'
      : 'div';

  return <HeadingElement>{children}</HeadingElement>;
};

export const PaginationNav = ({
  heading,
  headingId,
  headingLevel,
  currentIndex = defaultArgs.currentIndex,
  distanced = defaultArgs.distanced,
  links = defaultArgs.links,
  next = defaultArgs.next,
  prev = defaultArgs.prev,
}) => (
  <nav className={clsx('utrecht-pagination', distanced && 'utrecht-pagination--distanced')} aria-labelledby={headingId}>
    {/* TODO: Use `h1`-`h6` element, depending on `headingLevel` */}
    <Heading id={headingId} class="utrecht-pagination__heading" level={headingLevel}>
      {label}
    </Heading>
    <span className="utrecht-pagination__before">
      {prev ? LinkTemplate({ ...prev, rel: 'prev', textContent: 'Vorige' }) : ''}
    </span>
    <span role="group" className="utrecht-pagination__pages">
      {links
        .sort((a, b) => (a.index === b.index ? 0 : a.index > b.index ? 1 : -1))
        .map((link, arrayIndex) => {
          const index = typeof link.index === 'number' ? link.index : arrayIndex;
          return {
            index,
            current: typeof currentIndex === 'number' && index === currentIndex,
            rel:
              typeof currentIndex === 'number'
                ? index === currentIndex + 1
                  ? 'next'
                  : index === currentIndex - 1
                  ? 'prev'
                  : null
                : null,
            textContent: link.index || index,
            ...link,
          };
        })
        .map((link) => ItemTemplate(link))}
    </span>
    <span className="utrecht-pagination__before">
      {next ? LinkTemplate({ ...next, rel: 'next', textContent: 'Volgende' }) : ''}
    </span>
  </nav>
);
