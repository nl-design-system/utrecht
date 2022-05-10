export const FormFieldDescription = ({ id = null, innerHTML = '', status = null }) =>
  `<utrecht-form-field-description id="${id}"${
    status ? ` status="${status}"` : ''
  }>${innerHTML}</utrecht-form-field-description>`;
