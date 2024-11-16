/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-data-list',
  styleUrl: 'data-list.scss',
  shadow: true,
})
export class DataList {
  render() {
    return (
      <dl>
        <slot></slot>
      </dl>
    );
  }
}
