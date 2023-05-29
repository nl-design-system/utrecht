/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { Markdown as StorybookMarkdown } from '@storybook/blocks';
import React from 'react';

export const Markdown = ({ children }) => (
  <StorybookMarkdown>{children.replace(/(^|\r?\n)---[\s|\D|\w]+\r?\n---/gm, '')}</StorybookMarkdown>
);
