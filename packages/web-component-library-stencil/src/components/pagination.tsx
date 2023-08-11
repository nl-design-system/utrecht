/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-pagination',
  styleUrl: 'pagination.scss',
  shadow: true,
})
export class Pagination {
  /**
   * Use `group` to use the `group` role instead of the `navigation` landmark role.
   *
   * Pagination usually is an ARIA landmark, so by default this component renders a `<nav>` element.
   * Sometimes pagination should not be a landmark, so there must be a way to opt out of this behavior.
   *
   * `<utrecht-pagination role="group">` would incorrectly apply the group role on the custom element too.
   *
   * Convention for boolean attributes is to be true by default, so `<utrecht-pagination nav="false">` would be unexpected.
   *
   * That's why we now use `<utrecht-pagination group>` to opt out of the navigation landmark.
   */
  @Prop() group: boolean;
  @Prop() links: string;
  @Prop() next: string;
  @Prop() prev: string;
  @Prop({ attribute: 'current-index' }) currentIndex: number;

  render() {
    const { currentIndex, group } = this;
    const links = typeof this.links === 'string' ? JSON.parse(this.links) : null;
    const next = typeof this.next === 'string' ? JSON.parse(this.next) : null;
    const prev = typeof this.prev === 'string' ? JSON.parse(this.next) : null;

    const RelativeLink = ({ disabled = false, href = '', rel = null, textContent = '', title = '' }) =>
      disabled ? (
        <span
          class={clsx(
            'utrecht-pagination__relative-link',
            disabled && 'utrecht-pagination__relative-link--disabled',
            rel === 'next' && 'utrecht-pagination__relative-link--next',
            rel === 'prev' && 'utrecht-pagination__relative-link--prev',
          )}
          aria-label={title || null}
        >
          {rel === 'next' && <slot name="next" />}
          {rel === 'prev' && <slot name="prev" />}
          {textContent}
        </span>
      ) : (
        <a
          href={href}
          class={clsx(
            'utrecht-pagination__relative-link',
            disabled && 'utrecht-pagination__relative-link--disabled',
            rel === 'next' && 'utrecht-pagination__relative-link--next',
            rel === 'prev' && 'utrecht-pagination__relative-link--prev',
          )}
          rel={rel}
          aria-label={title || null}
        >
          {textContent}
        </a>
      );

    const PageLink = ({ current = false, href = '', rel = null, textContent = '' }) => (
      <a
        class={clsx('utrecht-pagination__page-link', current && 'utrecht-pagination__page-link--current')}
        href={href}
        aria-current={current ? 'true' : null}
        rel={rel}
      >
        {textContent}
      </a>
    );

    return (
      <nav class="utrecht-pagination" role={group ? undefined : 'group'} aria-labelledby="heading">
        <div id="heading" class="utrecht-pagination__heading">
          <slot name="heading" />
        </div>
        <span class="utrecht-pagination__before">
          {prev ? RelativeLink({ ...prev, rel: 'prev', textContent: 'Vorige' }) : ''}
        </span>
        <span role="group" class="utrecht-pagination__pages">
          {links
            .sort((a, b) => (a.index === b.index ? 0 : a.index > b.index ? 1 : -1))
            .map((link, arrayIndex) => {
              const index = typeof link.index === 'number' ? link.index : arrayIndex;
              return {
                index,
                current: typeof currentIndex === 'number' && index === currentIndex,
                rel:
                  typeof currentIndex === 'number'
                    ? index === currentIndex + 1
                      ? 'next'
                      : index === currentIndex - 1
                      ? 'prev'
                      : null
                    : null,
                textContent: link.index || index,
                ...link,
              };
            })
            .map((link) => PageLink(link))}
        </span>
        <span class="utrecht-pagination__before">
          {next ? RelativeLink({ ...next, rel: 'next', textContent: 'Volgende' }) : ''}
        </span>
      </nav>
    );
  }
}
