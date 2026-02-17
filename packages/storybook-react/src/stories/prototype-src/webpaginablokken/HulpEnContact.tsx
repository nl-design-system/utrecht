import {
  Button,
  FormFieldTextarea,
  FormFieldTextbox,
  Heading2,
  Heading3,
  LinkSocial,
  Separator,
} from '@utrecht/component-library-react/dist/css-module';
import {
  UtrechtIconArrow,
  UtrechtIconFacebook,
  UtrechtIconX,
  UtrechtIconYoutube,
} from '@utrecht/web-component-library-react';
import React, { useRef, useState } from 'react';

// Props interface
interface HulpEnContactProps {
  onSubmit?: () => void;
}

const HulpEnContact: React.FC<HulpEnContactProps> = ({ onSubmit }) => {
  // Constants
  const MAX_CHARACTERS = 1000;

  // State voor textarea
  const [characterCount, setCharacterCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fieldContainerRef = useRef<HTMLDivElement>(null);

  // State voor email
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const emailFieldRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setCharacterCount(value.length);

    if (value.trim() === '') {
      setErrorMessage('Uw vraag of opmerking mag niet leeg zijn.');
    } else {
      setErrorMessage(null);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    // Als er een error was van een vorige submit, haal deze weg zodra gebruiker typt
    if (emailError) {
      setEmailError(null);
    }
  };

  const getStatusMessage = () => {
    if (characterCount > MAX_CHARACTERS) {
      return `Let op, u heeft ${characterCount - MAX_CHARACTERS} tekens te veel ingevoerd.`;
    }
    return `U heeft nog ${MAX_CHARACTERS - characterCount} tekens over.`;
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    let hasErrors = false;

    // Check textarea validatie
    if (characterCount === 0 || characterCount > MAX_CHARACTERS) {
      hasErrors = true;

      if (characterCount === 0) {
        setErrorMessage('Uw vraag of opmerking mag niet leeg zijn.');
      } else if (characterCount > MAX_CHARACTERS) {
        setErrorMessage(`Uw vraag of opmerking is te lang. U heeft ${characterCount - MAX_CHARACTERS} tekens te veel.`);
      }

      // Scroll naar de div met de foutmelding
      fieldContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Check email validatie alleen bij submit (en alleen als er iets is ingevuld)
    if (email && email.trim() !== '') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        setEmailError('Vul een geldig e-mailadres in (bijvoorbeeld: naam@domein.nl)');

        if (!hasErrors) {
          // Alleen scrollen naar email als we nog niet naar textarea hebben gescrolld
          emailFieldRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        hasErrors = true;
      }
    }

    // Als er geen errors zijn, roep de onSubmit callback aan
    if (!hasErrors && onSubmit) {
      onSubmit();
    }
  };

  return (
    <div className="utrecht-help-contact-block">
      <Heading2 class="utrecht-heading-3" style={{ textTransform: 'uppercase' }}>
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
      <Heading2>Uw vraag of opmerking</Heading2>
      {/* Textarea met validatie en karaktertelling */}
      <div ref={fieldContainerRef}>
        <FormFieldTextarea
          name="contact"
          rows={5}
          onChange={handleInputChange}
          status={getStatusMessage()}
          errorMessage={errorMessage}
          invalid={Boolean(errorMessage)}
        />
      </div>

      {/* Email veld - validatie alleen bij submit */}
      <div ref={emailFieldRef}>
        <FormFieldTextbox
          label="Uw e-mail adres"
          name="email"
          type="email"
          value={email}
          description="Vult u geen e-mailadres in? Dan kunnen wij niet reageren op uw vraag of opmerking."
          onChange={handleEmailChange}
          errorMessage={emailError}
          invalid={Boolean(emailError)}
        />
      </div>

      <br />
      {/* Gebruik Button in plaats van ButtonLink */}
      <Button appearance="primary-action-button" onClick={handleSubmit}>
        Verzenden
        <UtrechtIconArrow />
      </Button>
    </div>
  );
};

export default HulpEnContact;
