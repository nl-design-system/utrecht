/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-multiline-data',
  styleUrl: 'multiline-data.scss',
  shadow: true,
})
export class MultilineData {
  render() {
    return (
      <pre class="utrecht-multiline-data utrecht-multiline-data--html-pre">
        <slot></slot>
      </pre>
    );
  }
}
