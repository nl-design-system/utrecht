import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-sidenav',
  styleUrl: 'bem.scss',
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
                haschildren && 'utrecht-sidenav__item--has-children',
              )}
            >
              <a
                class={clsx(
                  'utrecht-sidenav__link',
                  current && 'utrecht-sidenav__link--current',
                  focus && 'utrecht-sidenav__link--focus',
                  sibling && 'utrecht-sidenav__link--sibling',
                  haschildren && 'utrecht-sidenav__link--has-children',
                )}
                href={href}
              >
                <div class={clsx('utrecht-sidenav__marker', current && 'utrecht-sidenav__marker--current')}></div>
                {!(sibling || index === 0) ? <div class="utrecht-sidenav__connection"></div> : null}
                {title}
              </a>
              <div class="utrecht-sidenav__item-separator"></div>
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
              {children && <div class="utrecht-sidenav__item-separator"></div>}
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
