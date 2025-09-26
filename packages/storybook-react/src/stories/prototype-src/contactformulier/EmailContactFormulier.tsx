import {
  ButtonLink,
  Heading1,
  Heading2,
  Link,
  LinkList,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import { UtrechtIconArrow, UtrechtIconChevronRight } from '@utrecht/web-component-library-react';
import React from 'react';
import urls from '../variables.js';
const EmailContact: React.FC = () => {
  return (
    <>
      <Heading1>Even nakijken</Heading1>
      <Paragraph>Is je vraag of opmerking echt wel aangekomen? Dat wil je zeker weten.</Paragraph>
      <Link
        className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
        href={urls.contactformEmailMobile}
      >
        <UtrechtIconChevronRight />
        Bekijk de e-mail op je mobiele telefoon
      </Link>
      <Link
        className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
        href={urls.contactformEmailDesktop}
      >
        <UtrechtIconChevronRight />
        Bekijk de e-mail op je desktop
      </Link>
    </>
  );
};

export default EmailContact;
