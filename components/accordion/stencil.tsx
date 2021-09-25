/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */
import { Component, Event, EventEmitter, Element, Listen, h } from "@stencil/core";

const REL_NEXT = "next";
const REL_PREV = "prev";
const REL_FIRST = "first";
const REL_LAST = "last";

const isElement = (node: Node): node is HTMLElement => node.nodeType === 1;

@Component({
  tag: "utrecht-accordion",
  styleUrl: "stencil.scss",
  shadow: true,
})
export class Accordion {
  @Event({ cancelable: true }) utrechtToggle: EventEmitter;
  @Element() host: HTMLElement;

  @Listen("utrechtHeadingToggle", { capture: true })
  handleClick() {
    console.log("TODO: Handle uniqueness constraint");
    const current = null;

    this.getSections()
      .filter((section) => section !== current)
      .filter((section) => section.getAttribute("expanded") === "true")
      .forEach((section) => {
        section.removeAttribute("expanded");
      });
  }

  @Listen("utrechtRequestFocusTarget", { capture: true })
  handleRequestFocus(evt) {
    let target = null;
    const sections = this.getSections();
    const current = null;
    const currentIndex = sections.indexOf(current);

    const expandAndFocus = (target) => {
      target.focus();

      if (typeof target.expanded == "boolean") {
        target.expanded = true;
      }
    };

    if (currentIndex === -1) {
      target = null;
    } else if (evt.rel === REL_PREV) {
      // Prevent out of bounds array lookup by checking `currentIndex`
      target = currentIndex > 0 ? sections[currentIndex - 1] : null;
    } else if (evt.rel === REL_NEXT) {
      target = currentIndex < sections.length - 2 ? sections[currentIndex + 1] : null;
    } else if (evt.rel === REL_FIRST) {
      target = sections[0] || null;
    } else if (evt.rel === REL_LAST) {
      target = sections[sections.length - 1] || null;
    }

    if (target) {
      expandAndFocus(target);
      evt.preventDefault();
    }
  }

  getSections(): HTMLElement[] {
    return Array.from(this.host.childNodes)
      .filter(isElement)
      .filter((el) => el.localName === "utrecht-accordion-panel");
  }

  render() {
    return (
      <div class="utrecht-accordion">
        <slot></slot>
      </div>
    );
  }
}
