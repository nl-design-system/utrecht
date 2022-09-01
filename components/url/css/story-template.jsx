/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';

export const argTypes = {
  url: {
    description: 'URL',
    control: 'text',
  },
  link: {
    description: 'Link',
    control: 'boolean',
  },
};

export const defaultArgs = {
  link: false,
  url: '',
};

export const exampleArgs = {
  link: true,
  url: 'https://example.com/',
};

export const URLTemplate = ({ url = defaultArgs.url, link = defaultArgs.link }) =>
  link ? (
    <a className="utrecht-link utrecht-url" href={url} dir="ltr">
      {url}
    </a>
  ) : (
    <span className="utrecht-url" dir="ltr">
      {url}
    </span>
  );

export default URLTemplate;
