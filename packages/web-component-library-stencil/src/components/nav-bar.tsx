import { Component, h, Prop } from '@stencil/core';

/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

@Component({
  tag: 'utrecht-nav-bar',
  styleUrl: 'nav-bar.scss',
  shadow: true,
})
export class NavBar {
  @Prop() sticky: boolean = false;

  render() {
    return (
      <div>
        <slot></slot>
      </div>
    );
  }
}
