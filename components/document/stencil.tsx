import { Component, h } from "@stencil/core";

@Component({
  tag: "utrecht-document",
  styleUrl: "bem.css",
  shadow: true,
})
export class Document {
  render() {
    return (
      <div class="utrecht-document">
        <slot></slot>
      </div>
    );
  }
}
