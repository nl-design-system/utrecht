/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { Component, Event, EventEmitter, Prop, State, h } from "@stencil/core";
import clsx from "clsx";

@Component({
  tag: "utrecht-textbox",
  styleUrl: "bem.scss",
  shadow: true,
})
export class Textbox {
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) invalid: boolean = false;
  @Prop({ attribute: "readonly", reflect: true }) readOnly: boolean = false;
  @Prop() placeholder: string = "";
  @State() value: string = "";
  @Event() utrechtBlur: EventEmitter;
  @Event() utrechtChange: EventEmitter;
  @Event() utrechtFocus: EventEmitter;
  @Event() utrechtInput: EventEmitter;

  render() {
    const { disabled, invalid, placeholder, readOnly, value } = this;

    return (
      <input
        class={clsx(
          "utrecht-textbox",
          disabled && "utrecht-textbox--disabled",
          invalid && "utrecht-textbox--invalid",
          readOnly && "utrecht-textbox--readonly"
        )}
        type="text"
        disabled={disabled}
        placeholder={placeholder || null}
        readOnly={readOnly}
        value={value}
        onBlur={(evt) => this.utrechtBlur.emit(evt)}
        onChange={(evt) => this.utrechtChange.emit(evt)}
        onFocus={(evt) => this.utrechtFocus.emit(evt)}
        onInput={(evt) => {
          this.value = (evt.target as HTMLInputElement).value;
          this.utrechtInput.emit(evt);
        }}
      />
    );
  }
}
