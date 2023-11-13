/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-heading-group',
  styleUrl: 'heading-group.scss',
  shadow: true,
})
export class HeadingGroup {
  render() {
    return (
      <hgroup>
        <slot></slot>
      </hgroup>
    );
  }
}
