import {
  Heading2,
  Heading3,
  Link,
  LinkList,
  LinkListLink,
  PageFooter,
  Paragraph,
  Strong,
} from '@utrecht/component-library-react/dist/css-module';
import {
  UtrechtIconArrow,
  UtrechtIconFacebook,
  UtrechtIconInstagram,
  UtrechtIconLinkedin,
  UtrechtIconNieuwsbrief,
  UtrechtIconWhatsapp,
} from '@utrecht/web-component-library-react';
import React from 'react';

const FooterKlachten: React.FC = () => {
  return (
    <PageFooter>
      <Heading2>Gemeente Utrecht</Heading2>
      <br />
      <Heading3>Telefoon</Heading3>
      <Link href="tel:14003">14030</Link>
      <br />
      <br />
      <LinkList>
        <React.Fragment key=".0">
          <LinkListLink href="#">
            <UtrechtIconArrow /> Hoe werkt 14030?{' '}
          </LinkListLink>
          <LinkListLink href="#">
            <UtrechtIconArrow /> Meer contactinformatie
          </LinkListLink>
          <LinkListLink href="#">
            <UtrechtIconArrow /> Over deze website
          </LinkListLink>
        </React.Fragment>
      </LinkList>
      <br />
      <Heading3>Adres</Heading3>
      <Paragraph>
        <Strong>Stadskantoor</Strong>
        <br />
        Stadsplateau 1<br />
        3521 AZ Utrecht
      </Paragraph>
      <br />
      <LinkList>
        <React.Fragment key=".0">
          <LinkListLink href="#">
            <UtrechtIconInstagram /> Instagram
          </LinkListLink>
          <LinkListLink href="#">
            <UtrechtIconWhatsapp /> WhatsApp
          </LinkListLink>
          <LinkListLink href="#">
            <UtrechtIconFacebook /> Facebook
          </LinkListLink>
          <LinkListLink href="#">
            <UtrechtIconLinkedin /> LinkedIn
          </LinkListLink>
          <LinkListLink href="#">
            <UtrechtIconNieuwsbrief /> Nieuwsbrief
          </LinkListLink>
        </React.Fragment>
      </LinkList>
    </PageFooter>
  );
};

export default FooterKlachten;
