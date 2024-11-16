/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-mark',
  styleUrl: 'mark.scss',
  shadow: true,
})
export class Mark {
  render() {
    return (
      <mark class="utrecht-mark">
        <slot></slot>
      </mark>
    );
  }
}
