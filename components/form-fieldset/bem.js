/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

export const FormFieldset = ({ content = '', legend = '', role = '' }) =>
  `<fieldset class="utrecht-form-fieldset utrecht-form-fieldset--html-legend"${
    role && role !== 'group' ? ` role="${role}"` : ''
  }>
  ${
    legend
      ? `<legend class="utrecht-form-fieldset__legend utrecht-form-fieldset__legend--html-legend utrecht-form-fieldset__legend--distanced">${legend}</legend>`
      : ''
  }
  ${content}
</fieldset>`;

export const FormFieldsetDiv = ({ content = '', legend = '', role = 'group', id }) =>
  `<div class="utrecht-form-fieldset" role="${role}"${legend ? ` aria-labelledby="${id}-label"` : ''}>
  ${
    legend
      ? `<div class="utrecht-form-fieldset__legend utrecht-form-fieldset__legend--distanced"${
          id ? ` id="${id}-label"` : ''
        }>${legend}</div>`
      : ''
  }
  ${content}
</div>`;
