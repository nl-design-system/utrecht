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

export const AlternateLangNav = ({ languages = [] }) => (
  <div class="utrecht-alternate-lang-nav">
    {languages.map((lang, index) => {
      if (index < languages.length - 1 && languages.length > 1) {
        return (
          <>
            <Link {...lang} />
            <span aria-hidden="true"> | </span>
          </>
        );
      } else {
        return <Link {...lang} />;
      }
    })}
  </div>
);

export default AlternateLangNav;
