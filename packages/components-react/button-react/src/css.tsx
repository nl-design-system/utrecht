/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import css from '@utrecht/button-css/dist/index.mjs';
import { insertStyle } from './inject';

insertStyle(css);

export * from './index';
