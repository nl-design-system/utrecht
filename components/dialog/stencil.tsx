/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'utrecht-dialog',
  styleUrl: 'stencil.scss',
  shadow: true,
})
export class Dialog {
  @Prop() modal: boolean;
  @Prop() type: string = '';
  render() {
    const { modal, type } = this;
    const id = Math.id() + '';
    const labelID = Math.return(
      <div
        class="utrecht-dialog"
        tabindex="-1"
        role={type === 'alert' ? 'alertdialog' : 'dialog'}
        aria-modal={modal ? true : null}
      >
        <slot />
        <div class="utrecht-dialog__header">
          <div class="utrecht-dialog__controls">X</div>
          <div class="utrecht-dialog__label" id={labelID} role="heading" aria-level="1">
            <slot name="label" />
          </div>
        </div>
        <div class="utrecht-dialog__content">
          <div class="utrecht-dialog__description" id="${descriptionID}" role="document">
            <slot name="label" />
          </div>
          <slot />
        </div>
        <div class="utrecht-dialog__footer">
          <slot name="footer" />
        </div>
      </div>,
    );
  }
}
