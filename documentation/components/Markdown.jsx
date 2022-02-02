/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { Description } from '@storybook/addon-docs';
import React from 'react';

export const Markdown = ({ children }) => (
  <Description>{children.replace(/(^|\r?\n)---[\s|\D|\w]+\r?\n---/gm, '')}</Description>
);
