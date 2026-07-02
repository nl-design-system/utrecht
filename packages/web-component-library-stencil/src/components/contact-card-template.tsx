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
  @Prop() socialLinks?: string;
  @Prop() socialLinksHeading?: string;
  @Prop() socialLinksHeadingLevel: HTMLHeadingLevel = 3;
  @Prop() sectionCount?: number;

  render() {
    const HeadingTag = `h${this.headingLevel}`;
    const SocialLinksHeadingTag = `h${this.socialLinksHeadingLevel}`;
    const socialLinks: { icon: string; href: string; label?: string }[] = this.socialLinks
      ? JSON.parse(this.socialLinks)
      : [];
    const sectionCount = this.sectionCount ?? 0;
    const hasIconLinksColumn = socialLinks.length > 0 && sectionCount <= 2;

    const socialLinksContent = socialLinks.length > 0 && (
      <div class="utrecht-contact-card__socials">
        {this.socialLinksHeading && (
          <SocialLinksHeadingTag class="utrecht-heading-3 utrecht-contact-card__socials-heading">
            {this.socialLinksHeading}
          </SocialLinksHeadingTag>
        )}
        <div class="utrecht-contact-card__socials-links">
          {socialLinks.map(({ icon, href, label }) => {
            const IconTag = `utrecht-icon-${icon}`;
            return (
              <a href={href} aria-label={label || icon} class="utrecht-contact-card__social-link">
                <IconTag />
              </a>
            );
          })}
        </div>
      </div>
    );

    return (
      <div class="utrecht-contact-card">
        <HeadingTag class="utrecht-heading-2">
          {this.heading}
          {this.subtitle && <span class="utrecht-contact-card__subtitle">{this.subtitle}</span>}
        </HeadingTag>
        <div class="utrecht-contact-card__grid">
          <slot />
          {socialLinksContent &&
            (hasIconLinksColumn ? (
              <div class="utrecht-contact-card__grid-cell">{socialLinksContent}</div>
            ) : (
              socialLinksContent
            ))}
        </div>
        <div class="utrecht-contact-card__content">
          <slot name="content" />
        </div>
      </div>
    );
  }
}
