/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-link-button',
  styleUrl: 'link-button.scss',
  shadow: true,
})
export class LinkButton {
  @Prop() disabled: boolean;
  @Prop() type: string;
  @Prop() inline: boolean;
  @Prop() pressed: boolean;
  render() {
    return (
      <button
        class={clsx(
          'utrecht-link-button',
          'utrecht-link-button--html-button',
          this.disabled && 'utrecht-link-button--disabled',
          this.inline && 'utrecht-link-button--inline',
          this.pressed && 'utrecht-link-button--pressed',
        )}
        disabled={this.disabled}
        aria-pressed={typeof this.pressed === 'boolean' ? this.pressed : undefined}
        type={this.type || 'button'}
      >
        <slot></slot>
      </button>
    );
  }
}
