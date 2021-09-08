import { Component, h } from "@stencil/core";

@Component({
  tag: "utrecht-icon-list",
  styleUrl: "stencil.scss",
  shadow: true,
})
export class IconList {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24">
        <title>List</title>
        <rect x="6" y="18" width="13" height="2" rx="0.5" fill="currentColor" />
        <rect x="6" y="12" width="13" height="2" rx="0.5" fill="currentColor" />
        <rect x="6" y="6" width="13" height="2" rx="0.5" fill="currentColor" />
        <circle cx="3" cy="7" r="1" fill="currentColor" />
        <circle cx="3" cy="13" r="1" fill="currentColor" />
        <circle cx="3" cy="19" r="1" fill="currentColor" />
      </svg>
    );
  }
}
