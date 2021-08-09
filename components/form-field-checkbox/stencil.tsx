/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { Component, Event, EventEmitter, Prop, State, h } from "@stencil/core";
import clsx from "clsx";

@Component({
  tag: "utrecht-form-field-checkbox",
  styleUrl: "stencil.scss",
  shadow: true,
})
export class FormFieldCheckbox {
  @Prop() label: boolean = false;
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ attribute: "readonly", reflect: true }) readOnly: boolean = false;
  @State() checked: boolean = false;
  @State() value: string = "";
  @Event() utrechtBlur: EventEmitter;
  @Event() utrechtChange: EventEmitter;
  @Event() utrechtFocus: EventEmitter;
  @Event() utrechtInput: EventEmitter;

  render() {
    const { checked, disabled, value } = this;

    return (
      <div class="utrecht-form-field-checkbox">
        <input
          id="input"
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
        <label
          class={clsx("utrecht-form-field-checkbox__label", "utrecht-form-label", "utrecht-form-label--checkbox")}
          htmlFor="input"
        >
          <slot></slot>
        </label>
      </div>
    );
  }
}
