/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
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
