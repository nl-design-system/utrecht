/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { UtrechtIconMenuDot } from '@utrecht/web-component-library-react';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

interface SideNavLink {
  icon?: ReactNode;
  href: string;
  title?: string;
  current?: boolean;
  focus?: boolean;
  children?: SideNavLink[];
  sibling?: boolean;
  haschildren?: boolean;
}

export interface SideNavProps {
  items?: SideNavLink[];
  pseudoElements?: boolean;
}

export const SideNav = ({ items, pseudoElements }: SideNavProps) => (
  <nav className={clsx('utrecht-sidenav', pseudoElements && 'utrecht-sidenav--pseudo-elements')}>
    <ul className="utrecht-sidenav__list">
      {Array.isArray(items) &&
        items.map(({ icon, href, title, current, focus, sibling, haschildren }, index, array) => (
          <li
            className={clsx(
              'utrecht-sidenav__item',
              index + 1 === array.length && 'utrecht-sidenav__item--last',
              sibling && 'utrecht-sidenav__item--sibling',
              haschildren && 'utrecht-sidenav__item--parent',
            )}
          >
            <a
              className={clsx(
                'utrecht-sidenav__link',
                current && 'utrecht-sidenav__link--current',
                focus && 'utrecht-sidenav__link--focus',
                sibling && 'utrecht-sidenav__link--sibling',
                haschildren && 'utrecht-sidenav__link--parent',
              )}
              href={href}
            >
              {icon || <UtrechtIconMenuDot />}
              <span className={'utrecht-sidenav__link-text'}>{title}</span>
            </a>
            <div className="utrecht-sidenav__item-separator"></div>
          </li>
        ))}
    </ul>
  </nav>
);
