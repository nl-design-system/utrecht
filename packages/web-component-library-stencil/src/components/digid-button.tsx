/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 * Copyright (c) 2021 Rijksoverheid
 */

import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'utrecht-digid-button',
  styleUrl: 'digid-button.scss',
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
