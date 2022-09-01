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
  languages: [],
};

export const exampleArgs = {
  languages: [
    { textContent: 'EN', title: 'This page in English', lang: 'en', current: true, hrefLang: 'en' },
    { textContent: 'NL', title: 'Deze pagina in Nederlands', lang: 'nl', current: false, hrefLang: 'nl' },
  ],
};

export const AlternateLangNav = ({ languages = [] }) => {
  return (
    <div className="utrecht-alternate-lang-nav">
      {languages.map((langLink, index, { length }) =>
        index < length - 1 && length > 1 ? (
          <React.Fragment key={index}>
            <Link {...langLink} key={index} />
            <span aria-hidden="true"> | </span>
          </React.Fragment>
        ) : (
          <Link {...langLink} key={index} />
        ),
      )}
    </div>
  );
};

export default AlternateLangNav;
