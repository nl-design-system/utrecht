/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */
import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-breadcrumb',
  styleUrl: 'index.scss',
  shadow: true,
})
export class Breadcrumb {
  @Prop() json: string;
  @Prop() variant: string;

  render() {
    const { json, variant } = this;
    console.log(json);

    const items = json ? JSON.parse(json) : [];

    return (
      <nav class={clsx('utrecht-breadcrumb', variant === 'arrows' && 'utrecht-breadcrumb--arrows')}>
        <ol class="utrecht-breadcrumb__list" itemscope itemtype="https://schema.org/BreadcrumbList">
          {items.map(({ href, title, current }, index) => (
            <li
              key={href}
              class="utrecht-breadcrumb__item"
              itemscope
              itemtype="https://schema.org/ListItem"
              itemprop="itemListElement"
            >
              <a
                class={clsx('utrecht-breadcrumb__link', 'utrecht-link', current && 'utrecht-link--current')}
                href={href}
                aria-current={current ? 'location' : null}
                itemprop="item"
              >
                <span class="utrecht-breadcrumb__text" itemprop="name">
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
