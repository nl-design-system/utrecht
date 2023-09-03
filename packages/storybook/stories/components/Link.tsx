import { Link } from '@utrecht/component-library-react/dist/css-module';
import { LinkProps } from '@utrecht/component-library-react/src/css-module/Link';
import clsx from 'clsx';
import React from 'react';

export interface LinkStoryProps extends Omit<LinkProps, 'tabIndex'> {
  active?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
  hover?: boolean;
  telephone?: boolean;
  visited?: boolean;
  tabIndex?: string | number;
}

export const LinkStory = ({
  ['aria-label']: ariaLabel,
  ['aria-current']: ariaCurrent,
  active,
  className,
  external,
  hrefLang,
  hover,
  lang,
  focus,
  focusVisible,
  tabIndex,
  telephone,
  visited,
  ...restProps
}: LinkStoryProps) => (
  <Link
    className={clsx(
      {
        'utrecht-link--active': active,
        'utrecht-link--alternate-lang': lang && !ariaCurrent,
        'utrecht-link--current-lang': lang && ariaCurrent,
        'utrecht-link--external': external,
        'utrecht-link--focus': focus,
        'utrecht-link--focus-visible': focusVisible,
        'utrecht-link--hover': hover,
        'utrecht-link--telephone': telephone,
        'utrecht-link--visited': visited,
      },
      className,
    )}
    aria-current={ariaCurrent || undefined}
    aria-label={ariaLabel || undefined}
    hrefLang={hrefLang || undefined}
    lang={lang || undefined}
    tabIndex={tabIndex ? parseInt(String(tabIndex), 10) : undefined}
    {...restProps}
  />
);
