export const defaultArgs = {
  stressed: false,
  strong: false,
  textContent: '',
};

export const StressedTemplate = ({ textContent = '' }) => `<em>${textContent}</em>`;

export const StrongTemplate = ({ textContent = '' }) => `<strong>${textContent}</strong>`;

export const Emphasis = ({ textContent = '', stressed = false, strong = false }) => {
  let formatted = textContent;
  if (stressed) {
    formatted = StressedTemplate({ textContent: formatted });
  }
  if (strong) {
    formatted = StrongTemplate({ textContent: formatted });
  }
  return `<div class="utrecht-html">${formatted}</div>`;
};
