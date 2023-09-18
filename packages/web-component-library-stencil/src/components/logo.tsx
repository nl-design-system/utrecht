/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2023 Gemeente Utrecht
 * Copyright (c) 2020-2023 Frameless B.V.
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-logo',
  styleUrl: './logo.scss',
  shadow: true,
})
export class Logo {
  render() {
    return <slot></slot>;
  }
}
