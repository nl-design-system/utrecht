/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Rijksoverheid
 * Copyright (c) 2021 Robbert Broersma
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
