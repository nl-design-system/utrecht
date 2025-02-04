import {
  ButtonLink,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Link,
  LinkList,
  LinkListLink,
  PageFooter,
  Paragraph,
  SpotlightSection,
  Strong,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import {
  UtrechtIconArrow,
  UtrechtIconFacebook,
  UtrechtIconInstagram,
  UtrechtIconLinkedin,
  UtrechtIconNieuwsbrief,
  UtrechtIconWhatsapp,
  UtrechtSeparator,
} from '@utrecht/web-component-library-react';
import React from 'react';
import FooterKlachten from './FooterKlachtenFormulier.js';
import { Separator } from '../BreadcrumbNav.stories.js';
const Events1: React.FC = () => {
  return (
    <>
      <Heading1>Evenement organiseren</Heading1>
      <SpotlightSection type="info">
        <Heading2>Let op!</Heading2>
        <Paragraph>
          <UnorderedList>
            <UnorderedListItem>De sluitingsdatum voor subsidieaanvraag stopt dit jaar op 14 april!</UnorderedListItem>
            <UnorderedListItem>
              Er is dit jaar extra geld beschikbaar voor wijkfeesten en andere verbindende activiteiten.
            </UnorderedListItem>
          </UnorderedList>
        </Paragraph>
      </SpotlightSection>
      <Paragraph appearance="lead">
        Wilt u een evenement of festival organiseren? Voor evenementen met versterkt geluid hebt u altijd een vergunning
        nodig. Als organisator zorgt u voor een goed en veilig verloop van uw evenement. De gemeente controleert hierop.
      </Paragraph>
      <Heading2>Doe de vergunningcheck</Heading2>
      <Paragraph>
        Als u een evenement organiseert, dan moet u meestal een vergunning aanvragen. Soms hoeft u alleen een melding
        doen. Vul het formulier{' '}
        <Link href="https://www.utrecht.nl/vergunningcheckevenement/">Vergunningcheck buitenevenement</Link> in. U
        krijgt dan meteen informatie over wat u moet doen voor het organiseren van uw evenement.
      </Paragraph>
      <Heading2>Locaties bekijken</Heading2>
      <Paragraph>
        Bekijk welke plekken in de buitenlucht het meest geschikt zijn en welke voorzieningen en regels daar zijn.
      </Paragraph>
      <Link
        href="#"
        className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
        rel="external noopener noreferrer"
      >
        <UtrechtIconArrow />
        Buitenlocaties met voorzieningen en regels
      </Link>
      <Heading2>Vergunning aanvragen</Heading2>
      <ButtonLink appearance="primary-action-button" href="">
        Vraag een evenementenvergunning aan
        <UtrechtIconArrow />
      </ButtonLink>
      <Heading2>Reserveer plek en datum op reserveringskalender</Heading2>
      <Paragraph>
        Meld uw evenement aan voor de reserveringskalender. Dat kan alleen tussen 1 augustus en 31 augustus.
      </Paragraph>
      <Paragraph>
        Staat uw evenement op de reserveringskalender? Dan heeft uw vergunningaanvraag voorrang op andere aanvragen. U
        moet dan dus nog wel een vergunning aanvragen.
      </Paragraph>
      <ButtonLink appearance="primary-action-button" href="">
        Meld plek en datum aan voor reserveringskalender
        <UtrechtIconArrow />
      </ButtonLink>
      <Heading2>Evenementenkalender</Heading2>
      <Paragraph>Bekijk welke evenementen een vergunning hebben gekregen.</Paragraph>
      <Link
        href="#"
        className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
        rel="external noopener noreferrer"
      >
        <UtrechtIconArrow />
        Overzicht aanvragen evenementenvergunning (pdf, 196 kB)
      </Link>{' '}
      <Link
        href="#"
        className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
        rel="external noopener noreferrer"
      >
        <UtrechtIconArrow />
        Overzicht meldingen straatfeest (pdf, 36 kB)
      </Link>
      <Heading2>Evenementenbeleid en regels</Heading2>
      <Paragraph>
        Bekijk het <Link href="#">evenementenbeleid</Link> en de{' '}
        <Link href="#">‘Nadere regel evenementen gemeente Utrecht’</Link> voor meer informatie.
      </Paragraph>
      <Heading2>Subsidies</Heading2>
      <Paragraph>Kijk of u subsidie kunt krijgen voor uw evenement.</Paragraph>
      <UnorderedList>
        <UnorderedListItem>
          <Link>Subsidie voor toegankelijk maken evenement</Link>
        </UnorderedListItem>
        <UnorderedListItem>
          <Link>Subsidie voor evenement over gezondheidevenement</Link>
        </UnorderedListItem>
        <UnorderedListItem>
          <Link>Initiatievenfonds</Link> (voor straatfeesten)
        </UnorderedListItem>
      </UnorderedList>
      <UtrechtSeparator></UtrechtSeparator>
      <Link
        href="#"
        className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
        rel="external noopener noreferrer"
      >
        <UtrechtIconArrow />
        Evenementen in uw buurt
      </Link>
      <Link
        href="#"
        className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
        rel="external noopener noreferrer"
      >
        <UtrechtIconArrow />
        Bezoek in Utrecht
      </Link>
    </>
  );
};

export default Events1;
