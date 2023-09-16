/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-textarea',
  styleUrl: 'textarea.scss',
  shadow: true,
})
export class Textarea {
  // TODO: Support `autoComplete` when TypeScript types from Stencil support all actual DOM properties
  // TODO: Support `spellCheck` when TypeScript types from Stencil support all actual DOM properties
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) invalid: boolean = false;
  @Prop() placeholder: string = '';
  @Prop({ attribute: 'readonly', reflect: true }) readOnly: boolean = false;
  @Prop({ reflect: true }) required: boolean = false;
  @Prop() value: string = '';
  @Event() utrechtBlur: EventEmitter;
  @Event() utrechtChange: EventEmitter;
  @Event() utrechtFocus: EventEmitter;
  @Event() utrechtInput: EventEmitter;

  render() {
    const { disabled, invalid, placeholder, readOnly, required, value } = this;

    return (
      <textarea
        class={clsx(
          'utrecht-textarea',
          'utrecht-textarea--html-textarea',
          disabled && 'utrecht-textarea--disabled',
          invalid && 'utrecht-textarea--invalid',
          readOnly && 'utrecht-textarea--readonly',
        )}
        disabled={disabled}
        placeholder={placeholder || null}
        readonly={readOnly}
        required={required}
        value={value}
        onBlur={(evt) => this.utrechtBlur.emit(evt)}
        onChange={(evt) => this.utrechtChange.emit(evt)}
        onFocus={(evt) => this.utrechtFocus.emit(evt)}
        onInput={(evt) => {
          this.value = (evt.target as HTMLTextAreaElement).value;
          this.utrechtInput.emit(evt);
        }}
      >
        <slot />
      </textarea>
    );
  }
}
