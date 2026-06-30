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

export type HTMLHeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface ContactCardSocialLink {
  icon: ReactNode;
  href: string;
  label?: string;
}

export interface ContactCardProps extends HTMLAttributes<HTMLDivElement> {
  heading: ReactNode;
  headingLevel?: HTMLHeadingLevel;
  subtitle?: ReactNode;
  sections?: ReactNode[];
  socialLinks?: ContactCardSocialLink[];
  socialLinksHeading?: ReactNode;
  socialLinksHeadingLevel?: HTMLHeadingLevel;
}

export const ContactCard = forwardRef(
  (
    {
      heading,
      headingLevel = 2,
      subtitle,
      sections,
      socialLinks,
      socialLinksHeading,
      socialLinksHeadingLevel = 3,
      className,
      children,
      ...restProps
    }: PropsWithChildren<ContactCardProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const sectionCount = sections?.length ?? 0;
    const hasIconLinksColumn = (socialLinks?.length ?? 0) > 0 && sectionCount <= 2;
    const totalColumns = sectionCount + (hasIconLinksColumn ? 1 : 0);
    const mdCols = totalColumns === 2 ? 6 : 4;

    const socialLinksContent = socialLinks && socialLinks.length > 0 && (
      <div className="utrecht-contact-card__social-links">
        {socialLinksHeading && (
          <Heading
            level={socialLinksHeadingLevel}
            appearance="utrecht-heading-3"
            className="utrecht-contact-card__social-links-heading"
          >
            {socialLinksHeading}
          </Heading>
        )}
        {socialLinks.map(({ icon, href, label }, i) => (
          <LinkSocial key={i} href={href} aria-label={label} className="utrecht-contact-card__social-link">
            {icon}
          </LinkSocial>
        ))}
      </div>
    );

    return (
      <div ref={ref} className={clsx('utrecht-contact-card', className)} {...restProps}>
        {(heading || subtitle) && (
          <div className="utrecht-contact-card__title">
            <Heading level={headingLevel} appearance="utrecht-heading-2">
              {heading}
              {subtitle && <span className="utrecht-contact-card__subtitle">{subtitle}</span>}
            </Heading>
          </div>
        )}
        {(sectionCount > 0 || hasIconLinksColumn) && (
          <Grid spacing="md" className="utrecht-contact-card__grid">
            {sections?.map((section, i) => (
              <GridCell
                key={i}
                className={clsx(
                  'utrecht-contact-card__grid-cell',
                  i === 0 && 'utrecht-contact-card__grid-cell--phone-number',
                )}
                sm={6}
                md={mdCols}
              >
                {section}
                {!hasIconLinksColumn && i === 2 && socialLinksContent}
              </GridCell>
            ))}
            {hasIconLinksColumn && (
              <GridCell className="utrecht-contact-card__grid-cell" sm={6} md={mdCols}>
                {socialLinksContent}
              </GridCell>
            )}
          </Grid>
        )}
        {children && <div className="utrecht-contact-card__content">{children}</div>}
      </div>
    );
  },
);

ContactCard.displayName = 'ContactCard';
