/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2026 Frameless B.V.
 * Copyright (c) 2021-2026 Gemeente Utrecht
 */

import { Grid, GridCell } from '@utrecht/grid-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export type HTMLHeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface ContactCardProps extends HTMLAttributes<HTMLDivElement> {
  heading: ReactNode;
  headingLevel?: HTMLHeadingLevel;
  subtitle?: ReactNode;
  sections?: ReactNode[];
}

export const ContactCard = forwardRef(
  (
    {
      heading,
      headingLevel = 2,
      subtitle,
      sections,
      className,
      children,
      ...restProps
    }: PropsWithChildren<ContactCardProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const HeadingTag = `h${headingLevel}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    const mdCols = sections?.length === 2 ? 6 : 4;

    return (
      <div ref={ref} className={clsx('utrecht-contact-card', className)} {...restProps}>
        {(heading || subtitle) && (
          <div className="utrecht-contact-card__title">
            <HeadingTag className={`utrecht-heading-${headingLevel}`}>
              {heading}
              {subtitle && <span className="utrecht-contact-card__subtitle">{subtitle}</span>}
            </HeadingTag>
          </div>
        )}
        <Grid spacing="md" className="utrecht-contact-card__grid">
          {sections?.map((section, i) => (
            <GridCell key={i} className="utrecht-contact-card__grid-cell" sm={6} md={mdCols}>
              {section}
            </GridCell>
          ))}
        </Grid>
        {children && <div className="utrecht-contact-card__content">{children}</div>}
      </div>
    );
  },
);

ContactCard.displayName = 'ContactCard';
