/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Link, LinkProps } from '@utrecht/link-react';
import { clsx } from 'clsx';
import { HTMLAttributes, LiHTMLAttributes, type PropsWithChildren } from 'react';

export type TableOfContentsProps = HTMLAttributes<HTMLElement>;

export const TableOfContents = ({ children, className, ...restProps }: PropsWithChildren<TableOfContentsProps>) => (
  <section className={clsx('utrecht-table-of-contents', className)} {...restProps}>
    {children}
  </section>
);

export type TableOfContentsListProps = HTMLAttributes<HTMLElement>;

export const TableOfContentsList = ({
  children,
  className,
  ...restProps
}: PropsWithChildren<TableOfContentsListProps>) => (
  <ul className={clsx('utrecht-table-of-contents__list', className)} {...restProps}>
    {children}
  </ul>
);

export type TableOfContentsListItemProps = LiHTMLAttributes<HTMLLIElement>;

export const TableOfContentsListItem = ({
  children,
  className,
  ...restProps
}: PropsWithChildren<TableOfContentsListItemProps>) => (
  <li className={clsx('utrecht-table-of-contents__list-item', className)} {...restProps}>
    <span className="utrecht-table-of-contents__list-item-body">{children}</span>
  </li>
);

export interface TableOfContentsLinkProps extends LinkProps {
  href: string;
  label?: string;
}

export const TableOfContentsLink = ({
  children,
  className,
  label,
  ...restProps
}: PropsWithChildren<TableOfContentsLinkProps>) => (
  <Link className={clsx('utrecht-table-of-contents__link', className)} {...restProps}>
    {label && <span className="utrecht-table-of-contents__list-item-label">{label}</span>}
    <span className="utrecht-table-of-contents__list-item-title">{children}</span>
  </Link>
);
