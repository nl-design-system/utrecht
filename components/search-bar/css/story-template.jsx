/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import React from 'react';

export const argTypes = {
  buttonLabel: {
    description: 'Label for the searchbar button',
    type: 'text',
  },
  formLabel: {
    description: 'Label for the searchbar',
    type: 'text',
  },
  inputLabel: {
    description: 'Label for the search input',
    type: 'text',
  },
  value: {
    description: 'Current search term',
    type: 'text',
  },
};

export const defaultArgs = {
  buttonLabel: '',
  formLabel: '',
  inputLabel: '',
  value: '',
};

export const exampleArgs = {
  buttonLabel: 'Zoeken',
  formLabel: 'zoeken in Utrecht.nl',
  inputLabel: 'zoektermen',
  value: 'The answer to life, the universe, and everything',
};

export const SearchBar = ({
  buttonLabel = defaultArgs.buttonLabel,
  formLabel = defaultArgs.formLabel,
  inputLabel = defaultArgs.inputLabel,
  value = defaultArgs.value,
}) => (
  <form className="utrecht-search-bar" role="search" aria-label={formLabel}>
    <input
      type="search"
      className="utrecht-search-bar__input utrecht-textbox utrecht-textbox utrecht-textbox--html-input"
      name="q"
      autocomplete="off"
      spellcheck="false"
      value={value}
      aria-label={inputLabel}
    />
    <button
      type="submit"
      value="Zoeken"
      className="utrecht-search-bar__button utrecht-button utrecht-button--primary-action"
    >
      {buttonLabel}
    </button>
  </form>
);

export default SearchBar;
