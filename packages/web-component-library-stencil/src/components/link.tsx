/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'utrecht-link',
  styleUrl: 'link.scss',
  shadow: true,
})
export class Link {
  @Prop() download?: string;
  @Prop() href: string;
  @Prop() target?: string;

  @State() hasLabelSlot = false;

  private onLabelSlotChange = (event: Event) => {
    const slot = event.target as HTMLSlotElement;
    this.hasLabelSlot = slot.assignedNodes({ flatten: true }).length > 0;
  };

  render() {
    return (
      <a
        download={typeof this.download === 'string' ? this.download : undefined}
        href={typeof this.href === 'string' ? this.href : undefined}
        target={typeof this.target === 'string' ? this.target : undefined}
        class="utrecht-link utrecht-link--html-a"
      >
        <slot name="icon"></slot>
        {this.hasLabelSlot && (
          <span class="utrecht-link__label">
            <slot name="label" onSlotchange={this.onLabelSlotChange}></slot>
          </span>
        )}
        <slot></slot>
      </a>
    );
  }
}
