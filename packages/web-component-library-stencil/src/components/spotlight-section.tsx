/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-spotlight-section',
  styleUrl: 'spotlight-section.scss',
  shadow: true,
})
export class SpotlightSection {
  @Prop() appearance: string;
  render() {
    return (
      <div
        class={clsx(
          'utrecht-spotlight-section',
          this.appearance === 'info' && 'utrecht-spotlight-section--info',
          this.appearance === 'warning' && 'utrecht-spotlight-section--warning',
        )}
      >
        <slot></slot>
      </div>
    );
  }
}
