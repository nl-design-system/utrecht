/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { clsx } from 'clsx';
import React from 'react';

interface SideNavLink {
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
        items.map(({ href, title, current, focus, children, sibling, haschildren }, index, array) => (
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
              {pseudoElements ? (
                ''
              ) : (
                <>
                  <div className={clsx('utrecht-sidenav__marker', current && 'utrecht-sidenav__marker--current')}></div>
                  <div
                    className={clsx(
                      'utrecht-sidenav__connection',
                      haschildren && 'utrecht-sidenav__connection--parent',
                      sibling && 'utrecht-sidenav__connection--sibling',
                      index + 1 === array.length && 'utrecht-sidenav__connection--last',
                    )}
                  ></div>
                </>
              )}
              {title}
            </a>
            {children && (
              <ul className="utrecht-sidenav__list utrecht-sidenav__list--child">
                {children.map(({ href, title, current, focus }) => (
                  <li className="utrecht-sidenav__item utrecht-sidenav__item--child">
                    <a
                      className={clsx(
                        'utrecht-sidenav__link utrecht-sidenav__link--child',
                        current && 'utrecht-sidenav__link--current utrecht-sidenav__link--current-child',
                        focus && 'utrecht-sidenav__link--focus',
                      )}
                      href={href}
                    >
                      {pseudoElements ? (
                        ''
                      ) : (
                        <>
                          <div
                            className={clsx(
                              'utrecht-sidenav__marker',
                              'utrecht-sidenav__marker--child',
                              current && 'utrecht-sidenav__marker--current',
                            )}
                          ></div>
                          {title}
                        </>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            <div className="utrecht-sidenav__item-separator"></div>
          </li>
        ))}
    </ul>
  </nav>
);
