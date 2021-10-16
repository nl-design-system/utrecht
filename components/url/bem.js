/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

export const defaultArgs = {
  link: false,
  url: '',
};

export const URLTemplate = ({ url = '', link = false }) =>
  link
    ? `<a class="utrecht-link utrecht-url" href="${url}" dir="ltr">${url}</a>`
    : `<span class="utrecht-url" dir="ltr">${url}</span>`;
