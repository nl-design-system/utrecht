/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-pre-heading',
  styleUrl: 'pre-heading.scss',
  shadow: true,
})
export class PreHeading {
  render() {
    return (
      <p>
        <slot></slot>
      </p>
    );
  }
}
