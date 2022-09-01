/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  items: {
    description: 'Menu items',
    control: 'array',
  },
  pseudoElements: {
    description: 'Render using CSS pseudo elements',
    control: 'boolean',
  },
};

export const defaultArgs = {
  pseudoElements: false,
  items: [],
};

export const exampleArgs = {
  items: [
    { href: '#', title: 'Crumb #1' },
    { href: '#', title: 'Crumb #2' },
    { href: '#', title: 'Crumb #3' },
  ],
};

export const Sidenav = ({ items = defaultArgs.items, pseudoElements = defaultArgs.pseudoElements }) => (
  <nav className={clsx('utrecht-sidenav', pseudoElements && 'utrecht-sidenav--pseudo-elements')}>
    <ul className="utrecht-sidenav__list">
      {items.map(({ href, title, current, focus, children, sibling, haschildren }, index, array) => (
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

export default Sidenav;
