import { Heading } from '@utrecht/component-library-react';
import { clsx } from 'clsx';
import React, { useId, useRef } from 'react';
import './Card.css';

export const Card = ({ heading, headingLevel, image, children, className, href, ...props }) => {
  const linkRef = useRef();
  const headingId = useId();

  return (
    <div
      {...props}
      className={clsx(
        'utrecht-card',
        {
          'utrecht-card--link': !!href,
        },
        className,
      )}
    >
      <div className={clsx('utrecht-card__content')}>
        <Heading id={headingId} className={clsx('utrecht-card__title')} level={headingLevel}>
          {heading}
        </Heading>
        <div className={clsx('utrecht-card__body')}>{children}</div>
      </div>
      {image ? <div className={clsx('utrecht-card__image')}>{image}</div> : null}
      <a href={href} aria-labelledby={headingId} ref={linkRef} className="utrecht-card__hidden-link"></a>
    </div>
  );
};
