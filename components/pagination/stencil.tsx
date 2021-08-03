/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { Component, Prop, h } from "@stencil/core";
import clsx from "clsx";

@Component({
  tag: "utrecht-pagination",
  styleUrl: "bem.scss",
  shadow: true,
})
export class Pagination {
  @Prop() links: string;
  @Prop() next: string;
  @Prop() prev: string;
  @Prop({ attribute: "current-index" }) currentIndex: number;

  render() {
    const { currentIndex } = this;
    const links = typeof this.links === "string" ? JSON.parse(this.links) : null;
    const next = typeof this.next === "string" ? JSON.parse(this.next) : null;
    const prev = typeof this.prev === "string" ? JSON.parse(this.next) : null;

    const RelativeLink = ({ disabled = false, href = "", rel = null, textContent = "", title = "" }) =>
      disabled ? (
        <span
          class={clsx(
            "utrecht-pagination__relative-link",
            disabled && "utrecht-pagination__relative-link--disabled",
            rel === "next" && "utrecht-pagination__relative-link--next",
            rel === "prev" && "utrecht-pagination__relative-link--prev"
          )}
          aria-label={title || null}
        >
          {textContent}
        </span>
      ) : (
        <a
          href={href}
          class={clsx(
            "utrecht-pagination__relative-link",
            disabled && "utrecht-pagination__relative-link--disabled",
            rel === "next" && "utrecht-pagination__relative-link--next",
            rel === "prev" && "utrecht-pagination__relative-link--prev"
          )}
          rel={rel}
          aria-label={title || null}
        >
          {textContent}
        </a>
      );

    const PageLink = ({ current = false, href = "", rel = null, textContent = "" }) => (
      <a
        class={clsx("utrecht-pagination__page-link", current && "utrecht-pagination__page-link--current")}
        href={href}
        aria-current={current ? "true" : null}
        rel={rel}
      >
        {textContent}
      </a>
    );

    return (
      <nav class="utrecht-pagination">
        <span class="utrecht-pagination__before">
          {prev ? RelativeLink({ ...prev, rel: "prev", textContent: "Vorige" }) : ""}
        </span>
        <span role="group" class="utrecht-pagination__pages">
          {links
            .sort((a, b) => (a.index === b.index ? 0 : a.index > b.index ? 1 : -1))
            .map((link, arrayIndex) => {
              const index = typeof link.index === "number" ? link.index : arrayIndex;
              return {
                index,
                current: typeof currentIndex === "number" && index === currentIndex,
                rel:
                  typeof currentIndex === "number"
                    ? index === currentIndex + 1
                      ? "next"
                      : index === currentIndex - 1
                      ? "prev"
                      : null
                    : null,
                textContent: link.index || index,
                ...link,
              };
            })
            .map((link) => PageLink(link))}
        </span>
        <span class="utrecht-pagination__before">
          {next ? RelativeLink({ ...next, rel: "next", textContent: "Volgende" }) : ""}
        </span>
      </nav>
    );
  }
}
