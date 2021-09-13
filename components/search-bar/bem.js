/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

export const SearchBar = ({
  buttonLabel,
  formLabel,
  inputLabel,
  value,
}) => `<form class="utrecht-search-bar" role="search" aria-label="${formLabel}">
  <input type="search" class="utrecht-search-bar__input utrecht-textbox utrecht-textbox utrecht-textbox--html-input" name="q" autocomplete="off" spellcheck="false" value="${value}" aria-label="${inputLabel}">
  <button type="submit" value="Zoeken" class="utrecht-search-bar__button utrecht-button">${buttonLabel}</button>
</form>`;
