/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';

export const argTypes = {
  children: {
    name: 'children',
    type: { name: 'ReactNode', required: false },
  },
};

export const DigidButton = ({ children }) => <utrecht-digid-button>{children}</utrecht-digid-button>;

export default DigidButton;
