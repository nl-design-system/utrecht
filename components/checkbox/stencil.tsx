/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { Component, Event, EventEmitter, Prop, h } from "@stencil/core";
import clsx from "clsx";

@Component({
  tag: "utrecht-checkbox",
  styleUrl: "bem.css",
  shadow: true,
})
export class Checkbox {
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ attribute: "readonly", reflect: true }) readOnly: boolean = false;
  @Prop() checked: boolean = false;
  @Prop() value: string = "";
  @Event() utrechtBlur: EventEmitter;
  @Event() utrechtChange: EventEmitter;
  @Event() utrechtFocus: EventEmitter;
  @Event() utrechtInput: EventEmitter;

  render() {
    const { checked, disabled, value } = this;

    return (
      <input
        class={clsx("utrecht-checkbox")}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        value={value}
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
