/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-article',
  styleUrl: 'index.scss',
  shadow: true,
})
export class Article {
  render() {
    return (
      <article class="utrecht-article">
        <slot></slot>
      </article>
    );
  }
}
