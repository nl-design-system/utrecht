/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */
import { Component, Element, Event, EventEmitter, Listen, Prop, h } from "@stencil/core";
import clsx from "clsx";

const isElement = (node: Node): node is HTMLElement => node.nodeType === 1;

@Component({
  tag: "utrecht-accordion-section",
  styleUrl: "stencil.scss",
  shadow: true,
})
export class AccordionSection {
  @Prop({ reflect: true }) expanded: boolean = false;
  @Event({ cancelable: true }) utrechtToggle: EventEmitter;
  @Element() host: HTMLElement;

  @Listen("utrechtHeadingToggle", { capture: true })
  handleHeadingToggle(evt) {
    if (this.expanded !== !!evt.target.expanded) {
      this.expanded = !!evt.target.expanded;
      this.utrechtToggle.emit();
      this.updatePanels(this.expanded);
    }
  }
  updatePanels(expanded: boolean) {
    if (this.host) {
      const panels = this.getPanels();
      panels.forEach((panel) => {
        if (expanded) {
          panel.setAttribute("expanded", "");
        } else {
          panel.removeAttribute("expanded");
        }
      });
    }
  }
  getPanels(): HTMLElement[] {
    return Array.from(this.host.childNodes)
      .filter(isElement)
      .filter((el) => el.localName === "utrecht-accordion-panel");
  }

  render() {
    const { expanded } = this;
    return (
      <div
        class={clsx(
          "utrecht-accordion__section",
          expanded && "utrecht-accordion__section--expanded",
          !expanded && "utrecht-accordion__section--not-expanded"
        )}
      >
        <slot></slot>
      </div>
    );
  }
}
