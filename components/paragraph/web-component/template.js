export const defaultArgs = {
  lead: false,
  textContent: '',
};

export const Paragraph = ({ lead = false, textContent = '' }) =>
  `<utrecht-paragraph ${lead ? 'lead="true"' : ''}">${textContent}</p>`;

export const Paragraphs = ({ textContent = '' }) =>
  `<utrecht-paragraph lead="true">${textContent}</utrecht-paragraph>
<utrecht-paragraph">${textContent}</utrecht-paragraph>
<utrecht-paragraph">${textContent}</utrecht-paragraph>`;
