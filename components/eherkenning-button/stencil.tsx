/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Rijksoverheid
 * Copyright (c) 2021 Robbert Broersma
 */

import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "utrecht-eherkenning-button",
  styleUrl: "stencil.scss",
  shadow: true,
})
export class EherkenningButton {
  @Prop() type: string;
  render() {
    return (
      <div class="utrecht-eherkenning-button">
        <utrecht-eherkenning-logo class="utrecht-eherkenning-button__logo"></utrecht-eherkenning-logo>
        <utrecht-button class="utrecht-eherkenning-button__button" type={this.type || null}>
          <slot></slot>
        </utrecht-button>
      </div>
    );
  }
}
