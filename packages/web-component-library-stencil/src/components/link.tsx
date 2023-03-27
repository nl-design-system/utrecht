/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'utrecht-link',
  styleUrl: 'link.scss',
  shadow: true,
})
export class Link {
  @Prop() href: string;
  render() {
    return (
      <a href={typeof this.href === 'string' ? this.href : undefined} class="utrecht-link">
        <slot></slot>
      </a>
    );
  }
}
