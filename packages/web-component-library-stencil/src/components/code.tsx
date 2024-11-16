/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-code',
  styleUrl: 'code.scss',
  shadow: true,
})
export class Code {
  render() {
    return (
      <code class="utrecht-code">
        <slot></slot>
      </code>
    );
  }
}
