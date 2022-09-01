/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  currentIndex: {
    description: 'Current index',
    type: 'number',
  },
  distanced: {
    description: 'Distance the element from adjacent content',
    control: 'boolean',
  },
  links: {
    description: 'Items',
    type: 'array',
  },
  prev: {
    description: 'Previous link',
    type: 'object',
  },
  next: {
    description: 'Next link',
    type: 'object',
  },
};

export const defaultArgs = {
  currentIndex: -1,
  distanced: false,
  links: [],
  prev: null,
  next: null,
};

export const exampleArgs = {
  currentIndex: 3,
  distanced: true,
  links: [
    {
      href: './1',
      index: 1,
      title: 'Resultaat 1 tot 10',
    },
    {
      href: './2',
      index: 2,
      title: 'Resultaat 11 tot 20',
    },
    {
      href: './3',
      index: 3,
      title: 'Resultaat 21 tot 30',
    },
    {
      href: './4',
      index: 4,
      title: 'Resultaat 31 tot 40',
    },
    {
      href: './5',
      index: 5,
      title: 'Resultaat 41 tot 50',
    },
  ],
  next: {
    href: './2',
  },
  prev: {
    disabled: true,
  },
};

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

export const Pagination = ({
  currentIndex = defaultArgs.currentIndex,
  distanced = defaultArgs.distanced,
  links = defaultArgs.links,
  next = defaultArgs.next,
  prev = defaultArgs.prev,
}) => (
  <nav className={clsx('utrecht-pagination', distanced && 'utrecht-pagination--distanced')}>
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
