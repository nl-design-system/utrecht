/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-root',
  styleUrl: 'root.scss',
  // No shadow DOM, to affect the `<html>` and `<body>` element
  shadow: true,
})
export class Root {
  render() {
    return <slot></slot>;
  }
}
