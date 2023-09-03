/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React, { AnchorHTMLAttributes, HTMLAttributes, LiHTMLAttributes, PropsWithChildren } from 'react';

export interface TopNavLinkProps extends PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> {
  current?: boolean | string;
}

export const TopNavLink = ({ children, className, current, ...restProps }: TopNavLinkProps) => (
  <a
    aria-current={current}
    className={clsx('utrecht-topnav__link', current && 'utrecht-topnav__link--current', className)}
    {...restProps}
  >
    {children}
  </a>
);

export type TopNavItemProps = LiHTMLAttributes<HTMLLIElement>;

export const TopNavItem = ({ className, children, ...restProps }: TopNavLinkProps) => (
  <li className={clsx('utrecht-topnav__item', className)} {...restProps}>
    {children}
  </li>
);

export type TopNavProps = HTMLAttributes<HTMLDivElement>;

export const TopNav = ({ children }: TopNavProps) => (
  <div className="utrecht-navhtml">
    <nav className="topnav">
      <ul className="utrecht-topnav__list">{children}</ul>
    </nav>
  </div>
);
