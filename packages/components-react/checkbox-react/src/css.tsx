/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import css from '@utrecht/checkbox-css/dist/index.mjs';
import css2 from '@utrecht/custom-checkbox-css/dist/index.mjs';
import { insertStyle } from './insert-style';

insertStyle(css);
insertStyle(css2);

export type { CheckboxProps } from './index';
export { Checkbox } from './index';
