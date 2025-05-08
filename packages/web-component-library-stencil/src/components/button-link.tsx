/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Component, h, Prop, State } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-button-link',
  styleUrl: 'button-link.scss',
  shadow: true,
})
export class ButtonLink {
  @Prop() appearance: string;
  @Prop() download?: string;
  @Prop() external: boolean;
  @Prop() href: string;
  @Prop() placeholder: boolean;
  @Prop() target?: string;
  @State() hasLabelSlot = false;

  private onLabelSlotChange = (event: Event) => {
    const slot = event.target as HTMLSlotElement;
    this.hasLabelSlot = slot.assignedNodes({ flatten: true }).length > 0;
  };

  render() {
    return (
      <a
        href={typeof this.href === 'string' && !this.placeholder ? this.href : undefined}
        class={clsx(
          'utrecht-button-link',
          'utrecht-button-link--html-a',
          this.external && 'utrecht-button-link--external',
          this.placeholder && 'utrecht-button-link--placeholder',
          this.appearance === 'primary-action-button' && 'utrecht-button-link--primary-action',
          this.appearance === 'secondary-action-button' && 'utrecht-button-link--secondary-action',
          this.appearance === 'subtle-button' && 'utrecht-button-link--subtle',
        )}
        aria-disabled={this.placeholder ? 'true' : undefined}
        download={typeof this.download === 'string' ? this.download : undefined}
        rel={this.external ? 'external noopener noreferrer' : undefined}
        role={this.placeholder ? 'link' : undefined}
        target={typeof this.target === 'string' ? this.target : undefined}
      >
        <slot name="icon"></slot>
        {this.hasLabelSlot && (
          <span class="utrecht-button-link__label">
            <slot name="label" onSlotchange={this.onLabelSlotChange}></slot>
          </span>
        )}
        <slot></slot>
      </a>
    );
  }
}
