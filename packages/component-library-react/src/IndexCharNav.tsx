/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import React from 'react';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { Button } from './Button';
import { ButtonLink } from './ButtonLink';

export interface IndexCharNavProps {
  /**
   *
   * @param letter The letter that was clicked.
   * @returns The URL to navigate to.
   *
   * @example
   * ```ts
   * const handleLetterClick = (letter: string) => {
   *   return `/${letter}`;
   * }
   *```
   */
  // eslint-disable-next-line no-unused-vars
  handleLetterClick: (letter: string) => void;
  /**
   * The current letter.
   */
  currentLetter?: string;
  /**
   * The alphabet.
   * @example
   * ```ts
   *  const alphabet = [{ letter: 'A', disabled: true }, { letter: 'B', disabled: false }]
   * ```
   */
  alphabet: { letter: string; disabled: boolean }[];
  /**
   * The component to use for the navigation.
   */
  component: 'link' | 'button';
  /**
   * The custom component to use for the navigation.
   * @example The Nextjs Link component can be used as a custom component.
   * ```tsx
   *  import Link from 'next/link';
   * <IndexCharNav
   *    component={'link'}
   *    customLinkComponent={Link}
   *    alphabet={[]}
   *    handleLetterClick={(letter) => console.log(letter)}
   *  />
   * ```
   */
  customLinkComponent?: React.ComponentType<any>;
  /**
   *
   * The URL to navigate to when a letter is clicked
   * @example `href="/products/alphabet/a"`
   * @default `href="/a"`
   *
   */
  pathname?: string;
}

export const IndexCharNav = forwardRef(
  <T extends HTMLButtonElement | HTMLAnchorElement>(
    {
      component,
      currentLetter,
      alphabet,
      handleLetterClick,
      customLinkComponent,
      pathname,
      ...restProps
    }: PropsWithChildren<IndexCharNavProps>,
    ref: ForwardedRef<T>,
  ) => {
    const LinkComponent = customLinkComponent ? customLinkComponent : ButtonLink;
    switch (component) {
      case 'button':
        return (
          <div className={clsx('utrecht-index-char-nav')}>
            {alphabet.map(({ letter, disabled }) => (
              <Button
                {...restProps}
                className={clsx({ 'utrecht-index-char-nav--current-letter': currentLetter === letter })}
                ref={ref as React.Ref<HTMLButtonElement>}
                key={letter}
                appearance={currentLetter === letter ? 'primary-action-button' : 'secondary-action-button'}
                disabled={disabled}
                onClick={() => handleLetterClick(letter)}
                pressed={currentLetter === letter}
              >
                {letter}
              </Button>
            ))}
          </div>
        );
      case 'link':
        return (
          <div className={clsx('utrecht-index-char-nav')}>
            {alphabet.map(({ letter, disabled }) => {
              const customLinkComponentStyle = clsx('utrecht-button-link', 'utrecht-button-link--html-a', {
                'utrecht-index-char-nav--current-letter': currentLetter === letter,
                'utrecht-button-link--primary-action': currentLetter === letter,
                'utrecht-button-link--secondary-action': currentLetter !== letter,
                'utrecht-index-char-nav__link--disabled': disabled,
                'utrecht-button-link--placeholder': disabled,
              });
              return (
                <LinkComponent
                  ref={ref as React.Ref<HTMLAnchorElement>}
                  appearance={
                    customLinkComponent
                      ? undefined
                      : currentLetter === letter
                      ? 'primary-action-button'
                      : 'secondary-action-button'
                  }
                  href={`${pathname ? `${pathname}/` : ''}${letter.toLocaleLowerCase()}`}
                  className={clsx(customLinkComponent && customLinkComponentStyle, {
                    'utrecht-index-char-nav__link--disabled': disabled,
                    'utrecht-index-char-nav--current-letter': currentLetter === letter,
                  })}
                  placeholder={disabled}
                  tabIndex={disabled ? -1 : 0}
                  key={letter}
                  onClick={() => handleLetterClick(letter)}
                  aria-pressed={currentLetter === letter}
                  aria-disabled={disabled}
                  {...restProps}
                >
                  {letter}
                </LinkComponent>
              );
            })}
          </div>
        );
      default:
        return <></>;
    }
  },
);

IndexCharNav.displayName = 'IndexCharNav';
