import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'utrecht-contact-card-template',
  styleUrl: 'contact-card-template.scss',
  shadow: true,
})
export class ContactCardTemplate {
  @Prop() heading: string = 'Hulp en contact';
  @Prop() subtitle?: string;

  render() {
    return (
      <div class="utrecht-contact-card">
        <h2 class="utrecht-heading-2">
          {this.heading}
          <span>{this.subtitle ? ` ${this.subtitle}` : ''}</span>
        </h2>
        <div class="utrecht-contact-card__grid">
          <slot />
        </div>
      </div>
    );
  }
}
