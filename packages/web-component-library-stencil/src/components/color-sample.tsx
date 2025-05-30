/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'utrecht-color-sample',
  styleUrl: 'color-sample.scss',
  shadow: true,
})
export class ColorSample {
  @Prop() color: string;
  render() {
    return (
      <Host style={{ color: this.color }}>
        <data value={this.color}>
          <slot></slot>
        </data>
      </Host>
    );
  }
}
