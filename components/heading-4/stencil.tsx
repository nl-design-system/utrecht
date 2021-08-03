import { Component, h } from "@stencil/core";

@Component({
  tag: "utrecht-heading-4",
  styleUrl: "bem.css",
  shadow: true,
})
export class Heading4 {
  render() {
    return (
      <h4 class="utrecht-heading-4">
        <slot></slot>
      </h4>
    );
  }
}
