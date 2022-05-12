/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const Surface = ({ innerHTML = '' }) => `<div class="${clsx('utrecht-surface')}">${innerHTML}</div>`;
