/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-button-group',
  styleUrl: 'button-group.scss',
  shadow: true,
})
export class ButtonGroup {
  @Prop() direction: string | 'column' | 'row';
  render() {
    const { direction } = this;
    return (
      <div
        class={clsx('utrecht-button-group', {
          'utrecht-button-group--column': direction === 'column',
          'utrecht-button-group--row': direction === 'row',
        })}
      >
        <slot></slot>
      </div>
    );
  }
}
