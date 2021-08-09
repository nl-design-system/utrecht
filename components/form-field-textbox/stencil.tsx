/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { Component, Event, EventEmitter, Prop, State, h } from "@stencil/core";
import clsx from "clsx";

@Component({
  tag: "utrecht-form-field-textbox",
  styleUrl: "stencil.scss",
  shadow: true,
})
export class FormFieldTextbox {
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
      <div class="utrecht-form-field-textbox">
        <input
          id="input"
          class={clsx(
            "utrecht-textbox",
            disabled && "utrecht-textbox--disabled",
            invalid && "utrecht-textbox--invalid",
            readOnly && "utrecht-textbox--readonly"
          )}
          type="text"
          disabled={disabled}
          placeholder={placeholder || null}
          readonly={readOnly}
          value={value}
          onBlur={(evt) => this.utrechtBlur.emit(evt)}
          onChange={(evt) => this.utrechtChange.emit(evt)}
          onFocus={(evt) => this.utrechtFocus.emit(evt)}
          onInput={(evt) => {
            this.value = (evt.target as HTMLInputElement).value;
            this.utrechtInput.emit(evt);
          }}
        />
        <label class="utrecht-form-field-textbox__label utrecht-form-label" htmlFor="input">
          <slot></slot>
        </label>
      </div>
    );
  }
}
