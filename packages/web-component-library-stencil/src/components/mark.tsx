/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
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
