/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-action-group',
  styleUrl: 'action-group.scss',
  shadow: true,
})
export class actionGroup {
  @Prop() direction: string | 'column' | 'row';
  render() {
    const { direction } = this;
    return (
      <div
        class={clsx('utrecht-action-group', {
          'utrecht-action-group--column': direction === 'column',
          'utrecht-action-group--row': direction === 'row',
        })}
      >
        <slot></slot>
      </div>
    );
  }
}
