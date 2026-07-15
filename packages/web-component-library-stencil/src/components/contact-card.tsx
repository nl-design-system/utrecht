import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'utrecht-contact-card',
  styleUrl: 'contact-card.scss',
  shadow: true,
})
export class ContactCard {
  @Prop() heading!: string;
  @Prop() subtitle?: string;
  @Prop() socialLinks?: string;
  @Prop() socialLinksHeading?: string;
  @Prop() sectionCount?: number;

  render() {
    const socialLinks: { icon: string; href: string; label?: string }[] = this.socialLinks
      ? JSON.parse(this.socialLinks)
      : [];
    const sectionCount = this.sectionCount ?? 0;
    const hasSocialLinksColumn = socialLinks.length > 0 && sectionCount <= 1;

    const socialLinksContent = socialLinks.length > 0 && [
      this.socialLinksHeading && (
        <h3 key="heading" class="utrecht-heading-3">
          {this.socialLinksHeading}
        </h3>
      ),
      <div key="links" class="utrecht-contact-card__socials-links">
        {socialLinks.map(({ icon, href, label }) => {
          const IconTag = `utrecht-icon-${icon}`;
          return (
            <a key={href} href={href} aria-label={label} class="utrecht-contact-card__social-link">
              <IconTag />
            </a>
          );
        })}
      </div>,
    ];

    return (
      <div class="utrecht-contact-card">
        {(this.heading || this.subtitle) && (
          <div class="utrecht-contact-card__title">
            <h2 class="utrecht-heading-2">
              {this.heading}
              {this.subtitle && <span class="utrecht-contact-card__subtitle">{this.subtitle}</span>}
            </h2>
          </div>
        )}
        <div class="utrecht-contact-card__grid">
          <slot />
          {socialLinksContent &&
            (hasSocialLinksColumn ? (
              <div class="utrecht-contact-card__grid-cell">{socialLinksContent}</div>
            ) : (
              socialLinksContent
            ))}
        </div>
        <div class="utrecht-contact-card__body">
          <slot name="content" />
        </div>
      </div>
    );
  }
}
