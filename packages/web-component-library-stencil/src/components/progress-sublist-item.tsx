/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-progress-sublist-item',
  styleUrl: 'progress-list.scss',
  shadow: true,
})
export class StepProgressSublistItem {
  @Prop() appearance?: string;
  @Prop() checked?: boolean = false;
  render() {
    const { appearance, checked } = this;
    return (
      <li class={clsx('denhaag-process-steps__sub-step', `denhaag-process-steps__sub-step--${appearance}`)}>
        <div class="denhaag-process-steps__step-header">
          <div
            class={clsx('denhaag-step-marker', 'denhaag-step-marker--nested', {
              'denhaag-step-marker--checked': checked,
              'denhaag-step-marker--not-checked': !checked,
            })}
          >
            <slot name="marker" />
            {checked && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                class="denhaag-icon"
                focusable="false"
                aria-hidden="true"
                shape-rendering="auto"
              >
                <path
                  d="M20.664 5.253a1 1 0 01.083 1.411l-10.666 12a1 1 0 01-1.495 0l-5.333-6a1 1 0 011.494-1.328l4.586 5.159 9.92-11.16a1 1 0 011.411-.082z"
                  stroke="currentColor"
                  stroke-width="1.75"
                ></path>
              </svg>
            )}
          </div>
          <p
            class={clsx('denhaag-process-steps__sub-step-heading', {
              'denhaag-process-steps__sub-step-heading--checked': checked,
            })}
          >
            <slot />
          </p>
        </div>
      </li>
    );
  }
}
