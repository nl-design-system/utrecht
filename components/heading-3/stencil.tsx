import { Component, h } from "@stencil/core";

@Component({
  tag: "utrecht-heading-3",
  styleUrl: "bem.css",
  shadow: true,
})
export class Heading3 {
  render() {
    return (
      <h3 class="utrecht-heading-3">
        <slot></slot>
      </h3>
    );
  }
}
