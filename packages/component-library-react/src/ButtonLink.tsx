/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, KeyboardEvent, PropsWithChildren } from 'react';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  appearance?: string;
  external?: boolean;
}

const onKeyDown = (evt: KeyboardEvent<HTMLAnchorElement>) => {
  if (evt.key === ' ' && typeof (evt.target as HTMLElement)?.click === 'function') {
    // Prevent other side-effects, such as scrolling
    evt.preventDefault();

    // Navigate to the link target
    (evt.target as HTMLElement).click();
  }
};

export const ButtonLink = forwardRef(
  (
    { appearance, children, className, external, role, ...restProps }: PropsWithChildren<ButtonLinkProps>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    let props = restProps;

    if (role === 'button') {
      // When this link is announced as button by accessibility tools,
      // it should also behave like a button. Links are not activated
      // using `Space`, so we need to implement that behaviour here
      // to reach parity with the `button` element.
      props = {
        ...restProps,
        onKeyDown,
      };
    }

    return (
      <a
        {...props}
        ref={ref}
        role={role}
        className={clsx(
          'utrecht-button-link',
          'utrecht-button-link--html-a',
          {
            'utrecht-button-link--external': external,
            'utrecht-button-link--primary-action': appearance === 'primary-action-button',
            'utrecht-button-link--secondary-action': appearance === 'secondary-action-button',
            'utrecht-button-link--subtle': appearance === 'subtle-button',
          },
          className,
        )}
        rel={external ? 'external noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  },
);

ButtonLink.displayName = 'ButtonLink';
