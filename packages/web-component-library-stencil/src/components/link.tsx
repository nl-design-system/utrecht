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
  @Prop() download?: string;
  @Prop() href?: string;
  @Prop() hreflang?: string;
  @Prop() rel?: string;
  @Prop() target?: string;
  @Prop() label?: string;
  render() {
    const { download, href, hreflang, rel, target, label } = this;
    const externalRel = 'external noopener noreferrer';
    const combinedRel = external && rel ? `${rel} ${externalRel}` : external ? externalRel : rel;
    return (
      <a
        class="utrecht-link"
        download={download}
        href={href}
        hreflang={hreflang}
        rel={combinedRel}
        target={target}
        aria-label={label}
      >
        <slot></slot>
      </a>
    );
  }
}
