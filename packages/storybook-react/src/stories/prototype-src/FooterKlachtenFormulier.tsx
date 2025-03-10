import {
  Heading2,
  Heading4,
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
    <PageFooter className="utrecht-footer-grid">
      <Heading2 className="utrecht-footer-title">Gemeente Utrecht</Heading2>

      <div className="utrecht-footer-column">
        <Heading4>Telefoon</Heading4>
        <Link href="tel:14003">14030</Link>
        <LinkList>
          <LinkListLink href="#">
            <UtrechtIconArrow /> Hoe werkt 14030?
          </LinkListLink>
          <LinkListLink href="#">
            <UtrechtIconArrow /> Meer contactinformatie
          </LinkListLink>
          <LinkListLink href="#">
            <UtrechtIconArrow /> Over deze website
          </LinkListLink>
        </LinkList>
      </div>

      <div className="footer-column">
        <Heading4>Adres</Heading4>
        <Paragraph>
          <Strong>Stadskantoor</Strong>
          <br />
          Stadsplateau 1<br />
          3521 AZ Utrecht
        </Paragraph>
      </div>
      <div className="utrecht-footer-column utrecht-social-media">
        <LinkList>
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
        </LinkList>
      </div>
    </PageFooter>
  );
};

export default FooterKlachten;
