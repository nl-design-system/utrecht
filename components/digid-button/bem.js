/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

export const defaultArgs = {
  label: '',
  textContent: '',
};

export const DigidButton = ({ label = '', textContent = '' }) => `<div class="utrecht-digid-button">
  <utrecht-digid-logo class="utrecht-digid-button__logo"></utrecht-digid-logo>
  <button class="utrecht-digid-button__button utrecht-button" type="button"${
    label ? ` aria-label="${label}"` : ''
  }>${textContent}</button>
</div>`;
