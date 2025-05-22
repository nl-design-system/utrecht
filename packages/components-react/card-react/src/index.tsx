/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2025 Frameless B.V.
 * Copyright (c) 2021-2025 Gemeente Utrecht
 */

import { Link as UtrechtLink } from '@utrecht/link-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, useId, useRef } from 'react';
import type { ElementType, HTMLAttributes, KeyboardEvent, ReactNode } from 'react';
export interface HTMLHeadingProps extends PropsWithChildren<HTMLAttributes<HTMLHeadingElement>> {
  level: number;
}

export const HTMLHeading = ({ level, ...restProps }: HTMLHeadingProps) => {
  const HeadingX =
    level === 2 ? 'h2' : level === 3 ? 'h3' : level === 4 ? 'h4' : level === 5 ? 'h5' : level === 6 ? 'h6' : 'h1';

  return <HeadingX {...restProps} />;
};
export type HTMLHeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Optional image solt to display at the top of the card
   */
  image?: ReactNode;
  /**
   * Heading content - can be a string or a ReactNode
   */
  heading: ReactNode;
  /**
   * Heading level (1-6, default to 2)
   */
  headingLevel: HTMLHeadingLevel;
  /**
   *  URL for the heading link
   */
  href?: string;
  /**
   * Custom link component link like Next.js link or React Router link
   */
  Link?: ElementType;
  /**
   * Body content to be displayed inside the card
   */
  body?: ReactNode;
}
export const Card = forwardRef(
  (
    { image, heading, headingLevel, href, Link, className, body, ...restProps }: PropsWithChildren<CardProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const linkRef = useRef<HTMLAnchorElement>(null);
    const LinkComponent = Link ? Link : UtrechtLink;
    const onCardClickHandler = () => {
      if (href && linkRef.current) {
        linkRef.current.click();
      }
    };
    const onCardKeyDownHandler = (event: KeyboardEvent<HTMLDivElement>) => {
      if ((event.key === 'Enter' || event.key === ' ') && linkRef.current && href) {
        event.preventDefault();
        linkRef.current.click();
      }
    };
    const linkId = useId();
    const linkProps = href
      ? {
          tabIndex: 0,
          role: 'link',
          onClick: onCardClickHandler,
          onKeyDown: onCardKeyDownHandler,
          'aria-labelledby': linkId,
        }
      : {};

    return (
      <div
        ref={ref}
        className={clsx('utrecht-card', className, {
          'utrecht-card--link': href,
        })}
        {...linkProps}
        {...restProps}
      >
        <div className="utrecht-card__content">
          <div className={clsx('utrecht-card__heading')}>
            {headingLevel && heading && (
              <HTMLHeading
                id={linkId}
                className={clsx(`utrecht-heading-${headingLevel}`, 'utrecht-card__header')}
                level={headingLevel}
              >
                <LinkComponent ref={linkRef} href={href} className={clsx('utrecht-card__link')}>
                  {heading}
                </LinkComponent>
              </HTMLHeading>
            )}
          </div>
          {image && <div className={clsx('utrecht-card__image')}>{image}</div>}
          {body && <div className={clsx('utrecht-card__body')}>{body}</div>}
        </div>
      </div>
    );
  },
);
Card.displayName = 'Card';
