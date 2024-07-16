/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ComponentType, ForwardedRef, forwardRef, PropsWithChildren, Ref } from 'react';
import { Button } from './Button';
import { ButtonLink } from './ButtonLink';

export interface IndexCharNavProps {
  /**
   *
   * @param char The character that was clicked.
   * @returns The URL to navigate to.
   *
   * @example
   * ```ts
   * const onLinkClick = (char: string) => {
   *   return `/${char}`;
   * }
   *```
   */
  // eslint-disable-next-line no-unused-vars
  onLinkClick?: (char: string) => void;
  /**
   * The current char.
   */
  currentChar?: string;
  /**
   * The characters.
   * @example
   * ```ts
   *  const characters = [{ letter: 'A', disabled: true }, { letter: 'B', disabled: false }]
   * ```
   */
  characters: {
    char: string;
    disabled?: boolean;
    href?: string;
  }[];
  /**
   * The component to use for the navigation.
   */
  component?: 'link' | 'button';
  /**
   * The custom component to use for the navigation.
   * @example The Nextjs Link component can be used as a custom component.
   * ```tsx
   *  import Link from 'next/link';
   * <IndexCharNav
   *    component={'link'}
   *    Link={Link}
   *    characters={[]}
   *    onLinkClick={(char) => console.log(char)}
   *  />
   * ```
   */
  Link?: ComponentType<any>;
}

export const IndexCharNav = forwardRef(
  <T extends HTMLButtonElement | HTMLAnchorElement>(
    { component, currentChar, characters, onLinkClick, Link, ...restProps }: PropsWithChildren<IndexCharNavProps>,
    ref: ForwardedRef<T>,
  ) => {
    const LinkComponent = Link ? Link : ButtonLink;
    let links = [];

    if (component === 'button') {
      links = characters.map(({ char, disabled }) => {
        const current = currentChar === char;
        return (
          <Button
            {...restProps}
            className={clsx({
              'utrecht-index-char-nav__link--current': current,
            })}
            ref={ref as Ref<HTMLButtonElement>}
            key={char}
            appearance={current ? 'primary-action-button' : 'secondary-action-button'}
            disabled={disabled}
            onClick={() => typeof onLinkClick === 'function' && onLinkClick(char)}
            pressed={current}
          >
            {/* The character must not be translated, but any aria-label attributes should be translatable */}
            <span translate="no">{char}</span>
          </Button>
        );
      });
    } else {
      links = characters.map(({ char, disabled, href }) => {
        const current = currentChar === char;
        const customLinkComponentStyle = clsx(
          'utrecht-button-link',
          'utrecht-button-link--html-a',
          'utrecht-index-char-nav__link',
          {
            'utrecht-index-char-nav__link--current': current,
            'utrecht-button-link--primary-action': current,
            'utrecht-button-link--secondary-action': !current,
            'utrecht-index-char-nav__link--disabled': disabled,
            'utrecht-button-link--placeholder': disabled,
          },
        );
        return (
          <LinkComponent
            ref={ref as Ref<HTMLAnchorElement>}
            appearance={Link ? undefined : current ? 'primary-action-button' : 'secondary-action-button'}
            href={href}
            className={clsx(Link && customLinkComponentStyle, 'utrecht-index-char-nav__link', {
              'utrecht-index-char-nav__link--disabled': disabled,
              'utrecht-index-char-nav__link--current': current,
            })}
            aria-current={current ? 'page' : undefined}
            aria-disabled={disabled}
            placeholder={Link ? undefined : disabled}
            key={char}
            onClick={() => typeof onLinkClick === 'function' && onLinkClick(char)}
            {...restProps}
          >
            <span translate="no">{char}</span>
          </LinkComponent>
        );
      });
    }

    return (
      <div className="utrecht-index-char-nav" role="group">
        {links}
      </div>
    );
  },
);

IndexCharNav.displayName = 'IndexCharNav';
