import { Component, h } from '@stencil/core';

/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

@Component({
  tag: 'utrecht-page-header',
  styleUrl: 'page-header.scss',
  shadow: true,
})
export class PageHeader {
  render() {
    return (
      <header class="utrecht-page-header">
        <div class="utrecht-page-header__content">
          <slot></slot>
        </div>
      </header>
    );
  }
}
