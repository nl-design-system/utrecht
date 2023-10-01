/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */
import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-breadcrumb-nav',
  styleUrl: 'breadcrumb-nav.scss',
  shadow: true,
})
export class BreadcrumbNav {
  @Prop() json: string;
  @Prop() variant: string;

  render() {
    const { json, variant } = this;

    const items = json ? JSON.parse(json) : [];

    return (
      <nav class={clsx('utrecht-breadcrumb-nav', variant === 'arrows' && 'utrecht-breadcrumb-nav--arrows')}>
        <ol
          class="utrecht-breadcrumb-nav__list utrecht-breadcrumb-nav__list--html-ol"
          itemscope
          itemtype="https://schema.org/BreadcrumbList"
        >
          {items.map(({ href, title, current }, index) => (
            <li
              key={href}
              class="utrecht-breadcrumb-nav__item"
              itemscope
              itemtype="https://schema.org/ListItem"
              itemprop="itemListElement"
            >
              <a
                class={clsx(
                  'utrecht-breadcrumb-nav__link',
                  'utrecht-link',
                  'utrecht-link--html-a',
                  current && 'utrecht-link--current',
                )}
                href={href}
                aria-current={current ? 'location' : null}
                itemprop="item"
              >
                <span class="utrecht-breadcrumb-nav__text" itemprop="name">
                  {title}
                </span>
                <meta itemprop="position" content={index + 1} />
              </a>
            </li>
          ))}
        </ol>
      </nav>
    );
  }
}
