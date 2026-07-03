/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2026 Frameless B.V.
 * Copyright (c) 2021-2026 Gemeente Utrecht
 */

import { Heading, LinkSocial } from '@utrecht/component-library-react';
import { Grid, GridCell } from '@utrecht/grid-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

export interface ContactCardSocialLink {
  icon: ReactNode;
  href: string;
  label?: string;
}

export interface ContactCardProps extends HTMLAttributes<HTMLDivElement> {
  heading: ReactNode;
  subtitle?: ReactNode;
  sections?: ReactNode[];
  socialLinks?: ContactCardSocialLink[];
  socialLinksHeading?: ReactNode;
  richText?: boolean;
}

export const ContactCard = forwardRef(
  (
    {
      heading,
      subtitle,
      sections,
      socialLinks,
      socialLinksHeading,
      richText = false,
      className,
      children,
      ...restProps
    }: PropsWithChildren<ContactCardProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const sectionCount = sections?.length ?? 0;
    let mdCols: 4 | 6 | 12;
    if (sectionCount <= 1) mdCols = 12;
    else if (sectionCount === 2) mdCols = 6;
    else mdCols = 4;
    const smCols: 4 | 6 | 12 = sectionCount >= 3 ? 6 : mdCols;

    const socialLinksContent = socialLinks && socialLinks.length > 0 && (
      <div className="utrecht-contact-card__socials">
        {socialLinksHeading && (
          <Heading level={3} appearance="utrecht-heading-3" className="utrecht-contact-card__socials-heading">
            {socialLinksHeading}
          </Heading>
        )}
        {socialLinks && socialLinks.length > 0 && (
          <div className="utrecht-contact-card__socials-links">
            {socialLinks.map(({ icon, href, label }) => (
              <LinkSocial key={href} href={href} aria-label={label} className="utrecht-contact-card__social-link">
                {icon}
              </LinkSocial>
            ))}
          </div>
        )}
      </div>
    );

    return (
      <div ref={ref} className={clsx('utrecht-contact-card', className)} {...restProps}>
        {(heading || subtitle) && (
          <div className="utrecht-contact-card__title">
            <Heading level={2} appearance="utrecht-heading-2">
              {heading}
              {subtitle && <span className="utrecht-contact-card__subtitle">{subtitle}</span>}
            </Heading>
          </div>
        )}
        {sectionCount > 0 && (
          <Grid spacing="md" className="utrecht-contact-card__grid">
            {sections?.map((section, i) => (
              <GridCell
                key={i}
                className={clsx(
                  'utrecht-contact-card__grid-cell',
                  richText && 'utrecht-rich-text',
                  i === 0 && 'utrecht-contact-card__grid-cell--phone-number',
                )}
                xs={12}
                sm={smCols}
                md={mdCols}
              >
                {section}
                {i === sectionCount - 1 && socialLinksContent}
              </GridCell>
            ))}
          </Grid>
        )}
        {children && <div className="utrecht-contact-card__content">{children}</div>}
      </div>
    );
  },
);

ContactCard.displayName = 'ContactCard';
