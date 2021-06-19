import { Component, h } from "@stencil/core";

/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 */

@Component({
  tag: "utrecht-page-footer",
  styleUrl: "bem.css",
  shadow: true,
})
export class PageFooter {
  render() {
    return (
      <footer class="utrecht-page-footer">
        <slot></slot>
      </footer>
    );
  }
}
