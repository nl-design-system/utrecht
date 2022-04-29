export const Paragraph = ({ textContent = '', lead = false }) =>
  `<section class="utrecht-html">
  <p${lead ? ' class="lead"' : ''}>${textContent}</p>
</section>`
