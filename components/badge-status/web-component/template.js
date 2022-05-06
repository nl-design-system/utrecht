export const BadgeStatus = ({ status = '', textContent = '' }) =>
  status
    ? `<utrecht-badge-status status="${status}">${textContent}</utrecht-badge-status>`
    : `<utrecht-badge-status>${textContent}</utrecht-badge-status>`;
