import { Component, h } from "@stencil/core";

@Component({
  tag: "utrecht-separator",
  styleUrl: "bem.css",
  shadow: true,
})
export class Separator {
  render() {
    return <hr class="utrecht-separator" />;
  }
}
