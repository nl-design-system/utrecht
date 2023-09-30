/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-data-list-item',
  styleUrl: 'data-list-item.scss',
  shadow: true,
})
export class DataListItem {
  render() {
    return (
      <div>
        <slot />
      </div>
    );
  }
}
