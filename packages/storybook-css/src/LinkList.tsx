/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import type { LinkProps } from '@utrecht/component-library-react';
import { Link } from '@utrecht/component-library-react';
import { UtrechtIconArrow } from '@utrecht/web-component-library-react';
import clsx from 'clsx';
import React, { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import '@utrecht/components/link-list/css/index.scss';

export interface LinkListProps extends HTMLAttributes<HTMLUListElement> {
  // TODO: We don't usually support these types of properties, should be remove `links`?
  // We could support this via `<LinkList {...useLinkList({ links })} />` instead.
  links: (LinkProps & { icon?: ReactNode })[];
}

export const LinkList = ({ children, className, links }: PropsWithChildren<LinkListProps>) => (
  <ul className={clsx('utrecht-link-list utrecht-link-list--html-ul', className)}>
    {children}
    {Array.isArray(links) &&
      links.map(({ children, icon, ...link }) => (
        <li className="utrecht-link-list__item">
          <Link {...link}>
            {icon || <UtrechtIconArrow />}
            <span className="utrecht-link-list__link-text">{children}</span>
          </Link>
        </li>
      ))}
  </ul>
);

export interface LinkListLinkProps extends LinkProps {
  icon?: ReactNode;
}

export const LinkListLink = ({
  children,
  className,
  icon,
  placeholder: _,
  ...props
}: PropsWithChildren<LinkListLinkProps>) => (
  <li className={clsx('utrecht-link-list__item', className)}>
    <Link className="utrecht-link-list__link" {...props}>
      {icon || <UtrechtIconArrow />}
      <span className="utrecht-link-list__link-text">{children}</span>
    </Link>
  </li>
);
