/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

export const FormFieldset = ({ content = '', legend = '' }) =>
  `<div class="utrecht-form-fieldset">
  ${legend ? `<div class="utrecht-form-fieldset__legend utrecht-form-fieldset__legend--distanced">${legend}</div>` : ''}
  ${content}
</div>`;
