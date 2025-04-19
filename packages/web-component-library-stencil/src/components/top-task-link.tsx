/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'utrecht-top-task-link',
  styleUrl: 'top-task-link.scss',
  shadow: true,
})
export class TopTaskLink {
  @Prop() external?: boolean;
  @Prop() href: string;
  @Prop() target?: string;
  render() {
    return (
      <a
        class="utrecht-toptask-link"
        href={this.href}
        rel={this.external ? 'external noopener noreferrer' : undefined}
        target={this.target}
      >
        <span class="utrecht-toptask-link__icon">
          <slot name="icon"></slot>
        </span>
        <span class="utrecht-toptask-link__title">
          <slot></slot>
        </span>
      </a>
    );
  }
}
