import { Body } from '@react-email/body';
import { Button } from '@react-email/button';
import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Text } from '@react-email/text';
import { Heading1 } from '@utrecht/component-library-react';
import * as React from 'react';
import '@utrecht/component-library-css';
import '@utrecht/design-tokens/dist/index.css';

export const InvitationEmailPartner = () => (
  <Html>
    <Head />
    <Body style={body}>
      <Container style={container}>
        <Heading1 style={h1}>Melding Voorgenomen Huwelijk</Heading1>
        <Text style={paragraph}>
          Uw partner heeft u uitgenodigd om te loggen met DigiD. Zo bevestigt u met uw partner dat jullie het huwelijk
          willen regelen.
        </Text>
        <Text>
          <span style={digidButton}>
            <Img width="48" height="48" src="" alt="DigiD" />
            <Button pX={16} pY={8} href="https://example.com" target="_blank" style={link}>
              Reservering aanpassen
            </Button>
          </span>
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

export default InvitationEmailPartner;

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
  WebkitMarginBlockStart: '0.67rem',
  marginBlockEnd: '0.67rem',
  WebkitMarginBlockEnd: '0.67rem',
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

const link: React.CSSProperties = {
  alignItems: 'center',
  backgroundColor: '#24578f',
  borderColor: 'transparent',
  borderRadius: 0,
  borderWidth: '2px',
  borderStyle: 'solid',
  boxSizing: 'border-box',
  color: '#fff',
  display: 'inline-flex',
  fontFamily: 'inherit',
  fontSize: '16px',
  gap: '0.5ch',
  inlineSize: 'auto',
  justifyContent: 'center',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  msUserSelect: 'none',
  userSelect: 'none',
  cursor: 'pointer',
  textDecoration: 'none',
  verticalAlign: 'middle',
};

const logo: React.CSSProperties = {
  maxBlockSize: '58.97px',
  maxInlineSize: '110.57px',
};

const digidButton: React.CSSProperties = {
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
};
