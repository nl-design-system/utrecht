/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import React from 'react';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { Button } from './Button';
import { ButtonLink } from './ButtonLink';

export interface AlphabetNavProps {
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
   *  const alphabet = [{ letter: 'A', availability: true }, { letter: 'B', availability: false }]
   * ```
   */
  alphabet: { letter: string; availability: boolean }[];
  /**
   * The component to use for the navigation.
   */
  component: 'link' | 'button';
  /**
   * The custom component to use for the navigation.
   * @example The Nextjs Link component can be used as a custom component.
   * ```tsx
   *  import Link from 'next/link';
   * <AlphabetNav
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

export const AlphabetNav = forwardRef(
  <T extends HTMLButtonElement | HTMLAnchorElement>(
    {
      component,
      currentLetter,
      alphabet,
      handleLetterClick,
      customLinkComponent,
      pathname,
      ...restProps
    }: PropsWithChildren<AlphabetNavProps>,
    ref: ForwardedRef<T>,
  ) => {
    const LinkComponent = customLinkComponent ? customLinkComponent : ButtonLink;
    switch (component) {
      case 'button':
        return (
          <div className={clsx('utrecht-alphabet-nav')}>
            {alphabet.map(({ letter, availability }) => (
              <Button
                {...restProps}
                className={clsx({ 'utrecht-alphabet-nav--current-letter': currentLetter === letter })}
                ref={ref as React.Ref<HTMLButtonElement>}
                key={letter}
                appearance={currentLetter === letter ? 'primary-action-button' : 'secondary-action-button'}
                disabled={!availability}
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
          <div className={clsx('utrecht-alphabet-nav')}>
            {alphabet.map(({ letter, availability }) => {
              const customLinkComponentStyle = clsx('utrecht-button-link', 'utrecht-button-link--html-a', {
                'utrecht-alphabet-nav--current-letter': currentLetter === letter,
                'utrecht-button-link--primary-action': currentLetter === letter,
                'utrecht-button-link--secondary-action': currentLetter !== letter,
                'utrecht-alphabet-nav__link--unavailable': !availability,
                'utrecht-button-link--placeholder': !availability,
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
                    'utrecht-alphabet-nav__link--unavailable': !availability,
                    'utrecht-alphabet-nav--current-letter': currentLetter === letter,
                  })}
                  placeholder={!availability}
                  tabIndex={availability ? 0 : -1}
                  key={letter}
                  onClick={() => handleLetterClick(letter)}
                  aria-pressed={currentLetter === letter}
                  aria-disabled={!availability}
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

AlphabetNav.displayName = 'AlphabetNav';
