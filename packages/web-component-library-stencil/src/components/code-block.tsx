/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-code-block',
  styleUrl: 'code-block.scss',
  shadow: true,
})
export class CodeBlock {
  render() {
    return (
      <pre class="utrecht-code-block">
        <slot></slot>
      </pre>
    );
  }
}
