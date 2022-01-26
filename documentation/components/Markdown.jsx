/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import React from 'react';
import { Description } from "@storybook/addon-docs";

export const Markdown = ({ children }) => (
    <Description>{children.replace(/(^|\r?\n)---[\s|\D|\w]+\r?\n---/gm, '')}</Description>
  );
