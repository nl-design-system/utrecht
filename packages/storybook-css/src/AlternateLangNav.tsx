/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import { ButtonGroup, Link, LinkButton } from '@utrecht/component-library-react';
import type { LinkButtonProps, LinkProps } from '@utrecht/component-library-react';
import React from 'react';
import { HTMLHeading } from './util/HTMLHeading';

interface AlternateLangNavProps {
  headingLevel: number;
  languages: (LinkProps & LinkButtonProps)[];
}

const AlternateLangNavLinks = ({ headingLevel, languages = [] }: AlternateLangNavProps) => {
  return (
    <nav className="utrecht-alternate-lang-nav" aria-labelledby="b9704d3a-6fb7-467b-9c35-55b3cd80c9c7">
      <HTMLHeading
        level={headingLevel}
        className="utrecht-alternate-lang-nav__heading"
        id="b9704d3a-6fb7-467b-9c35-55b3cd80c9c7"
      >
        Taal kiezen
      </HTMLHeading>
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

const AlternateLangNavButtons = ({ headingLevel, languages = [] }: AlternateLangNavProps) => {
  return (
    <form className="utrecht-alternate-lang-nav" aria-labelledby="1053c964-5c2c-46c7-b514-4d6a1462d7b4">
      <HTMLHeading
        level={headingLevel}
        className="utrecht-alternate-lang-nav__heading"
        id="1053c964-5c2c-46c7-b514-4d6a1462d7b4"
      >
        Taal kiezen
      </HTMLHeading>
      <ButtonGroup role="group">
        {languages.map(({ ...restProps }, index) => (
          <LinkButton type="submit" key={index} {...restProps} />
        ))}
      </ButtonGroup>
    </form>
  );
};

interface AlternateLangNavStoryProps extends AlternateLangNavProps {
  element: string | 'a' | 'button';
}

export const AlternateLangNavStory = ({ element, ...restProps }: AlternateLangNavStoryProps) =>
  element === 'button' ? <AlternateLangNavButtons {...restProps} /> : <AlternateLangNavLinks {...restProps} />;
