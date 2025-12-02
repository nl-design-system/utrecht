import {
  Button,
  FormFieldTextarea,
  FormFieldTextbox,
  Heading2,
  Heading3,
  Link,
  LinkSocial,
  Paragraph,
  Separator,
} from '@utrecht/component-library-react/dist/css-module';
import {
  UtrechtIconArrow,
  UtrechtIconFacebook,
  UtrechtIconX,
  UtrechtIconYoutube,
} from '@utrecht/web-component-library-react';
import React, { useRef, useState } from 'react';

const HulpEnContactTrouwen: React.FC = () => {
  return (
    <div className="utrecht-help-contact-block">
      <Heading2 class="utrecht-heading-3" style={{ textTransform: 'uppercase' }}>
        Hulp en Contact <span style={{ fontWeight: 'normal' }}>Burgerzaken</span>
      </Heading2>

      <div className="utrecht-help-contact-content">
        <div className="utrecht-help-contact-left">
          <Heading3 style={{ fontWeight: 'normal' }}>Telefoon</Heading3>
          <a href="tel:14030" className="utrecht-help-contact-phone">
            14 030
          </a>
          <Paragraph>Maandag t/m vrijdag</Paragraph>
          <Paragraph>9.00 – 17.00 uur</Paragraph>
          <Heading3 style={{ fontWeight: 'normal' }}>E-mail</Heading3>
          <Link href="mailto:burgerzaken@utrecht.nl">burgerzaken@utrecht.nl</Link>
        </div>

        <div className="utrecht-help-contact-right">
          <Heading3 style={{ fontWeight: 'normal' }}>Bezoekadressen</Heading3>
          <Paragraph>Stadskantoor Stadsplateau 1, Utrecht</Paragraph>
          <Paragraph>Wijkservicecentrum Vleuten-de Meern Dorpsplein 1, Vleuten</Paragraph>
        </div>
      </div>
    </div>
  );
};

export default HulpEnContactTrouwen;
