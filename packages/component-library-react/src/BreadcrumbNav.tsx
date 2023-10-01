/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ComponentType, ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, ReactNode, useId } from 'react';
import { Heading } from './Heading';
import { Link as UtrechtLink } from './Link';

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
          'utrecht-breadcrumb',
          'utrecht-breadcrumb--html-ol',
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
        <ol
          className="utrecht-breadcrumb__list utrecht-breadcrumb__list--html-ol"
          {...useMicrodataItem({ type: 'https://schema.org/BreadcrumbList' })}
        >
          {children}
        </ol>
      </nav>
    );
  },
);

BreadcrumbNav.displayName = 'BreadcrumbNav';

export const BreadcrumbItem = forwardRef(
  (
    { className, children, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLLIElement>>,
    ref: ForwardedRef<HTMLLIElement>,
  ) => {
    return (
      <li
        className={clsx('utrecht-breadcrumb__item', className)}
        {...useMicrodataItem({ type: 'https://schema.org/ListItem', prop: 'itemListElement' })}
        ref={ref}
        {...restProps}
      >
        {children}
      </li>
    );
  },
);

BreadcrumbItem.displayName = 'BreadcrumbItem';

export type BreadcrumbSeparatorProps = HTMLAttributes<HTMLLIElement>;

export const BreadcrumbSeparator = forwardRef(
  (
    { className, children, ...restProps }: PropsWithChildren<BreadcrumbSeparatorProps>,
    ref: ForwardedRef<HTMLLIElement>,
  ) => {
    return (
      <li
        aria-hidden="true"
        hidden
        style={{ display: 'var(--_utrecht-breadcrumb-separator-display, block)' }}
        className={clsx('utrecht-breadcrumb__separator', 'utrecht-breadcrumb__separator--html-li', className)}
        ref={ref}
        {...restProps}
      >
        {children}
      </li>
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
      <BreadcrumbItem>
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
      </BreadcrumbItem>
    );
  },
);

BreadcrumbLink.displayName = 'BreadcrumbLink';
