/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';
import Link from '../../link/css/story-template';

export const argTypes = {
  languages: {
    description: 'Languages',
    type: {
      name: 'array',
      required: true,
    },
  },
};

export const defaultArgs = {
  languages: [
    { textContent: 'EN', title: 'This page in English', lang: 'en', current: true, hreflang: 'en' },
    { textContent: 'NL', title: 'Deze pagina in Nederlands', lang: 'nl', current: false, hreflang: 'nl' },
  ],
};

export const AlternateLangNav = ({ languages = [] }) => {
  // FIXME: Ensure clean code sample, might be unnescessary when all code samples show html code
  const SEPARATOR = '|';
  const navItems =
    languages.length > 1
      ? languages.reduce((acc, lang, index, all) => {
          acc.push(lang);
          if (index < all.length - 1) acc.push(SEPARATOR);
          return acc;
        }, [])
      : languages;

  return (
    <div className="utrecht-alternate-lang-nav">
      {navItems.map((item) => {
        return item === SEPARATOR ? <span ariaHidden="true"> | </span> : <Link {...item} />;
      })}
    </div>
  );
};

export default AlternateLangNav;
