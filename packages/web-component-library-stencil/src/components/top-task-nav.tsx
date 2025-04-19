/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-top-task-nav',
  styleUrl: 'top-task-nav.scss',
  shadow: true,
})
export class TopTaskNav {
  render() {
    // TODO: Add accessible name for navigation landmark,
    // using `aria-labelledby` and a heading.
    return (
      <nav class="utrecht-toptask-nav utrecht-toptask-nav--grid">
        <slot></slot>
      </nav>
    );
  }
}
