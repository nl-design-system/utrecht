/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

export const defaultArgs = {
  link: false,
  url: '',
};

export const URLTemplate = ({ url = '' }) => `<bdo class="utrecht-url" dir="ltr">${url}</bdo>`;
