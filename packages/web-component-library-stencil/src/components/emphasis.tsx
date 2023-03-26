/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-emphasis',
  styleUrl: 'emphasis.scss',
  shadow: true,
})
export class Emphasis {
  render() {
    return (
      <em class="utrecht-emphasis">
        <slot></slot>
      </em>
    );
  }
}
