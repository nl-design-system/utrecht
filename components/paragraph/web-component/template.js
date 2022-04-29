export const Paragraph = ({ lead = false, textContent = '' }) =>
  `<utrecht-paragraph ${lead ? 'lead="true"' : ''}">${textContent}</p>`
