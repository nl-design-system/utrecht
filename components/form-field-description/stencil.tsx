/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { Component, h, Prop } from "@stencil/core";
import clsx from "clsx";

@Component({
  tag: "utrecht-form-field-description",
  styleUrl: "stencil.scss",
  shadow: true,
})
export class FormFieldDescription {
  @Prop({ attribute: "status", reflect: true }) status?: string = null;

  render() {
    const { status } = this;

    return (
      <div
        class={clsx(
          "utrecht-form-field-description",
          status === "valid" && "utrecht-form-field-description--valid",
          status === "invalid" && "utrecht-form-field-description--invalid"
        )}
      >
        <slot></slot>
      </div>
    );
  }
}
