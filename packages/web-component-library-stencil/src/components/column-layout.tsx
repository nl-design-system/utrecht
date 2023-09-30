/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'utrecht-column-layout',
  styleUrl: 'column-layout.scss',
  shadow: true,
})
export class ColumnLayout {
  @Prop({ reflect: true }) rule: boolean = false;
  render() {
    return <slot></slot>;
  }
}
