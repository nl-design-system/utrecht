/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import clsx from 'clsx';
import React from 'react';

export const SearchBarDropdown = ({ isSelected, isActive }) => (
  <div className={clsx('utrecht-search-bar__dropdown')}>
    <section className={clsx('utrecht-search-bar__section')}>
      <span className={clsx('utrecht-search-bar__section-title')}>Section #1</span>
      <ul className={clsx('utrecht-unordered-list')} role="listbox">
        <li
          role="option"
          className={clsx('utrecht-search-bar__list-item', 'utrecht-unordered-list__item')}
          id="item-1-section-1"
          aria-selected={false}
        >
          Option #1
        </li>
        <li
          role="option"
          className={clsx('utrecht-search-bar__list-item', 'utrecht-unordered-list__item')}
          id="item-2-section-1"
          aria-selected={false}
        >
          Option #2
        </li>
        <li
          role="option"
          className={clsx('utrecht-search-bar__list-item', 'utrecht-unordered-list__item')}
          id="item-3-section-1"
          aria-selected={false}
        >
          Option #3
        </li>
      </ul>
    </section>
    <section className={clsx('utrecht-search-bar__section')}>
      <span className={clsx('utrecht-search-bar__section-title')}>Section #2</span>
      <ul className={clsx('utrecht-unordered-list')} role="listbox">
        <li
          role="option"
          className={clsx('utrecht-search-bar__list-item', 'utrecht-unordered-list__item', {
            'utrecht-search-bar__list-item--is-active': isActive,
            'utrecht-search-bar__list-item--is-selected': isSelected,
          })}
          id="item-1-section-2"
          aria-selected={isSelected}
        >
          Option #1
        </li>
        <li
          role="option"
          className={clsx('utrecht-search-bar__list-item', 'utrecht-unordered-list__item')}
          id="item-2-section-2"
          aria-selected={false}
        >
          Option #2
        </li>
        <li
          role="option"
          className={clsx('utrecht-search-bar__list-item', 'utrecht-unordered-list__item')}
          id="item-3-section-2"
          aria-selected={false}
        >
          Option #3
        </li>
      </ul>
    </section>
  </div>
);

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
  isOpen: {
    type: 'boolean',
  },
  isActive: {
    type: 'boolean',
  },
  isSelected: {
    type: 'boolean',
  },
};

export const defaultArgs = {
  buttonLabel: '',
  formLabel: '',
  inputLabel: '',
  value: '',
  isOpen: false,
  isActive: false,
  isSelected: false,
};

export const exampleArgs = {
  buttonLabel: 'Zoeken',
  formLabel: 'zoeken in Utrecht.nl',
  inputLabel: 'zoektermen',
  value: '',
  isOpen: false,
  isActive: false,
  isSelected: false,
};

export const SearchBar = ({
  buttonLabel = defaultArgs.buttonLabel,
  formLabel = defaultArgs.formLabel,
  inputLabel = defaultArgs.inputLabel,
  value = defaultArgs.value,
  isOpen = defaultArgs.isOpen,
  isActive = defaultArgs.isActive,
  isSelected = defaultArgs.isSelected,
}) => (
  <form
    role="search"
    aria-label={formLabel}
    aria-haspopup="listbox"
    aria-expanded={isOpen}
    aria-owns={isOpen ? 'utrecht-search-bar-1-menu' : undefined}
  >
    <div className={clsx('utrecht-search-bar')}>
      <input
        type="search"
        className={clsx('utrecht-search-bar__input', 'utrecht-textbox', 'utrecht-textbox--html-input')}
        name="q"
        autoComplete="off"
        spellCheck="false"
        aria-controls={isOpen ? 'utrecht-search-bar-1-menu' : undefined}
        aria-activedescendant={isOpen ? 'item-1-section-2' : undefined} // list item id
        value={value}
        aria-label={inputLabel}
        placeholder="Waar bent u naar op zoek?"
        aria-autocomplete="list"
      />
      <button
        type="submit"
        value="Zoeken"
        className={clsx('utrecht-search-bar__button', 'utrecht-button', 'utrecht-button--primary-action')}
      >
        {buttonLabel}
      </button>
    </div>
    {isOpen && <SearchBarDropdown isActive={isActive} isSelected={isSelected} />}
  </form>
);

export default SearchBar;
