/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import heading1css from '@utrecht/heading-1-css/dist/index.mjs';
import heading2css from '@utrecht/heading-2-css/dist/index.mjs';
import heading3css from '@utrecht/heading-3-css/dist/index.mjs';
import heading4css from '@utrecht/heading-4-css/dist/index.mjs';
import heading5css from '@utrecht/heading-5-css/dist/index.mjs';
import heading6css from '@utrecht/heading-6-css/dist/index.mjs';
import { insertStyle } from './insert-style';

insertStyle(heading1css);
insertStyle(heading2css);
insertStyle(heading3css);
insertStyle(heading4css);
insertStyle(heading5css);
insertStyle(heading6css);

export * from '../Heading';
