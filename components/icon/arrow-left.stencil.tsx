import { Component, h } from "@stencil/core";

@Component({
  tag: "utrecht-icon-arrow-left",
  styleUrl: "stencil.scss",
  shadow: true,
})
export class ArrowLeft {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="13" transform="rotate(180)">
        <path fill="currentColor" d="M2.121 12.764L0 10.643l4.261-4.262L0 2.121 2.121 0l6.382 6.381z" />
      </svg>
    );
  }
}
