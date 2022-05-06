export const BadgeCounter = ({ locale = null, textContent = '', value = null, max = null }) =>
  `<utrecht-badge-counter${typeof max !== 'undefined' && max !== null ? ` max="${max}"` : ''}${
    typeof value !== 'undefined' && value !== null ? ` value="${value}"` : ''
  }${locale ? ` locale="${locale}"` : ''}>${textContent}</utrecht-badge-counter>`;
