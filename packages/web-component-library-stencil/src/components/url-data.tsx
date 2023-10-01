/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
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
