/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
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
