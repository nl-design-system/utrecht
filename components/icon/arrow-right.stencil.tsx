import { Component, h } from "@stencil/core";

@Component({
  tag: "utrecht-icon-arrow-right",
  styleUrl: "stencil.scss",
  shadow: true,
})
export class ArrowRight {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="13">
        <path fill="currentColor" d="M2.121 12.764L0 10.643l4.261-4.262L0 2.121 2.121 0l6.382 6.381z" />
      </svg>
    );
  }
}
