/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, Element, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-link-button',
  styleUrl: 'link-button.scss',
  shadow: true,
})
export class LinkButton {
  @Prop() disabled: boolean;
  @Prop() type: string;
  @Prop() inline: boolean;
  @Prop() pressed: boolean;
  @Prop({ attribute: 'form', reflect: true }) form: string;
  @Prop({ attribute: 'formaction', reflect: true }) formAction: string;
  @Prop({ attribute: 'formenctype', reflect: true }) formEnctype: string;
  @Prop({ attribute: 'formmethod', reflect: true }) formMethod: string;
  @Prop({ attribute: 'formnovalidate', reflect: true }) formNoValidate: boolean;
  @Prop({ attribute: 'formtarget', reflect: true }) formTarget: string;
  @Prop({ attribute: 'popovertarget', reflect: true }) popoverTarget: string;
  @Prop({ attribute: 'popovertargetaction', reflect: true }) popoverTargetAction: string;
  @Prop() name: string;
  @Prop() value: string;
  @Element() hostElement: HTMLElement;
  render() {
    const {
      hostElement,
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

    const handleClick = () => {
      const button = this.hostElement.querySelector('button[hidden]') as HTMLButtonElement | null;
      if (button) {
        button.click();
      }
    };

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
          'utrecht-link-button',
          'utrecht-link-button--html-button',
          this.disabled && 'utrecht-link-button--disabled',
          this.inline && 'utrecht-link-button--inline',
          this.pressed && 'utrecht-link-button--pressed',
        )}
        disabled={this.disabled}
        aria-pressed={typeof this.pressed === 'boolean' ? this.pressed : undefined}
        type={this.type || 'button'}
        onClick={handleClick}
      >
        <slot></slot>
      </button>
    );
  }
}
