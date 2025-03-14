/**
 * @license EUPL-1.2
 * Copyright (c) 2023 Gemeente Utrecht
 */

import type { LinkProps } from '@utrecht/link-react';
import { Link } from '@utrecht/link-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';

export interface LinkListLinkProps extends LinkProps {
  icon?: ReactNode;
}

export const LinkListLink = forwardRef(
  (
    { className, icon, children, ...restProps }: PropsWithChildren<LinkListLinkProps>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    <li className={clsx('utrecht-link-list__item', className)}>
      <Link className="utrecht-link-list__link" {...restProps} ref={ref}>
        {icon}
        <span className="utrecht-link-list__link-text">{children}</span>
      </Link>
    </li>
  ),
);

LinkListLink.displayName = 'LinkListLink';

export interface LinkListProps extends Omit<HTMLAttributes<HTMLUListElement>, 'children'> {
  icon?: () => ReactNode;
  links?: PropsWithChildren<LinkListLinkProps>[];
}

export const LinkList = forwardRef(
  (
    { children, icon, links, className, ...restProps }: PropsWithChildren<LinkListProps>,
    ref: ForwardedRef<HTMLUListElement>,
  ) => (
    <ul
      role="list"
      ref={ref}
      className={clsx('utrecht-link-list', 'utrecht-link-list--html-ul', className)}
      {...restProps}
    >
      {children}
      {Array.isArray(links) &&
        links.map((linkProps, index) => (
          <LinkListLink key={index} icon={typeof icon === 'function' ? icon() : undefined} {...linkProps} />
        ))}
    </ul>
  ),
);

LinkList.displayName = 'LinkList';
