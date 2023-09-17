import clsx from 'clsx';
import React from 'react';

export const LinkTemplate = ({
  disabled = false,
  href = '',
  rel = null,
  textContent = '',
  title = '',
}: {
  disabled?: boolean;
  href: string;
  rel?: string | null;
  textContent?: string;
  title?: string;
}) => {
  const className = clsx(
    'utrecht-pagination__relative-link',
    disabled && 'utrecht-pagination__relative-link--disabled',
    rel === 'next' && 'utrecht-pagination__relative-link--next',
    rel === 'prev' && 'utrecht-pagination__relative-link--prev',
  );

  return (
    <>
      {disabled ? (
        <span className={className} rel={rel || undefined} aria-label={title || undefined}>
          {textContent}
        </span>
      ) : (
        <a href={href} className={className} rel={rel || undefined} aria-label={title || undefined}>
          {textContent}
        </a>
      )}
    </>
  );
};

export const ItemTemplate = ({
  current = false,
  href = '',
  rel = null,
  textContent = '',
}: {
  current?: boolean;
  href: string;
  rel?: string | null;
  textContent?: string;
}) => (
  <a
    className={clsx('utrecht-pagination__page-link', current && 'utrecht-pagination__page-link--current')}
    href={href}
    aria-current={current || null}
    rel={rel || undefined}
  >
    {textContent}
  </a>
);

interface PaginationLink {
  href: string;
  title: string;
  index?: number;
  current?: boolean;
}

interface PaginationProps {
  currentIndex?: number;
  distanced?: boolean;
  links: PaginationLink[];
  next?: PaginationLink;
  prev?: PaginationLink;
}

export const Pagination = ({ currentIndex, distanced, links, next, prev }: PaginationProps) => (
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
            textContent: String(link.index || index),
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
