/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2025 Frameless B.V.
 * Copyright (c) 2021-2025 Gemeente Utrecht
 */

import css from '@utrecht/youtube-video-css/dist/index.mjs';
import { insertStyle } from './insert-style';
insertStyle(css);

export type { YouTubeVideoProps } from './index';
export { YouTubeVideo } from './index';
