/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'utrecht-preserve-data',
  styleUrl: 'preserve-data.scss',

  // Do not use Shadow DOM, include these semantic elements in the document
  shadow: false,
})
export class PreserveData {
  @Prop({ attribute: 'datetime', reflect: true }) dateTime?: string;
  @Prop() value?: string;
  render() {
    const { dateTime, value } = this;

    return (
      <Host translate="no">
        {typeof dateTime !== 'undefined' ? (
          <time dateTime={dateTime}>
            <slot></slot>
          </time>
        ) : typeof value !== 'undefined' ? (
          <data value={value}>
            <slot></slot>
          </data>
        ) : (
          <slot></slot>
        )}
      </Host>
    );
  }
}
