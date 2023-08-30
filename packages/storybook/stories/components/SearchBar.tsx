import clsx from 'clsx';
import React from 'react';

const SearchBarDropdown = ({ isSelected, isActive }) => (
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

export const SearchBar = ({
  buttonLabel = '',
  formLabel = '',
  inputLabel = '',
  value = '',
  isOpen = false,
  isActive = false,
  isSelected = false,
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
