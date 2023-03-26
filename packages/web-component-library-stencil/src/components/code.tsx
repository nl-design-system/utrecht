/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
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
