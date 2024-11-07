/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { Link as UtrechtLink } from '@utrecht/link-react';
import clsx from 'clsx';
import { ComponentType, ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, ReactNode, useId } from 'react';
import { Heading } from './Heading';

export interface BreadcrumbNavProps extends HTMLAttributes<HTMLElement> {
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
          'utrecht-breadcrumb-nav',
          'utrecht-breadcrumb-nav--html-ol',
          {
            'utrecht-breadcrumb-nav--arrows': appearance === 'arrows',
          },
          className,
        )}
        aria-labelledby={headingId}
      >
        {label && (
          <Heading id={headingId} className="utrecht-breadcrumb-nav__heading" level={headingLevel} aria-hidden="true">
            {label}
          </Heading>
        )}
        <ol
          className="utrecht-breadcrumb-nav__list utrecht-breadcrumb-nav__list--html-ol"
          {...useMicrodataItem({ type: 'https://schema.org/BreadcrumbList' })}
        >
          {children}
        </ol>
      </nav>
    );
  },
);

BreadcrumbNav.displayName = 'BreadcrumbNav';

export const BreadcrumbNavItem = forwardRef(
  (
    { className, children, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLLIElement>>,
    ref: ForwardedRef<HTMLLIElement>,
  ) => {
    return (
      <li
        className={clsx('utrecht-breadcrumb-nav__item', className)}
        {...useMicrodataItem({ type: 'https://schema.org/ListItem', prop: 'itemListElement' })}
        ref={ref}
        {...restProps}
      >
        {children}
      </li>
    );
  },
);

BreadcrumbNavItem.displayName = 'BreadcrumbNavItem';

export type BreadcrumbNavSeparatorProps = HTMLAttributes<HTMLLIElement>;

export const BreadcrumbNavSeparator = forwardRef(
  (
    { className, children, ...restProps }: PropsWithChildren<BreadcrumbNavSeparatorProps>,
    ref: ForwardedRef<HTMLLIElement>,
  ) => {
    return (
      <li
        aria-hidden="true"
        hidden
        style={{ display: 'var(--_utrecht-breadcrumb-nav-separator-display, block)' }}
        className={clsx('utrecht-breadcrumb-nav__separator', 'utrecht-breadcrumb-nav__separator--html-li', className)}
        ref={ref}
        {...restProps}
      >
        {children}
      </li>
    );
  },
);

BreadcrumbNavSeparator.displayName = 'BreadcrumbNavSeparator';

export interface BreadcrumbNavLinkProps extends HTMLAttributes<HTMLElement> {
  current?: boolean;
  disabled?: boolean;
  href: string;
  rel?: string;
  index?: number;
  Link?: ComponentType<any>;
}

export const BreadcrumbNavLink = forwardRef(
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
    }: PropsWithChildren<BreadcrumbNavLinkProps>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const DefaultLinkComponent = Link;
    const LinkComponent = Link || DefaultLinkComponent;

    return (
      <BreadcrumbNavItem>
        <LinkComponent
          className={clsx('utrecht-breadcrumb-nav__link', className, {
            'utrecht-breadcrumb-nav__link--current': current,
            'utrecht-breadcrumb-nav__link--disabled': disabled,
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
          <span className="utrecht-breadcrumb-nav__text" {...useMicrodataProp('name')}>
            {children}
          </span>
          {typeof index === 'number' ? <meta {...useMicrodataProp('position')} content={String(index + 1)} /> : null}
        </LinkComponent>
      </BreadcrumbNavItem>
    );
  },
);

BreadcrumbNavLink.displayName = 'BreadcrumbNavLink';
