import { Component, h } from "@stencil/core";

/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 */

@Component({
  tag: "utrecht-page-header",
  styleUrl: "stencil.scss",
  shadow: true,
})
export class PageHeader {
  render() {
    return (
      <header class="utrecht-page-header">
        <div class="utrecht-page-header__content">
          <div class="utrecht-page-header__logo">
            <slot name="logo"></slot>
          </div>
          <div class="utrecht-page-header__lang">
            <slot name="lang"></slot>
          </div>
          <nav class="utrecht-page-header__nav">
            <slot name="nav"></slot>
          </nav>
          <slot></slot>
        </div>
      </header>
    );
  }
}
