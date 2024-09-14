import { Component, Element, Event, EventEmitter, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-button',
  styleUrl: 'index.scss',
  shadow: true,
})
export class Button {
  @Prop() appearance: string;
  @Prop() busy: boolean;
  @Prop() disabled: boolean;
  @Event({ cancelable: true }) utrechtRequestReset: EventEmitter;
  @Event({ cancelable: true }) utrechtRequestSubmit: EventEmitter;
  @Element() host: HTMLElement;
  @Prop() type: string;

  render() {
    const handleReset = () => {
      const event = this.utrechtRequestReset.emit();
      if (!event.defaultPrevented) {
        this.host?.closest('form')?.reset();
      }
    };

    const handleSubmit = () => {
      const event = this.utrechtRequestSubmit.emit();
      if (!event.defaultPrevented) {
        this.host?.closest('form')?.requestSubmit();
      }
    };

    const handleClick = () => {
      if (this.type === 'reset') {
        handleReset();
      } else if (this.type === 'submit') {
        handleSubmit();
      }
    };

    return (
      <button
        class={clsx(
          'utrecht-button',
          this.busy && 'utrecht-button--busy',
          this.disabled && 'utrecht-button--disabled',
          this.type === 'submit' && 'utrecht-button--submit',
          this.appearance === 'primary-action-button' && 'utrecht-button--primary-action',
          this.appearance === 'secondary-action-button' && 'utrecht-button--secondary-action',
          this.appearance === 'subtle-button' && 'utrecht-button--subtle',
        )}
        aria-busy={this.busy ? 'true' : null}
        disabled={this.disabled}
        type={this.type || 'button'}
        onClick={handleClick}
      >
        <slot></slot>
      </button>
    );
  }
}