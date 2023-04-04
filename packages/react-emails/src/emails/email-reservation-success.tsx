import { Body } from '@react-email/body';
import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Text } from '@react-email/text';
import { Heading1 } from '@utrecht/component-library-react';
import React from 'react';
import '@utrecht/component-library-css';
import '@utrecht/design-tokens/dist/index.css';

export const EmailReservationSuccess = () => (
  <Html>
    <Head />
    <Body style={body}>
      <Container style={container}>
        <Heading1 style={h1}>Melding Voorgenomen Huwelijk</Heading1>
        <Text style={paragraph}>
          Beste <span translate="no">firstname</span> en <span translate="no">lastname</span>,
        </Text>
        <Text style={paragraph}>
          De reservering is geslaagd. We hebben de melding van jullie voorgenomen huwelijk ontvangen.
        </Text>
        <Text style={paragraph}>
          Jullie gaan trouwen op <span>date variable</span>, op de vierde verdieping van het Stadskantoor. De ceremonie
          is een (marryType variable).
        </Text>
        <Text style={paragraph}>
          Tot <span>date variable</span> kunnen jullie getuigen wijzigen of meer getuigen uitnodigen. Op
          <span> variable date</span> moeten de getuigen bij de gemeente bekend zijn. De getuigen moet zelf inloggen met
          hun DigiD.
        </Text>
        <Text style={paragraph}>
          Vóór <span>date variable</span> kunnen jullie nog besluiten of jullie een trouwboekje willen. Je kunt dat
          regelen door in te loggen met je DigiD. Daarna reken je weer af met iDEAL.
        </Text>
        <Text style={paragraph}>
          Willen jullie iets aanpassen aan de reservering, of gewoon kijken of alles goed is? Dat kan door in te loggen
          met je DigiD:
        </Text>
        <Text style={paragraph}>Of kopieer het adres hieronder en open het in je browser:</Text>
        <Text style={paragraph}>
          <span translate="no">url</span>
        </Text>
        <Text style={paragraph}>Met vriendelijke groet,</Text>
        <span translate="no" style={paragraph}>
          Gemeente Utrecht
          <br />
          Publiekszaken
          <br />
          Burgerzaken
          <br />
          Stadsplateau 1, 3521 AZ Utrecht
        </span>
        <Text>
          <Img
            src="https://nl-design-system.github.io/utrecht/storybook/logo.svg"
            style={logo}
            alt="Gemeente Utrecht Logo"
          />
        </Text>
      </Container>
    </Body>
  </Html>
);

export default EmailReservationSuccess;

const container: React.CSSProperties = {
  marginBlockEnd: '1em',
  marginBlockStart: '1em',
  marginInlineEnd: 'auto',
  marginInlineStart: 'auto',
  maxInlineSize: '768px',
  paddingBlockEnd: '2em',
  paddingBlockStart: '2em',
  paddingInlineEnd: '2em',
  paddingInlineStart: '2em',
};

const body: React.CSSProperties = {
  fontFamily: '"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "Arial", sans-serif',
  marginBlockEnd: 0,
  marginBlockStart: 0,
  marginInlineEnd: 0,
  marginInlineStart: 0,
  backgroundColor: '#ffffff',
};

const h1: React.CSSProperties = {
  pageBreakInside: 'avoid',
  color: '#000',
  fontFamily: 'inherit',
  fontSize: '1.5rem',
  fontWeight: 700,
  letterSpacing: 'normal',
  lineHeight: 1.25,
  WebkitMarginStart: '0.67rem',
  marginBlockEnd: '0.67rem',
  WebkitMarginEnd: '0.67rem',
  marginBlockStart: '0.67rem',
  pageBreakAfter: 'avoid',
  textTransform: 'inherit',
};

const paragraph: React.CSSProperties = {
  color: '#000',
  fontFamily: 'inherit',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: 1.5,
  WebkitMarginStart: '0',
  marginBlockEnd: '0',
  WebkitMarginEnd: '16px',
  marginBlockStart: '16px',
};

const logo: React.CSSProperties = {
  maxBlockSize: '58.97px',
  maxInlineSize: '110.57px',
};
