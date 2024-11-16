/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
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
