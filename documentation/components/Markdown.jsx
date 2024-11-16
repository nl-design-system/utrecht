/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { Markdown as StorybookMarkdown } from '@storybook/blocks';
import React from 'react';

export const Markdown = ({ children }) => (
  <StorybookMarkdown>{children.replace(/(^|\r?\n)---[\s|\D|\w]+\r?\n---/gm, '')}</StorybookMarkdown>
);
