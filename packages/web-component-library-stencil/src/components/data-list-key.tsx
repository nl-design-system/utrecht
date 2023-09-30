/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-data-list-key',
  styleUrl: 'data-list-key.scss',
  shadow: true,
})
export class DataListValue {
  render() {
    return (
      <dt>
        <slot></slot>
      </dt>
    );
  }
}
