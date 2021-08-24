/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */
import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "utrecht-badge-status",
  styleUrl: "stencil.scss",
  shadow: true,
})
export class BadgeStatus {
  @Prop() status: string;

  render() {
    return (
      <div class={`utrecht-badge-status utrecht-badge-status--${this.status}`}>
        <slot></slot>
      </div>
    );
  }
}
