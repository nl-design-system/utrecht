/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */
import { Component, h } from "@stencil/core";

@Component({
  tag: "utrecht-html-content",
  styleUrl: "stencil.scss",
  shadow: false,
})
export class HTMLContent {
  render() {
    return (
      <div class="utrecht-html">
        <slot></slot>
      </div>
    );
  }
}
