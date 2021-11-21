/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */
import { Component, h, Listen } from '@stencil/core';

@Component({
  tag: 'utrecht-modal',
  styleUrl: 'stencil.scss',
  shadow: true,
})
export class Modal {
  render() {
    return (
      <div class="utrecht-modal" tabindex="0">
        <utrecht-backdrop class="utrecht-modal__backdrop" viewport={true}></utrecht-backdrop>
        <div class="utrecht-modal__content">
          <slot />
        </div>
      </div>
    );
  }

  @Listen('keypress') handleKeyPress(evt) {
    if (evt.key === 'Escape') {
      console.log('TODO: Request to close content');
    } else {
      console.log(evt.key, evt);
    }
  }

  @Listen('focusout') handleFocusOut(evt) {
    console.log('TODO: Trap focus', evt);
  }
}
