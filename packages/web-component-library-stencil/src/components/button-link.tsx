/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, h, Prop } from '@stencil/core';
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
        <slot></slot>
      </a>
    );
  }
}
