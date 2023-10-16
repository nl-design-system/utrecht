import { Component, Element, Event, EventEmitter, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {
  @Prop() appearance: string;
  @Prop() busy: boolean;
  @Prop() disabled: boolean;
  @Prop() expanded: boolean | string | 'false' | 'true';
  @Prop() pressed: boolean | string | 'false' | 'true';
  @Prop({ attribute: 'readonly', reflect: true }) form: string;
  @Prop({ attribute: 'formaction', reflect: true }) formAction: string;
  @Prop({ attribute: 'formenctype', reflect: true }) formEnctype: string;
  @Prop({ attribute: 'formmethod', reflect: true }) formMethod: string;
  @Prop({ attribute: 'formnovalidate', reflect: true }) formNoValidate: boolean;
  @Prop({ attribute: 'formtarget', reflect: true }) formTarget: string;
  @Prop({ attribute: 'popovertarget', reflect: true }) popoverTarget: string;
  @Prop({ attribute: 'popovertargetaction', reflect: true }) popoverTargetAction: string;
  @Prop() name: string;
  @Prop() value: string;
  @Event({ cancelable: true }) utrechtRequestReset: EventEmitter;
  @Event({ cancelable: true }) utrechtRequestSubmit: EventEmitter;
  @Element() hostElement: HTMLElement;
  @Prop() type: string;

  render() {
    const handleReset = () => {
      const event = this.utrechtRequestReset.emit();
      if (!event.defaultPrevented) {
        this.hostElement?.closest('form')?.reset();
      }
    };

    const handleSubmit = () => {
      const event = this.utrechtRequestSubmit.emit();
      if (!event.defaultPrevented) {
        this.hostElement?.closest('form')?.requestSubmit();
      }
    };

    const handleClick = () => {
      if (this.type === 'reset') {
        handleReset();
      } else if (this.type === 'submit') {
        handleSubmit();
      } else {
        const button = this.hostElement.querySelector('button[hidden]') as HTMLButtonElement | null;
        if (button) {
          button.click();
        }
      }
    };

    const {
      hostElement,
      expanded,
      pressed,
      name,
      value,
      form,
      formAction,
      formEnctype,
      formTarget,
      formNoValidate,
      formMethod,
      popoverTargetAction,
      popoverTarget,
      type,
    } = this;

    let button = hostElement.querySelector('button[hidden]') as HTMLButtonElement | null;

    const needsButton = !!(
      name ||
      form ||
      formTarget ||
      formEnctype ||
      formMethod ||
      formNoValidate ||
      popoverTarget ||
      popoverTargetAction ||
      type === 'submit'
    );
    if (button && !needsButton) {
      button.parentNode.removeChild(button);
    }

    if (!button && needsButton) {
      button = hostElement.ownerDocument.createElement('button');
      button.hidden = true;
      button.tabIndex = -1;
      button.ariaHidden = 'true';
      hostElement.appendChild(button);
    }

    const setAttribute = (el: HTMLElement, name: string, value?: string | null) => {
      if (typeof value === 'string') {
        el.setAttribute(name, value);
      } else {
        el.removeAttribute(name);
      }
    };

    if (button) {
      setAttribute(button, 'name', name);
      setAttribute(button, 'type', type);
      setAttribute(button, 'form', form);
      setAttribute(button, 'formaction', formAction);
      setAttribute(button, 'form', form);
      setAttribute(button, 'formtarget', formTarget);
      setAttribute(button, 'formenctype', formEnctype);
      setAttribute(button, 'formmethod', formMethod);
      setAttribute(button, 'formnovalidate', formNoValidate ? '' : null);
      setAttribute(button, 'popovertargetaction', popoverTargetAction);
      setAttribute(button, 'popovertarget', popoverTarget);
      setAttribute(button, 'type', type);
      button.style.display = 'none';
      button.value = value || '';
    }

    return (
      <button
        class={clsx(
          'utrecht-button',
          this.busy && 'utrecht-button--busy',
          this.disabled && 'utrecht-button--disabled',
          pressed && 'utrecht-button--pressed',
          this.type === 'submit' && 'utrecht-button--submit',
          this.appearance === 'primary-action-button' && 'utrecht-button--primary-action',
          this.appearance === 'secondary-action-button' && 'utrecht-button--secondary-action',
          this.appearance === 'subtle-button' && 'utrecht-button--subtle',
        )}
        aria-busy={this.busy ? 'true' : null}
        aria-expanded={
          typeof this.expanded === 'boolean' ? String(expanded) : typeof expanded === 'string' ? expanded : null
        }
        aria-pressed={
          typeof this.pressed === 'boolean' ? String(pressed) : typeof pressed === 'string' ? pressed : null
        }
        disabled={this.disabled}
        type={this.type || 'button'}
        onClick={handleClick}
      >
        <slot></slot>
      </button>
    );
  }
}
