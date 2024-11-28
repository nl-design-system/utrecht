import { Component, h } from '@stencil/core';

/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

@Component({
  tag: 'utrecht-page-body',
  styleUrl: 'page-body.scss',
  shadow: true,
})
export class PageBody {
  render() {
    return (
      <div>
        <slot></slot>
      </div>
    );
  }
}
