import { Component, h } from '@stencil/core';

/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

@Component({
  tag: 'utrecht-page-footer',
  styleUrl: 'page-footer.scss',
  shadow: true,
})
export class PageFooter {
  render() {
    return (
      <footer class="utrecht-page-footer">
        <slot></slot>
      </footer>
    );
  }
}
