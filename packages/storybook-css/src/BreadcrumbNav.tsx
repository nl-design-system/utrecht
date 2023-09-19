/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { Link as UtrechtLink } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React, {
  ComponentType,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useId,
} from 'react';

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

interface BreadcrumbNavProps extends HTMLAttributes<HTMLElement> {
  appearance?: string;
  label?: ReactNode | ReactNode[];
}

/**
 * This file provides an alternative implementation of the breadcrumb navigation component,
 * with alternative markup. The default React breadcrumb navigation is preferred.
 *
 * This file exist to test that the CSS is flexible and supports various markup approaches.
 */
export const BreadcrumbNav = forwardRef(
  (
    { appearance, children, className, label, ...restProps }: PropsWithChildren<BreadcrumbNavProps>,
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
        <p
          className="utrecht-breadcrumb__list utrecht-breadcrumb__list--html-p"
          {...useMicrodataItem({ type: 'https://schema.org/BreadcrumbList' })}
        >
          {label && (
            <span id={headingId} className="utrecht-breadcrumb__heading" aria-hidden="true">
              {label}{' '}
            </span>
          )}
          {children}
        </p>
      </nav>
    );
  },
);

BreadcrumbNav.displayName = 'BreadcrumbNav';

export const BreadcrumbSeparator = forwardRef(
  (
    { className, children, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLLIElement>>,
    ref: ForwardedRef<HTMLLIElement>,
  ) => {
    return (
      <span
        className={clsx('utrecht-breadcrumb__separator', 'utrecht-breadcrumb__separator--html-li', className)}
        ref={ref}
        {...restProps}
      >
        {children}
      </span>
    );
  },
);

BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

export interface BreadcrumbLinkProps extends HTMLAttributes<HTMLElement> {
  current?: boolean;
  disabled?: boolean;
  href: string;
  rel?: string;
  index?: number;
  Link?: ComponentType<any>;
}

export const BreadcrumbLink = forwardRef(
  (
    {
      children,
      disabled,
      current,
      href,
      index,
      rel,
      role,
      Link = UtrechtLink,
      className,
      ...restProps
    }: PropsWithChildren<BreadcrumbLinkProps>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const DefaultLinkComponent = Link;
    const LinkComponent = Link || DefaultLinkComponent;

    return (
      <>
        {' '}
        <LinkComponent
          className={clsx('utrecht-breadcrumb__link', className, {
            'utrecht-breadcrumb__link--current': current,
            'utrecht-breadcrumb__link--disabled': disabled,
          })}
          href={disabled ? undefined : href}
          rel={rel}
          role={role || (disabled ? 'link' : undefined)}
          aria-current={current && 'page'}
          aria-disabled={disabled ? 'true' : undefined}
          {...useMicrodataProp('item')}
          {...restProps}
          ref={ref}
        >
          <span className="utrecht-breadcrumb__text" {...useMicrodataProp('name')}>
            {children}
          </span>
          {typeof index === 'number' ? <meta {...useMicrodataProp('position')} content={String(index + 1)} /> : null}
        </LinkComponent>
      </>
    );
  },
);

BreadcrumbLink.displayName = 'BreadcrumbLink';
