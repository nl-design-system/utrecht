/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, ReactNode, useId } from 'react';
import { Heading } from './Heading';
import { Link } from './Link';

interface BreadcrumbNavProps extends HTMLAttributes<HTMLElement> {
  appearance?: string;
  headingLevel?: number;
  label?: ReactNode | ReactNode[];
}

const useMicrodataItem = ({
  prop,
  type,
}: {
  prop?: string;
  type: string;
}): Pick<HTMLAttributes<HTMLElement>, 'itemProp' | 'itemScope' | 'itemType'> => ({
  itemScope: true,
  itemType: type,
  itemProp: prop,
});

const useMicrodataProp = (prop: string): Pick<HTMLAttributes<HTMLElement>, 'itemProp'> => ({
  itemProp: prop,
});

export const BreadcrumbNav = forwardRef(
  (
    { appearance, children, className, headingLevel = 2, label, ...restProps }: PropsWithChildren<BreadcrumbNavProps>,
    ref: ForwardedRef<HTMLOListElement>,
  ) => {
    const headingId = label ? useId() : undefined;
    return (
      <nav
        {...restProps}
        ref={ref}
        className={clsx(
          'utrecht-breadcrumb',
          {
            'utrecht-breadcrumb--arrows': appearance === 'arrows',
          },
          className,
        )}
        aria-labelledby={headingId}
      >
        {label && (
          <Heading id={headingId} className="utrecht-breadcrumb__heading" level={headingLevel} aria-hidden="true">
            {label}
          </Heading>
        )}
        <ol className="utrecht-breadcrumb__list" {...useMicrodataItem({ type: 'https://schema.org/BreadcrumbList' })}>
          {children}
        </ol>
      </nav>
    );
  },
);

BreadcrumbNav.displayName = 'BreadcrumbNav';

export interface BreadcrumbLinkProps extends HTMLAttributes<HTMLElement> {
  current?: boolean;
  href: string;
  index?: number;
}

export const BreadcrumbLink = forwardRef(
  (
    { children, current, href, index }: PropsWithChildren<BreadcrumbLinkProps>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    <li
      className="utrecht-breadcrumb__item"
      {...useMicrodataItem({ type: 'https://schema.org/ListItem', prop: 'itemListElement' })}
    >
      <Link
        className="utrecht-breadcrumb__link"
        href={href}
        aria-current={current && 'location'}
        {...useMicrodataProp('item')}
        ref={ref}
      >
        <span className="utrecht-breadcrumb__text" {...useMicrodataProp('name')}>
          {children}
        </span>
        {typeof index === 'number' ? <meta {...useMicrodataProp('position')} content={String(index + 1)} /> : null}
      </Link>
    </li>
  ),
);

BreadcrumbLink.displayName = 'BreadcrumbLink';
