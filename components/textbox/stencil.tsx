/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { Component, Event, EventEmitter, Prop, h } from "@stencil/core";
import clsx from "clsx";

@Component({
  tag: "utrecht-textbox",
  styleUrl: "bem.scss",
  shadow: true,
})
export class Textbox {
  @Prop({ attribute: "autocomplete", reflect: true }) autoComplete: string = "";
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) invalid: boolean = false;
  @Prop() min: string = "";
  @Prop() max: string = "";
  @Prop() pattern: string = "";
  @Prop() placeholder: string = "";
  @Prop({ attribute: "readonly", reflect: true }) readOnly: boolean = false;
  @Prop({ reflect: true }) required: boolean = false;
  @Prop({ reflect: true }) type: string = "";
  @Prop() value: string = "";
  @Event() utrechtBlur: EventEmitter;
  @Event() utrechtChange: EventEmitter;
  @Event() utrechtFocus: EventEmitter;
  @Event() utrechtInput: EventEmitter;

  render() {
    const { autoComplete, disabled, invalid, min, max, pattern, placeholder, readOnly, required, type, value } = this;

    return (
      <input
        class={clsx(
          "utrecht-textbox",
          disabled && "utrecht-textbox--disabled",
          invalid && "utrecht-textbox--invalid",
          readOnly && "utrecht-textbox--readonly"
        )}
        type={type || "text"}
        autoComplete={autoComplete}
        disabled={disabled}
        min={min}
        max={max}
        pattern={pattern}
        placeholder={placeholder || null}
        readonly={readOnly}
        required={required}
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
