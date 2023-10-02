/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-progress-list',
  styleUrl: 'progress-list.scss',
  shadow: true,
})
export class StepProgressList {
  render() {
    return (
      <ol class="denhaag-process-steps">
        <slot></slot>
      </ol>
    );
  }
}
