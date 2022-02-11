/**
 * @license EUPL-1.2
 * Copyright (c) 2021-2022 Robbert Broersma
 * Copyright (c) 2021-2022 Gemeente Utrecht
 */

import clsx from 'clsx';

export const Sidenav = ({ items, pseudoElements }) => `<nav class="${clsx(
  'utrecht-sidenav',
  pseudoElements && 'utrecht-sidenav--pseudo-elements',
)}">
    <ul class="utrecht-sidenav__list">${items
      .map(
        ({ href, title, current, focus, children, sibling, haschildren }, index, array) => `<li class="${clsx(
          'utrecht-sidenav__item',
          index + 1 === array.length && 'utrecht-sidenav__item--last',
          sibling && 'utrecht-sidenav__item--sibling',
          haschildren && 'utrecht-sidenav__item--parent',
        )}">
          <a class="${clsx(
            'utrecht-sidenav__link',
            current && 'utrecht-sidenav__link--current',
            focus && 'utrecht-sidenav__link--focus',
            sibling && 'utrecht-sidenav__link--sibling',
            haschildren && 'utrecht-sidenav__link--parent',
          )}" href="${href}">${
          pseudoElements
            ? ''
            : `<div class="${clsx(
                'utrecht-sidenav__marker',
                current && 'utrecht-sidenav__marker--current',
              )}"></div><div class="${clsx(
                'utrecht-sidenav__connection',
                haschildren && 'utrecht-sidenav__connection--parent',
                sibling && 'utrecht-sidenav__connection--sibling',
                index + 1 === array.length && 'utrecht-sidenav__connection--last',
              )}"></div>`
        }${title}</a>
          ${
            children
              ? `<ul class="utrecht-sidenav__list utrecht-sidenav__list--child">${children
                  .map(
                    ({ href, title, current, focus }) =>
                      `<li class="utrecht-sidenav__item utrecht-sidenav__item--child"><a class="${clsx(
                        'utrecht-sidenav__link utrecht-sidenav__link--child',
                        current && 'utrecht-sidenav__link--current utrecht-sidenav__link--current-child',
                        focus && 'utrecht-sidenav__link--focus',
                      )}" href="${href}">${
                        pseudoElements
                          ? ''
                          : `<div class="${clsx(
                              'utrecht-sidenav__marker',
                              'utrecht-sidenav__marker--child',
                              current && 'utrecht-sidenav__marker--current',
                            )}"></div>`
                      }${title}</a></li>`,
                  )
                  .join('')}
          </ul>`
              : ''
          }
          <div class="utrecht-sidenav__item-separator"></div>
        </li>`,
      )
      .join('')}
    </ul>
  </nav>
`;
