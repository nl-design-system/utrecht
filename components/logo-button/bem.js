/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

export const defaultArgs = {
  label: '',
  textContent: '',
  logo: '',
};

export const LogoButton = ({ label = '', textContent = '', logo = '' }) => `<div class="utrecht-logo-button">
  <utrecht-${logo}-logo class="utrecht-logo-button__logo"></utrecht-${logo}-logo>
  <button class="utrecht-logo-button__button utrecht-button" type="button"${
    label ? ` aria-label="${label}"` : ''
  }>${textContent}</button>
</div>`;
