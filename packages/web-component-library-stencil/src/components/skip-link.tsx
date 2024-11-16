/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'utrecht-skip-link',
  styleUrl: 'skip-link.scss',
  shadow: true,
})
export class SkipLink {
  @Prop() href: string;
  render() {
    return (
      <a
        href={typeof this.href === 'string' ? this.href : undefined}
        class="utrecht-skip-link utrecht-skip-link--visible-on-focus"
      >
        <slot></slot>
      </a>
    );
  }
}
