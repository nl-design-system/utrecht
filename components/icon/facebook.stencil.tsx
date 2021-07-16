import { Component, h } from "@stencil/core";

@Component({
  tag: "utrecht-icon-facebook",
  shadow: true,
})
export class IconFacebook {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <title>Facebook</title>
        <g>
          <path
            fill="currentColor, black"
            d="M25.868,20.809l0.687-5.323h-5.271v-3.398c0-1.541,0.43-2.592,2.641-2.592h2.815v-4.76  c-0.487-0.065-2.158-0.209-4.107-0.209c-4.065,0-6.845,2.481-6.845,7.037v3.925h-4.597v5.322h4.597v13.658h5.494V20.811h4.585  L25.868,20.809L25.868,20.809z"
          />
        </g>
      </svg>
    );
  }
}
