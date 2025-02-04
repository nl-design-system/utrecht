import {
  AccordionProvider,
  Checkbox,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Link,
  LinkList,
  LinkListLink,
  PageFooter,
  Paragraph,
  RadioButton,
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
} from '@utrecht/web-component-library-react';
import React from 'react';
const ContentWebpage: React.FC = () => {
  return (
    <>
      <Heading1>Testtekst voor Font Vergelijking</Heading1>
      <Heading2>Leesbaarheid & Lettercombinaties</Heading2>
      <Paragraph>
        Het is belangrijk om te zien hoe een <strong>lettertype omgaat met lettercombinaties</strong> die visueel op
        elkaar lijken. Daarom testen we combinaties zoals:
        <br /> <br />
        nh rn mnnn mmnn nmnn nmmn <br />
        iIlL1 lL1I Il1l Li1I 1lIl <br />
        0oO0Oo00 <br />
        VV vs W<br />
        8B 3E 5S 2Z 6G <br /> <br />
        Sommige karakters, zoals rn en m, kunnen in bepaalde fonts te veel op elkaar lijken, wat de leesbaarheid
        beïnvloedt. Ook letters zoals I (hoofdletter i), l (kleine letter L) en 1 (cijfer één) kunnen verwarrend zijn in
        sommige fonts.
      </Paragraph>
      <Heading2>Cijfers & Getalnotatie</Heading2>
      <Paragraph>
        Om te beoordelen hoe goed cijfers leesbaar zijn in een bepaald font, testen we verschillende notaties en
        combinaties:
        <br /> <br />
        1234567890 <br />
        3,14159 (Pi) <br />
        2.718 (e) <br />
        1.618 (Phi) <br />
        123.456.789 (decimale notatie) <br />
        ABC-123-xyz <br />
        ID: A1B2C3D4E5 <br /> <br />
        Sommige fonts kunnen bijvoorbeeld 0 (nul) en O (hoofdletter O) verwarrend weergeven. Dit kan een probleem zijn
        bij het lezen van bankrekeningnummers, ID’s en andere kritieke data.
      </Paragraph>
      <Heading2>Woorden met potentiële verwarring</Heading2>
      <Paragraph>
        Hier is een set woorden die veelvoorkomende lettercombinaties testen: <br />
        <br />
        Utrecht Illusie Minimum Millennium Onmiddellijk Ambiguïteit OpenOffice Ribbon Parallel Bill Monitor
        Verantwoordelijkheid Ill Lollipop
        <br /> <br />
        Sommige fonts maken rn en m te weinig onderscheidend. Dit kan problemen veroorzaken als een gebruiker snel door
        tekst scrolt.
      </Paragraph>
      <Heading2>Speciale tekens & symbolen</Heading2>
      <Paragraph>
        Een goed font moet ook duidelijke symbolen hebben voor financiële of technische toepassingen:
        <br />
        <br />
        € $ ¥ £ @ & % * # + - = ~ ^ | / \ ( )<br />
        ! ? . , ; : &quot;` &apos ` ‹ › « » &lsquo; &rsquo; “ ” …<br />
        ½ ¼ ¾ ± ≠ ≥ ≤ ∞ © ® ™ §<br />
        <br />
        Dit is vooral belangrijk voor overheids- en juridische documenten, waar correcte weergave van symbolen
        essentieel is.
      </Paragraph>
      <Heading2>Bold & Gewichtvergelijking</Heading2>
      <Paragraph>
        <span className="utrecht-font-weight-200">Thin (200) Zeer dunne tekst, meestal decoratief</span> <br />
        <span className="utrecht-font-weight-300">Light (300 Dunne tekst, meestal decoratief)</span> <br />
        <span className="utrecht-font-weight-400">Regular (400) Standaard regulier bodytekst</span> <br />
        <span className="utrecht-font-weight-500">Regular (500) Standaard regulier bodytekst</span> <br />
        <span className="utrecht-font-weight-600">Semibold (600) Tussenkoppen, lichte nadruk</span> <br />
        <span className="utrecht-font-weight-700">Bold (700) Sterke nadruk, koppen, knoppen</span> <br />
        <span className="utrecht-font-weight-800">Extrabold (800) Extreem vet, banners, accenten</span> <br />
      </Paragraph>

      <Heading2>Fantasie tekst</Heading2>
      <Paragraph>
        AI alleen, ook wel de ai zegt: Op een kille ochtend, toen de mist langzaam over de straten trok, ontmoette ik
        een intrigerende figuur genaamd <em>Il1l</em>. Hij was een ware meester in het onthullen van verborgen patronen
        in de wereld van typografie. Terwijl we door een doolhof van letters en cijfers wandelden -denk aan{' '}
        <strong>nh rn mnnn mmnn nmnn nmmn</strong> en de mysterieuze <strong>iIlL1 lL1I Il1l Li1I 1lIl</strong>{' '}
        -vertelde hij me dat elk teken een eigen verhaal heeft.
      </Paragraph>
      <Paragraph>
        “Kijk,” zei hij, “in sommige fonts vervagen de grenzen tussen 0 en O, of tussen 1 en I. En de combinatie{' '}
        <strong>0oO0Oo00</strong> kan je soms doen afvragen of je nu cijfers of letters leest. Zelfs{' '}
        <strong>8B 3E 5S 2Z 6G</strong> toont hoe getallen en letters samen een visueel patroon vormen. Het draait
        allemaal om de juiste balans tussen stijl en functionaliteit.”
      </Paragraph>

      <Heading3>Overzichtsgegevens</Heading3>
      <dl className="utrecht-data-list utrecht-data-list--html-dl utrecht-data-list--rows">
        <div className="utrecht-data-list__item">
          <dt className="utrecht-data-list__item-key">Voornaam</dt>
          <dd className="utrecht-data-list__item-value utrecht-data-list__item-value--html-dd">Mees</dd>
        </div>
        <div className="utrecht-data-list__item">
          <dt className="utrecht-data-list__item-key">Achternaam</dt>
          <dd className="utrecht-data-list__item-value utrecht-data-list__item-value--html-dd">de Vos</dd>
        </div>
        <div className="utrecht-data-list__item">
          <dt className="utrecht-data-list__item-key">Adres</dt>
          <dd className="utrecht-data-list__item-value utrecht-data-list__item-value--html-dd utrecht-data-list__item-value--multiline">
            Tweede Kamer der Staten-Generaal Postbus 20018 2500 EA Den Haag
          </dd>
        </div>
      </dl>

      <Heading2>Uiklappers</Heading2>
      <AccordionProvider
        appearance="default"
        sections={[
          {
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n      laborum.',
            expandedAccordion: true,
            label: 'Lorem ipsum 1',
          },
          {
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n      laborum.',
            expandedAccordion: false,
            label: 'Lorem ipsum 2',
          },
          {
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n      laborum.',
            expandedAccordion: false,
            label: 'Lorem ipsum 3',
          },
        ]}
      />
      <Heading2>Forcem Ipsum</Heading2>
      <Paragraph>
        But you didn&apos;t see us alone in the south passage. She expressed her true feelings for me. My...! Why, you
        stuck up...half-witted...scruffy-looking...nerf-herder! Who&apos;s scruffy-looking? I must have hit her pretty
        close to the mark to get her all riled up like that, huh, kid? Why, I guess you don&apos;t know everything about
        women yet? Headquarters personnel, report to command center. Take it easy. Excuse us, please. Princess...we have
        a visitor. We&apos;ve picked up something outside the base in zone twelve, moving east.
      </Paragraph>

      <Paragraph>
        Hello? How interesting. Oh, my. Who are you? Oh, I&apos;m terribly sorry. I, I didn&apos;t mean to intrude.
      </Paragraph>
      <UnorderedList>
        <UnorderedListItem>Did your men deactivate the hyperdrive </UnorderedListItem>
        <UnorderedListItem>The Empire has takes control of the city.</UnorderedListItem>
        <UnorderedListItem>I don&apos;t think it&apos;s wise to</UnorderedListItem>
      </UnorderedList>
    </>
  );
};

export default ContentWebpage;
