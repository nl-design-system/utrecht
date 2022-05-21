/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-radio-button',
  styleUrl: 'index.scss',
  shadow: true,
})
export class RadioButton {
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ attribute: 'readonly', reflect: true }) readOnly: boolean = false;
  @Prop() checked: boolean = false;
  @Prop() value: string = '';
  @Prop() labelledby: string = null;
  @Prop() describedby: string = null;
  @Event() utrechtBlur: EventEmitter;
  @Event() utrechtChange: EventEmitter;
  @Event() utrechtFocus: EventEmitter;
  @Event() utrechtInput: EventEmitter;

  render() {
    const { checked, disabled, value } = this;

    return (
      <input
        class={clsx('utrecht-radio-button')}
        type="radio"
        checked={checked}
        disabled={disabled}
        value={value}
        aria-labelledby={this.labelledby ? this.labelledby : undefined}
        aria-describedby={this.describedby ? this.describedby : undefined}
        onBlur={(evt) => this.utrechtBlur.emit(evt)}
        onChange={(evt) => this.utrechtChange.emit(evt)}
        onFocus={(evt) => this.utrechtFocus.emit(evt)}
        onInput={(evt) => {
          this.checked = (evt.target as HTMLInputElement).checked;
          this.utrechtInput.emit(evt);
        }}
      />
    );
  }
}
