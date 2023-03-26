/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-sidenav',
  styleUrl: 'index.scss',
  shadow: true,
})
export class Sidenav {
  @Prop() json: string;

  render() {
    const items = JSON.parse(this.json);

    return (
      <nav class="utrecht-sidenav">
        <ul class="utrecht-sidenav__list">
          {items.map(({ href, title, current, focus, children, sibling, haschildren }, index, array) => (
            <li
              key={href}
              class={clsx(
                'utrecht-sidenav__item',
                index + 1 === array.length && 'utrecht-sidenav__item--last',
                sibling && 'utrecht-sidenav__item--sibling',
                haschildren && 'utrecht-sidenav__item--parent',
              )}
            >
              <a
                class={clsx(
                  'utrecht-sidenav__link',
                  current && 'utrecht-sidenav__link--current',
                  focus && 'utrecht-sidenav__link--focus',
                  sibling && 'utrecht-sidenav__link--sibling',
                  haschildren && 'utrecht-sidenav__link--parent',
                )}
                href={href}
              >
                <div class={clsx('utrecht-sidenav__marker', current && 'utrecht-sidenav__marker--current')}></div>
                <div
                  class={clsx(
                    'utrecht-sidenav__connection',
                    haschildren && 'utrecht-sidenav__connection--parent',
                    sibling && 'utrecht-sidenav__connection--sibling',
                    index + 1 === array.length && 'utrecht-sidenav__connection--last',
                  )}
                ></div>
                {title}
              </a>
              {children ? (
                <ul class="utrecht-sidenav__list utrecht-sidenav__list--child">
                  {children.map(({ href, title, current, focus }) => (
                    <li key={href} class="utrecht-sidenav__item utrecht-sidenav__item--child">
                      <a
                        class={clsx(
                          'utrecht-sidenav__link',
                          'utrecht-sidenav__link--child',
                          current && 'utrecht-sidenav__link--current',
                          current && 'utrecht-sidenav__link--current-child',
                          focus && 'utrecht-sidenav__link--focus',
                        )}
                        href={href}
                      >
                        <div
                          class={clsx(
                            'utrecht-sidenav__marker',
                            'utrecht-sidenav__marker--child',
                            current && 'utrecht-sidenav__marker--current',
                            current && 'utrecht-sidenav__marker--current-child',
                          )}
                        ></div>
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                ''
              )}
              <div class="utrecht-sidenav__item-separator"></div>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
