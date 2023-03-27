/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-url',
  styleUrl: 'url-value.scss',
  shadow: true,
})
export class URLValue {
  render() {
    return (
      <span class="utrecht-url">
        <slot></slot>
      </span>
    );
  }
}
