/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import css from '@utrecht/radio-button-css/dist/index.mjs';
import { insertStyle } from './insert-style';
insertStyle(css);

export type { RadioButtonProps } from './index';
export { RadioButton } from './index';
