/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2025 Frameless B.V.
 * Copyright (c) 2021-2025 Gemeente Utrecht
 */

export const stringSort = (a: string, b: string) => (a === b ? 0 : a > b ? 1 : -1);

export const isYouTubeURL = (src: string) => {
  let srcURL;
  try {
    srcURL = new URL(src);
  } catch (e) {
    //
  }
  return !!srcURL && /(^|\.)youtube(-nocookie)?.com$/i.test(srcURL.hostname);
};
