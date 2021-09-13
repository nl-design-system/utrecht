/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

export const BadgeStatus = ({ status = '', textContent = '' }) =>
  `<div class="utrecht-badge-status utrecht-badge-status--${status ? status : 'neutral'}">${textContent}</div>`;
