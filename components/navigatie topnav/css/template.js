/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 */

import clsx from 'clsx';

export const Topnav = ({ items }) => `<div class="utrecht-navhtml">
  <nav class="topnav">
    <ul class="utrecht-topnav__list">${items
      .map(
        ({ href, title, current, focus, focusVisible }) => `
      <li class="utrecht-topnav__item">
        <a class="${clsx(
          'utrecht-topnav__link',
          current && 'utrecht-topnav__link--current',
          focus && 'utrecht-topnav__link--focus',
          focusVisible && 'utrecht-topnav__link--focus-visible',
        )}" href="${href}">${title}</a>
        </li>`,
      )
      .join('')}
    </ul>
  </nav>
</div>
`;
