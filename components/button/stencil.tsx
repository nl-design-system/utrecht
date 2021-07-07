import { Component, Prop, h } from "@stencil/core";
import clsx from "clsx";

@Component({
  tag: "utrecht-button",
  styleUrl: "bem.scss",
  shadow: true,
})
export class Button {
  @Prop() disabled: boolean;

  render() {
    return (
      <button class={clsx("utrecht-button", this.disabled && "utrecht-button--disabled")} disabled={this.disabled}>
        <slot></slot>
      </button>
    );
  }
}
