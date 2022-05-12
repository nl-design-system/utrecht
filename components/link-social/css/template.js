/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const SocialMediaLink = ({ href, icon, distanced }) => `<a href="${href}" class="${clsx(
  'utrecht-link-social',
  distanced && 'utrecht-link-social--distanced',
)}">
  <${icon} class="utrecht-link-social__icon"></${icon}>
</a>`;

export const SocialMediaLinkList = ({ links }) =>
  links
    .map((link) => ({ ...link, distanced: true }))
    .map(SocialMediaLink)
    .join('');
