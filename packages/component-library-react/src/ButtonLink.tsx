/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, KeyboardEvent, PropsWithChildren } from 'react';

const enumGuard =
  <T extends unknown>(values: readonly T[]) =>
  (x: unknown): x is T =>
    values.includes(x as T);

const APPEARANCE = {
  'primary-action-button': 'utrecht-button-link--primary-action',
  'secondary-action-button': 'utrecht-button-link--secondary-action',
  'subtle-button': 'utrecht-button-link--subtle',
} as const;
const appearanceKeys = Object.keys(APPEARANCE) as (keyof typeof APPEARANCE)[];

export type ButtonLinkAppearance = keyof typeof APPEARANCE;

export const isButtonLinkAppearance = enumGuard(appearanceKeys);
// Somehow `placeholder` incorrectly is a global HTML attribute in React, ignore that
export interface ButtonLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'placeholder'> {
  appearance?: ButtonLinkAppearance;
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
            'utrecht-button-link--placeholder': placeholder,
          },
          appearance && APPEARANCE[appearance],
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
