import {
  AlertStory,
  Heading2,
  Heading3,
  Heading4,
  LinkSocial,
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
        Hulp en Contact <span style={{ fontWeight: 'normal' }}>Trouwen</span>
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
          <LinkSocial
            external
            href="https://www.facebook.com/GemeenteUtrecht"
            title="facebook"
            style={{ marginRight: '0.5em' }}
          >
            <UtrechtIconFacebook />
          </LinkSocial>
          <LinkSocial
            external
            href="https://x.com/Straatweg"
            title="Amsterdamsestraatweg op Twitter"
            style={{ marginRight: '0.5em' }}
          >
            <UtrechtIconX />
          </LinkSocial>
          <LinkSocial
            external
            href="https://www.youtube.com/channel/UCel6O4Zyizeg9rAW94QNAhQ/videos"
            title="Amsterdamsestraatweg op Youtube"
          >
            <UtrechtIconYoutube />
          </LinkSocial>
        </div>
      </div>

      <Separator style={{ borderColor: '#ADCBEB', opacity: '0.4' }} />
      <SpotlightSection style={{ backgroundColor: '#fff' }}>
        <Heading3>
          <span className="utrecht-icon-outline">
            <utrecht-icon-checkmark></utrecht-icon-checkmark>
          </span>
          Bedankt voor uw vraag of opmerking
        </Heading3>
        <Heading4>Wat gaat er nu gebeuren?</Heading4>
        <UnorderedList>
          <UnorderedListItem>
            U krijgt direct een e-mail van ons. Daarin staat dat we uw bericht goed hebben ontvangen.
          </UnorderedListItem>
          <UnorderedListItem>Wij gaan met uw vraag of opmerking aan het werk.</UnorderedListItem>
          <UnorderedListItem>Wij laten u daarna per e-mail weten hoe het verder gaat.</UnorderedListItem>
        </UnorderedList>
      </SpotlightSection>
    </div>
  );
};

export default HulpEnContact2;
