/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */
import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-html-content',
  styleUrl: 'html-content.scss',
  shadow: false,
})
export class HTMLContent {
  render() {
    return (
      <div class="utrecht-html">
        <slot></slot>
      </div>
    );
  }
}
