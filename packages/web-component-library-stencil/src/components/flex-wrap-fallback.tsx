/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, Element, h, Prop, State } from '@stencil/core';

/**
 * Checks if an element has `flex-wrap: wrap` and the content wraps over multiple lines
 */
const hasFlexboxWrap = (el: Element) => {
  const win = el?.ownerDocument?.defaultView;

  const style = win?.getComputedStyle(el);

  if (style && style.getPropertyValue('flex-wrap') === 'wrap' && style.getPropertyValue('display') === 'flex') {
    // TODO: Account for writing-mode vertical
    return el.firstElementChild.getBoundingClientRect().top !== el.lastElementChild.getBoundingClientRect().top;
  } else {
    return false;
  }
};

@Component({
  tag: 'utrecht-flex-wrap-fallback',
  styleUrl: 'flex-wrap-fallback.scss',
  shadow: true,
})
export class FlexWrapFallback {
  @Element() hostElement: HTMLElement;

  /* ID reference for element with `display: flex;` or `display: inline-flex` and `flex-wrap: wrap` */
  @Prop({ attribute: 'flextarget', reflect: true }) flexTarget?: string;
  @State() resizeObserver: ResizeObserver;
  @State() contentWraps: boolean;

  connectedCallback() {
    if (!this.resizeObserver) {
      this.resizeObserver = new ResizeObserver(() => {
        // TODO: Support updating `flextarget` attribute, switch ResizeObserver to match
        // TODO: Escape ID selector CSS query
        const cssSelector = this.flexTarget ? `#${this.flexTarget}` : ':not([slot])';
        const flexTargetEl = this.hostElement.querySelector(cssSelector);
        console.log(cssSelector, flexTargetEl);
        this.contentWraps = !!flexTargetEl && hasFlexboxWrap(flexTargetEl);
      });
    }

    this.resizeObserver.observe(this.hostElement);
  }

  disconnectedCallback() {
    this.resizeObserver?.unobserve(this.hostElement);
  }
  render() {
    const { contentWraps } = this;
    return (
      <div>
        <div
          id="wrap"
          class={`utrecht-flex-wrap-fallback__content ${
            contentWraps ? 'utrecht-flex-wrap-fallback__content--hidden' : ''
          }`}
          data-inert={contentWraps}
          aria-hidden={contentWraps}
        >
          <slot></slot>
        </div>
        <div
          id="nowrap"
          class={`utrecht-flex-wrap-fallback__fallback ${
            contentWraps ? '' : 'utrecht-flex-wrap-fallback__fallback--hidden'
          }`}
          data-inert={!contentWraps}
          hidden={!contentWraps}
        >
          <slot name="fallback"></slot>
        </div>
      </div>
    );
  }
}
