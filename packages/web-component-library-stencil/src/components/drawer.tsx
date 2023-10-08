/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, h, Method, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-drawer',
  styleUrl: 'drawer.scss',
  shadow: true,
})
export class Drawer {
  @Prop() align: string;
  @Prop() open: boolean = false;

  dialogElement!: HTMLDialogElement;

  render() {
    const { align, open } = this;
    return (
      <dialog
        ref={(el) => (this.dialogElement = el as HTMLDialogElement)}
        class={clsx('utrecht-drawer', {
          'utrecht-drawer--block-end': align === 'block-end',
          'utrecht-drawer--block-start': align === 'block-start',
          'utrecht-drawer--inline-end': align === 'inline-end' || !align,
          'utrecht-drawer--inline-start': align === 'inline-start',
        })}
        open={open}
      >
        <slot></slot>
      </dialog>
    );
  }

  @Method()
  async close() {
    this.dialogElement?.close();
  }

  @Method()
  async showModal() {
    // Dialog must not be `open` initially, prevent the following error:
    // "Cannot call showModal() on an open non-modal dialog"
    // Close the dialog first, to transition from non-modal to modal.
    // Ideally we would't `close()` the dialog when we know the dialog is already modal.
    this.dialogElement?.close();
    this.dialogElement?.showModal();
  }
}
