import { Component, h } from '@stencil/core';

/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

@Component({
  tag: 'utrecht-page-content',
  styleUrl: 'page-content.scss',
  shadow: true,
})
export class Page {
  render() {
    return (
      <div class="utrecht-page-content">
        <main class="utrecht-page-content__main">
          <slot></slot>
        </main>
      </div>
    );
  }
}
