/**
 * @license EUPL-1.2
 * Copyright (c) 2024 Gemeente Utrecht
 * Copyright (c) 2024 Frameless B.V.
 */

import clsx from 'clsx';
import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { Heading } from './Heading';

export interface CardListItemProps extends Omit<HTMLAttributes<HTMLLIElement>, 'children'> {
  headingLevel: number;
  title?: any;
  preHeading?: string;
  image?: any;
  cardRole?: 'article' | string;
}

export const CardListItem = ({
  headingLevel,
  children,
  title,
  preHeading,
  image,
  cardRole,
  ...props
}: PropsWithChildren<CardListItemProps>) => {
  const linkRef = React.useRef<HTMLAnchorElement>(null);

  let card = (
    <div className={'utrecht-card-list__item-content'}>
      <hgroup>
        <Heading level={headingLevel} className="utrecht-card-list__item-title">
          {title}
        </Heading>
        {preHeading && <p className="utrecht-card-list__item-pre-heading">{preHeading}</p>}
      </hgroup>
      {children}
    </div>
  );

  if (cardRole === 'article') {
    card = (
      <li
        {...props}
        className={clsx('utrecht-card-list__item', props.className)}
        onClick={() => linkRef.current?.click()}
      >
        {image}
        <article>{card}</article>
      </li>
    );
  } else {
    card = (
      <li
        {...props}
        className={clsx('utrecht-card-list__item', props.className)}
        onClick={() => linkRef.current?.click()}
      >
        {image}
        {card}
      </li>
    );
  }

  return card;
};
