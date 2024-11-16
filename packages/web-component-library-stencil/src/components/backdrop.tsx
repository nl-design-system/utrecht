/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-backdrop',
  styleUrl: 'backdrop.scss',
  shadow: true,
})
export class Backdrop {
  @Prop() viewport: boolean;
  render() {
    const { viewport } = this;
    return (
      <div class={clsx('utrecht-backdrop', viewport && 'utrecht-backdrop--viewport')}>
        <slot />
      </div>
    );
  }
}
