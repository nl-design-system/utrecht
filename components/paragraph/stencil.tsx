import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'utrecht-paragraph',
  styleUrl: 'stencil.scss',
  shadow: true,
})
export class Paragraph {
  /**
   * Lead paragraph
   */
  @Prop() lead: boolean;

  render() {
    return (
      <div class={clsx('utrecht-paragraph', this.lead && 'utrecht-paragraph--lead')}>
        <slot></slot>
      </div>
    );
  }
}
