/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-url-data',
  styleUrl: 'url-data.scss',
  shadow: true,
})
export class URLData {
  render() {
    return (
      <span class="utrecht-url-data">
        <slot></slot>
      </span>
    );
  }
}
