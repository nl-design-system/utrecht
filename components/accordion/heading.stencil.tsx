/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */
import { Component, Event, EventEmitter, Prop, h } from "@stencil/core";
import clsx from "clsx";

const REL_NEXT = "next";
const REL_PREV = "prev";
const REL_FIRST = "first";
const REL_LAST = "last";

@Component({
  tag: "utrecht-accordion-heading",
  styleUrl: "stencil.scss",
  shadow: true,
})
export class AccordionHeading {
  @Prop({ reflect: true }) expanded: boolean = false;
  @Prop({ reflect: true }) disabled: boolean = false;
  @Event({ cancelable: true }) utrechtHeadingToggle: EventEmitter;
  @Event({ cancelable: true }) utrechtRequestFocusTarget: EventEmitter;
  render() {
    const { disabled, expanded } = this;
    const toggle = () => {
      if (!this.disabled) {
        this.expanded = !this.expanded;
        this.utrechtHeadingToggle.emit();
      }
    };
    const requestFocusTarget = (rel) => {
      console.log(`requestFocusTarget ${rel}`);
      this.utrechtRequestFocusTarget.emit({ rel });
    };
    return (
      <div
        class={clsx(
          "utrecht-accordion__heading",
          disabled && "utrecht-accordion__heading--disabled",
          expanded && "utrecht-accordion__heading--expanded",
          !expanded && "utrecht-accordion__heading--not-expanded"
        )}
        aria-disabled={!!disabled}
        aria-expanded={!!expanded}
        role="button"
        tabIndex={0}
        onClick={toggle}
        onKeyDown={(evt) => {
          console.log(evt.key);
          if (evt.key === "ArrowDown") {
            requestFocusTarget(REL_NEXT);
          } else if (evt.key === "ArrowUp") {
            requestFocusTarget(REL_PREV);
          } else if (evt.key === "Home") {
            requestFocusTarget(REL_FIRST);
          } else if (evt.key === "End") {
            requestFocusTarget(REL_LAST);
          }
        }}
        onKeyPress={(evt) => {
          console.log(evt.key);
          if (evt.key == " " || evt.key == "Enter") {
            toggle();
          } else if (evt.key === "ArrowDown") {
            requestFocusTarget(REL_NEXT);
          } else if (evt.key === "ArrowUp") {
            requestFocusTarget(REL_PREV);
          } else if (evt.key === "Home") {
            requestFocusTarget(REL_FIRST);
          } else if (evt.key === "End") {
            requestFocusTarget(REL_LAST);
          }
        }}
      >
        <slot></slot>
        {expanded ? (
          <utrecht-icon-expanded></utrecht-icon-expanded>
        ) : (
          <utrecht-icon-not-expanded></utrecht-icon-not-expanded>
        )}
      </div>
    );
  }
}
