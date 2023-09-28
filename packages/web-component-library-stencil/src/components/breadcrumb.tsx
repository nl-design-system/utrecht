/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */
import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  shadow: true,
})
export class Breadcrumb {
  @Prop() json: string;
  @Prop() variant: string;

  render() {
    const { json, variant } = this;

    const items = json ? JSON.parse(json) : [];

    return (
      <nav
        class={clsx('utrecht-breadcrumb', variant === 'arrows' && 'utrecht-breadcrumb--arrows')}
        aria-labelledby="heading"
      >
        <h2 id="heading" class="utrecht-breadcrumb__heading" aria-hidden="true">
          <slot name="label"></slot>
        </h2>
        <slot></slot>
        {Array.isArray(items) && items.length > 0 && (
          <ol
            class="utrecht-breadcrumb__list utrecht-breadcrumb__list--html-ol"
            itemscope
            itemtype="https://schema.org/BreadcrumbList"
          >
            {items.map(({ current, disabled, href, rel, title }, index) => (
              <li
                key={href}
                class="utrecht-breadcrumb__item"
                itemscope
                itemtype="https://schema.org/ListItem"
                itemprop="itemListElement"
              >
                <a
                  class={clsx('utrecht-breadcrumb__link', 'utrecht-link', 'utrecht-link--html-a', {
                    'utrecht-breadcrumb__link--current': current,
                    'utrecht-breadcrumb__link--disabled': disabled,
                    'utrecht-link--current': current,
                    'utrecht-link--placeholder': disabled,
                  })}
                  href={disabled ? null : href}
                  rel={rel}
                  role={disabled ? 'link' : null}
                  aria-current={current && 'page'}
                  aria-disabled={disabled ? 'true' : null}
                  itemprop="item"
                >
                  <span class="utrecht-breadcrumb__text" itemprop="name">
                    {title}
                  </span>
                  <meta itemprop="position" content={String(index + 1)} />
                </a>
              </li>
            ))}
          </ol>
        )}
      </nav>
    );
  }
}
