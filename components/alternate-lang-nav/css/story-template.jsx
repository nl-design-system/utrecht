/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';
import { ButtonGroup } from '../../button-group/css/story-template';
import { LinkButton } from '../../link-button/css/story-template';
import { Link } from '../../link/css/story-template';
import './index.scss';

export const argTypes = {
  headingLevel: {
    description: 'Heading level',
  },
  languages: {
    description: 'Languages',
    type: {
      name: 'array',
      required: true,
    },
  },
};

export const defaultArgs = {
  headingLevel: 1,
  languages: [],
};

export const exampleArgs = {
  headingLevel: 2,
  languages: [
    { textContent: 'EN', title: 'This page in English', lang: 'en', current: true, hrefLang: 'en' },
    { textContent: 'NL', title: 'Deze pagina in Nederlands', lang: 'nl', current: false, hrefLang: 'nl' },
  ],
};

const Heading = ({ children, level, ...restProps }) => {
  const HeadingX =
    level === 2 ? 'h2' : level === 3 ? 'h3' : level === 4 ? 'h4' : level === 5 ? 'h5' : level === 6 ? 'h6' : 'h1';

  return <HeadingX {...restProps}>{children}</HeadingX>;
};

export const AlternateLangNav = ({ headingLevel = defaultArgs.headingLevel, languages = [] }) => {
  return (
    <nav className="utrecht-alternate-lang-nav" aria-labelledby="b9704d3a-6fb7-467b-9c35-55b3cd80c9c7">
      <Heading
        level={headingLevel}
        className="utrecht-alternate-lang-nav__heading"
        id="b9704d3a-6fb7-467b-9c35-55b3cd80c9c7"
      >
        Taal kiezen
      </Heading>
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
    </nav>
  );
};

export const AlternateLangButtonGroup = ({ headingLevel = defaultArgs.headingLevel, languages = [] }) => {
  return (
    <section className="utrecht-alternate-lang-nav" aria-labelledby="1053c964-5c2c-46c7-b514-4d6a1462d7b4">
      <Heading
        level={headingLevel}
        className="utrecht-alternate-lang-nav__heading"
        id="1053c964-5c2c-46c7-b514-4d6a1462d7b4"
      >
        Taal kiezen
      </Heading>
      <ButtonGroup>
        {languages.map(({ current, lang, textContent, title }, index) => (
          <LinkButton pressed={!!current} aria-label={title} lang={lang} key={index}>
            {textContent}
          </LinkButton>
        ))}
      </ButtonGroup>
    </section>
  );
};

export default AlternateLangNav;
