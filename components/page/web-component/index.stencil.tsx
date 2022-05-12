import { Component, h } from '@stencil/core';

/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 */

@Component({
  tag: 'utrecht-page',
  styleUrl: 'index.scss',
  shadow: true,
})
export class Page {
  render() {
    return (
      <div class="utrecht-page">
        <div class="utrecht-page__content">
          <slot></slot>
        </div>
      </div>
    );
  }
}
