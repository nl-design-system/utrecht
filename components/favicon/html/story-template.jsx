/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';

export const argTypes = {
  href: {
    description: 'Location of the favicon image',
    control: 'text',
  },
};

export const defaultArgs = { href: '' };

export const exampleArgs = {
  href: '/favicon.ico',
};

export const Favicon = ({ href = defaultArgs.href }) => <link rel="icon" href={href} />;

export default Favicon;
