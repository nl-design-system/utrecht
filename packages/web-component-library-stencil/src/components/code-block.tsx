/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
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
