/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Rijksoverheid
 * Copyright (c) 2021 Robbert Broersma
 */

import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'utrecht-digid-button',
  styleUrl: 'index.scss',
  shadow: true,
})
export class DigidButton {
  @Prop() type: string;
  render() {
    return (
      <div class="utrecht-digid-button">
        <utrecht-digid-logo class="utrecht-digid-button__logo" />
        <slot></slot>
      </div>
    );
  }
}
