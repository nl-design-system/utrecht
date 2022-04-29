export const Paragraph = ({ textContent = '', lead = false }) =>
  `<section class="utrecht-html">
  <p${lead ? ' class="lead"' : ''}>${textContent}</p>
</section>`;

export const Paragraphs = ({ textContent = '' }) =>
  `<section class="utrecht-html">
  <p class="lead">${textContent}</p>
  <p>${textContent}</p>
  <p>${textContent}</p>
</section>`;
