/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

export const defaultArgs = {
  label: '',
  textContent: '',
};

export const EherkenningButton = ({ label = '', textContent = '' }) => `<div class="utrecht-eherkenning-button">
  <utrecht-eherkenning-logo class="utrecht-eherkenning-button__logo"></utrecht-eherkenning-logo>
  <button class="utrecht-eherkenning-button__button utrecht-button" type="button"${
    label ? ` aria-label="${label}"` : ''
  }>${textContent}</button>
</div>`;
