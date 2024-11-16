/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 * Copyright (c) 2021 Rijksoverheid
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-logo-button',
  styleUrl: 'logo-button.scss',
  shadow: true,
})
export class DigidButton {
  render() {
    return (
      <div class="utrecht-logo-button">
        <slot></slot>
      </div>
    );
  }
}
