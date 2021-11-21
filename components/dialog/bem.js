/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */
import clsx from 'clsx';

export const defaultArgs = {
  contentHTML: '',
  id: '',
  labelHTML: '',
  descriptionHTML: '',
  footerHTML: '',
  type: '',
  modal: false,
};

export const Dialog = ({
  id = '',
  contentHTML = '',
  descriptionHTML = '',
  footerHTML = '',
  modal = false,
  labelHTML = '',
  type = '',
}) => {
  const labelID = `${id}-dialog-label`;
  const descriptionID = `${id}-dialog-description`;

  // When the dialog is modal, only one dialog should be in the accessibility tree.
  // This should mean heading level 1 is appropriate.
  const labelTag = modal ? 'h1' : 'div';

  return `<div class="utrecht-dialog" tabindex="-1" role="${
    type === 'alert' ? 'alertdialog' : 'dialog'
  }" aria-labelledby="${labelID}"${descriptionHTML ? ` aria-describedby="${descriptionID}"` : ''}${
    modal ? ' aria-modal="true"' : ''
  }>
  <div class="utrecht-dialog__header">
    <div class="utrecht-dialog__controls">X</div>
    <${labelTag} class="utrecht-dialog__label" id="${labelID}">${labelHTML}</${labelTag}>
  </div>
  <div class="utrecht-dialog__content">
    ${
      descriptionHTML
        ? `<div class="utrecht-dialog__description" id="${descriptionID}" role="document">${descriptionHTML}</div>`
        : ''
    }
    ${contentHTML}
  </div>
  <div class="utrecht-dialog__footer">${footerHTML}</div>
</div>`;
};
