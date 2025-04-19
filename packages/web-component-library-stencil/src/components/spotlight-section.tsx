/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
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
          this.appearance === 'error' && 'utrecht-spotlight-section--error',
          this.appearance === 'info' && 'utrecht-spotlight-section--info',
          this.appearance === 'ok' && 'utrecht-spotlight-section--ok',
          this.appearance === 'warning' && 'utrecht-spotlight-section--warning',
        )}
      >
        <slot></slot>
      </div>
    );
  }
}
