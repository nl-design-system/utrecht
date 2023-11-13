/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import Image from 'next/image';
import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { Heading } from './Heading';
import { Link } from './Link';
import './index.style.css';

interface CardListItemProps extends Omit<HTMLAttributes<HTMLLIElement>, 'children'> {
  headingLevel: number;
  title?: string;
  preHeading?: string;
  children?: any;
  imageHeight?: number;
  imageWidth?: number;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  cardRole?: 'article' | string;
}

export const CardListItem = ({
  headingLevel,
  children,
  title,
  preHeading,
  imageHeight,
  imageWidth,
  imageSrc,
  imageAlt,
  href,
  cardRole,
  ...props
}: PropsWithChildren<CardListItemProps>) => {
  const linkRef = React.useRef<HTMLAnchorElement>(null);

  let headingContent: any = title;
  if (typeof href === 'string') {
    headingContent = <Link href={href}>{title}</Link>;
  }

  let card = (
    <div className={'utrecht-card-list-item__content'}>
      <hgroup>
        <Heading level={headingLevel} className="utrecht-card-list-item__title">
          {headingContent}
        </Heading>
        {preHeading && <p className="utrecht-card-list-item__pre-heading">{preHeading}</p>}
      </hgroup>
      {children}
    </div>
  );

  if (cardRole === 'article') {
    card = (
      <li
        {...props}
        className={clsx('utrecht-card-list-item', props.className)}
        onClick={() => linkRef.current?.click()}
      >
        {imageSrc && imageAlt && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            height={imageHeight}
            width={imageWidth}
            className={'utrecht-card-list-item__image'}
          />
        )}
        <article>{card}</article>
      </li>
    );
  } else {
    card = (
      <li
        {...props}
        className={clsx('utrecht-card-list-item', props.className)}
        onClick={() => linkRef.current?.click()}
      >
        {imageSrc && imageAlt && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            height={imageHeight}
            width={imageWidth}
            className={'utrecht-card-list-item__image'}
          />
        )}
        {card}
      </li>
    );
  }

  return card;
};
