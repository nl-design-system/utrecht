/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, h, Prop, State } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-progress-list-item',
  styleUrl: 'progress-list.scss',
  shadow: true,
})
export class StepProgressListItem {
  @Prop() checked: boolean = false;
  @Prop() from?: string;
  @Prop() to?: string;
  @Prop() appearance?: string;
  @Prop() details?: boolean = false;
  @State() _open?: boolean = false;
  render() {
    const { appearance, checked, details, from, _open, to } = this;
    return (
      <li
        class={clsx('denhaag-process-steps__step', {
          'denhaag-process-steps__step--checked': checked,
          'denhaag-process-steps__step--not-checked': !checked,
        })}
      >
        <div class="denhaag-process-steps__step-header">
          <div
            class={clsx('denhaag-step-marker', {
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
          {details ? (
            <utrecht-button
              onClick={() => (this._open = !this._open)}
              appearance="subtle-button"
              class="denhaag-process-steps__step-header-toggle"
              aria-controls="details"
              aria-expanded={_open ? 'true' : 'false'}
            >
              <p
                class={clsx('denhaag-process-steps__step-heading', {
                  'denhaag-process-steps__step-heading--checked': checked,
                })}
              >
                <slot />
              </p>
            </utrecht-button>
          ) : (
            <p
              class={clsx('denhaag-process-steps__step-heading', {
                'denhaag-process-steps__step-heading--checked': checked,
              })}
            >
              <slot />
            </p>
          )}
        </div>
        <div class={clsx('denhaag-process-steps__step-body')}>
          <div
            class={clsx(
              'denhaag-step-marker__connector',
              `denhaag-step-marker__connector--${appearance}`,
              `denhaag-step-marker__connector--${from}-to-${to}`,
            )}
          ></div>
          <div class="denhaag-process-steps__step-meta">
            <slot name="body" />
          </div>
        </div>
        <div
          id="details"
          class={clsx('denhaag-process-steps__step-details', !_open && 'denhaag-process-steps__step-details--hidden')}
        >
          <slot name="details" />
        </div>
      </li>
    );
  }
}
