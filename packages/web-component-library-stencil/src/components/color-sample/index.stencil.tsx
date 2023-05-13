/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'utrecht-color-sample',
  styleUrl: 'index.scss',
  shadow: true,
})
export class ColorSample {
  @Prop() color: string;
  render() {
    // TODO: Support <data value={this.color}>
    // Currently the TypeScript definitions are insufficient to support this:
    // Property 'value' does not exist on type 'HTMLAttributes<HTMLDataElement>'.
    return (
      <Host style={{ color: this.color }}>
        <slot></slot>
      </Host>
    );
  }
}
