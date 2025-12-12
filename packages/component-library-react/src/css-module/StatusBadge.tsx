/**
 * @license EUPL-1.2
 * Copyright (c) 2023 Gemeente Utrecht
 * Copyright (c) 2023 Frameless B.V.
 */

import css from '@utrecht/status-badge-css/dist/index.mjs';
import { insertStyle } from './insert-style';
insertStyle(css);

export * from '../StatusBadge';
