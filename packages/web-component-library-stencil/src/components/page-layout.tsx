import { Component, h } from '@stencil/core';

/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

@Component({
  tag: 'utrecht-page-layout',
  styleUrl: 'page-layout.scss',
  shadow: true,
})
export class PageLayout {
  render() {
    return <slot></slot>;
  }
}
