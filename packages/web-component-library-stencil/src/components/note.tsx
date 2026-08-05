/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-note',
  styleUrl: 'note.scss',
  shadow: true,
})
export class Note {
  @Prop() purpose: string;
  render() {
    return (
      <section
        role="note"
        class={clsx(
          'utrecht-note',
          this.purpose === 'error' && 'utrecht-note--error',
          this.purpose === 'info' && 'utrecht-note--info',
          this.purpose === 'success' && 'utrecht-note--success',
          this.purpose === 'warning' && 'utrecht-note--warning',
        )}
      >
        <slot></slot>
      </section>
    );
  }
}
