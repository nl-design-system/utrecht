/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
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
