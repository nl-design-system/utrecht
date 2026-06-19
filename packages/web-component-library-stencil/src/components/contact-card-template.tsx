import { Component, h, Prop } from '@stencil/core';

export type HTMLHeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

@Component({
  tag: 'utrecht-contact-card-template',
  styleUrl: 'contact-card-template.scss',
  shadow: true,
})
export class ContactCardTemplate {
  @Prop() heading!: string;
  @Prop() headingLevel: HTMLHeadingLevel = 2;
  @Prop() subtitle?: string;

  render() {
    const HeadingTag = `h${this.headingLevel}`;

    return (
      <div class="utrecht-contact-card">
        <HeadingTag class="utrecht-heading-2">
          {this.heading}
          {this.subtitle && <span class="utrecht-contact-card__subtitle">{this.subtitle}</span>}
        </HeadingTag>
        <div class="utrecht-contact-card__grid">
          <slot />
        </div>
        <div class="utrecht-contact-card__content">
          <slot name="content" />
        </div>
      </div>
    );
  }
}
