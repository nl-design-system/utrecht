/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */
import { Component, Prop, h } from "@stencil/core";
import clsx from "clsx";

@Component({
  tag: "utrecht-accordion-panel",
  styleUrl: "stencil.scss",
  shadow: true,
})
export class AccordionPanel {
  @Prop({ reflect: true }) expanded: boolean = false;
  render() {
    const { expanded } = this;
    return (
      <div
        class={clsx(
          "utrecht-accordion__panel",
          expanded && "utrecht-accordion__panel--expanded",
          !expanded && "utrecht-accordion__panel--not-expanded"
        )}
      >
        <slot></slot>
      </div>
    );
  }
}
