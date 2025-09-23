import {
  AlertStory,
  Heading2,
  Heading3,
  Heading4,
  Paragraph,
  Separator,
  SpotlightSection,
  Strong,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import {
  UtrechtIconArrow,
  UtrechtIconFacebook,
  UtrechtIconX,
  UtrechtIconYoutube,
} from '@utrecht/web-component-library-react';
import React, { useRef, useState } from 'react';

const HulpEnContact2: React.FC = () => {
  return (
    <div className="utrecht-help-contact-block">
      <Heading2 style={{ textTransform: 'uppercase' }}>
        Hulp en Contact <span style={{ fontWeight: 'normal' }}>Amsterdamsestraatweg</span>
      </Heading2>

      <div className="utrecht-help-contact-content">
        <div className="utrecht-help-contact-left">
          <Heading3 style={{ fontWeight: 'normal' }}>Telefoon</Heading3>
          <br />
          <a href="tel:14030" className="utrecht-help-contact-phone">
            14 030
          </a>
        </div>

        <div className="utrecht-help-contact-right">
          <Heading3 style={{ fontWeight: 'normal' }}>Volg ons</Heading3>
          <div className="utrecht-social-media-icons">
            <a href="#" className="utrecht-social-media-icon" aria-label="Facebook">
              <UtrechtIconFacebook />
            </a>
            <a href="#" className="utrecht-social-media-icon" aria-label="X">
              <UtrechtIconX />
            </a>
            <a href="#" className="utrecht-social-media-icon" aria-label="YouTube">
              <UtrechtIconYoutube />
            </a>
          </div>
        </div>
      </div>

      <Separator style={{ borderColor: '#ADCBEB', opacity: '0.4' }} />
      <Heading2>Uw vraag of opmerking</Heading2>
      <SpotlightSection style={{ backgroundColor: '#fff' }}>
        <Heading3> Uw vraag of opmerking is met succes verstuurd</Heading3>
        <Heading4>
          <utrecht-icon-checkmark></utrecht-icon-checkmark>
          Wat gaat er nu gebeuren?
        </Heading4>
        <UnorderedList>
          <UnorderedListItem>Als u een e-mail adres heeft ingevuld ontvangt u een bevestigingsmail</UnorderedListItem>
          <UnorderedListItem>De afdeling Projecten gaat met uw verstuurde bericht aan de slag</UnorderedListItem>
          <UnorderedListItem>
            Als u een e-mail adres heeft ingevuld wordt u per email op de hoogte gehouden
          </UnorderedListItem>
        </UnorderedList>
      </SpotlightSection>
    </div>
  );
};

export default HulpEnContact2;
