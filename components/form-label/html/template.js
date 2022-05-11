export const FormLabel = ({ textContent = '', type = null }) =>
  `<div class="utrecht-html">
  <input type="${type}" id="${type}">
  <label for="${type}">${textContent}</label>
</div>`;
