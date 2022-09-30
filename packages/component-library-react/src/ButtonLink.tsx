/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, KeyboardEvent, PropsWithChildren } from 'react';

// Somehow `placeholder` incorrectly is a global HTML attribute in React, ignore that
export interface ButtonLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'placeholder'> {
  appearance?: string;
  external?: boolean;
  placeholder?: boolean;
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
    {
      appearance,
      children,
      className,
      external,
      href,
      placeholder,
      role,
      ...restProps
    }: PropsWithChildren<ButtonLinkProps>,
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
        href={placeholder ? undefined : href}
        ref={ref}
        role={role || (placeholder ? 'link' : undefined)}
        className={clsx(
          'utrecht-button-link',
          'utrecht-button-link--html-a',
          {
            'utrecht-button-link--external': external,
            'utrecht-button-link--primary-action': appearance === 'primary-action-button',
            'utrecht-button-link--secondary-action': appearance === 'secondary-action-button',
            'utrecht-button-link--subtle': appearance === 'subtle-button',
            'utrecht-button-link--placeholder': placeholder,
          },
          className,
        )}
        rel={external ? 'external noopener noreferrer' : undefined}
        aria-disabled={placeholder ? 'true' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  },
);

ButtonLink.displayName = 'ButtonLink';
