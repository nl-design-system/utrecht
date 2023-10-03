/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'utrecht-form',
  styleUrl: 'form.scss',
  shadow: false,
})
export class Form {
  @Prop() action?: string;
  @Prop() autocomplete?: string;
  @Prop() enctype?: string;
  @Prop() method?: string;
  @Prop({ attribute: 'novalidate' }) noValidate?: string;
  @Prop() target?: string;
  render() {
    const { action, autocomplete, enctype, method, target, noValidate } = this;
    const headingId = '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (n) => {
      const c = parseInt(n, 10);
      return (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16);
    });

    return (
      <form
        action={action}
        aria-labelledby={headingId}
        autocomplete={autocomplete}
        enctype={enctype}
        method={method}
        novalidate={noValidate}
        target={target}
      >
        <div class="utrecht-form__heading" id={headingId}>
          <slot name="heading" />
        </div>
        <slot></slot>
      </form>
    );
  }
}
