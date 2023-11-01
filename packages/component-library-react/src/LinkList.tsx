/**
 * @license EUPL-1.2
 * Copyright (c) 2023 Gemeente Utrecht
 */

import clsx from 'clsx';
import React, { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import { Link, LinkProps } from './Link';

export interface LinkListProps extends Omit<HTMLAttributes<HTMLUListElement>, 'children'> {
  icon: React.ReactElement;
  links: LinkProps[];
}

export const LinkList = forwardRef(
  ({ icon, links, className, ...restProps }: PropsWithChildren<LinkListProps>, ref: ForwardedRef<HTMLUListElement>) => (
    <ul ref={ref} className={clsx('utrecht-link-list', 'utrecht-link-list--html-ul', className)} {...restProps}>
      {links.map((link, idx) => (
        <li key={`${idx}`} className="utrecht-link-list__item">
          <Link {...link}>
            {icon}
            {link.children}
          </Link>
        </li>
      ))}
    </ul>
  ),
);

LinkList.displayName = 'LinkList';
