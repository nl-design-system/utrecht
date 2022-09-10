/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-backdrop',
  styleUrl: 'index.scss',
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
