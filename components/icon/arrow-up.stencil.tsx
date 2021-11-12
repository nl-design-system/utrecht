import { Component, h } from "@stencil/core";

@Component({
  tag: "utrecht-icon-arrow-up",
  styleUrl: "stencil.scss",
  shadow: true,
})
export class ArrowUpIcon {
  render() {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="21.39px"
        height="14.39px"
        viewBox="0 0 21.39 14.39"
        enable-background="new 0 0 21.39 14.39"
      >
        <polyline
          fill="none"
          stroke="#1D1D1D"
          stroke-width="3"
          stroke-miterlimit="10"
          points="5.223,9.457 10.543,4.135 15.865,9.457 "
        />
      </svg>
    );
  }
}
