/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'utrecht-number-data',
  styleUrl: 'number-data.scss',
  shadow: true,
})
export class NumberData {
  @Prop() value: number | string;
  render() {
    const { value } = this;
    return typeof value === 'number' || typeof value === 'string' ? (
      // <data value={String(value)}>
      <data data-value={String(value)}>
        <slot></slot>
      </data>
    ) : (
      <span>
        <slot></slot>
      </span>
    );
  }
}
