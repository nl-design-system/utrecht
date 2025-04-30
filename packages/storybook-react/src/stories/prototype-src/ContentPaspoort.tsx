import {
  AccordionProvider,
  ButtonGroup,
  ButtonLink,
  Heading1,
  Heading2,
  Heading3,
  Link,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import { UtrechtIconArrow, UtrechtIconChevronRight } from '@utrecht/web-component-library-react';
import React from 'react';
import urls from './variables.js';
const ContentWebpage: React.FC = () => {
  return (
    <>
      <Heading1>Paspoort en identiteitskaart aanvragen</Heading1>
      <Paragraph appearance="lead">
        Maak een afspraak om een paspoort of identiteitskaart (ID-kaart) aan te vragen.
      </Paragraph>

      <Paragraph>
        U kunt tegelijk een paspoort en een ID-kaart hebben. Met een paspoort kunt u naar alle landen reizen. Een
        ID-kaart is goedkoper, maar u kunt hiermee niet naar alle landen reizen.
      </Paragraph>
      <Link
        className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
        href="#"
      >
        <UtrechtIconChevronRight />
        Bekijk de verschillen tussen een paspoort en een identiteitskaart
      </Link>
      <Heading2>Voorwaarden</Heading2>
      <UnorderedList>
        <UnorderedListItem>U hebt de Nederlandse nationaliteit. </UnorderedListItem>
        <UnorderedListItem>U staat ingeschreven in de gemeente Utrecht.</UnorderedListItem>
      </UnorderedList>

      <Heading2>Wat hebt u nodig?</Heading2>
      <Paragraph>Dit neemt u mee naar de afspraak:</Paragraph>
      <UnorderedList>
        <UnorderedListItem>
          Alle <a href="#">reisdocumenten</a> (paspoort en ID-kaart) die u nu hebt, ook als ze zijn verlopen.
        </UnorderedListItem>
        <UnorderedListItem>
          Een kleurenpasfoto die voldoet aan de eisen voor pasfoto’s. De goedgelijkende pasfoto mag maximaal 6 maanden
          oud zijn op het moment van de aanvraag.
        </UnorderedListItem>
        <UnorderedListItem>
          Een bankpas of contant geld. U betaalt direct bij de aanvraag aan de balie.
        </UnorderedListItem>
      </UnorderedList>

      <Heading3>Kinderen</Heading3>
      <UnorderedList>
        <UnorderedListItem>
          Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.
        </UnorderedListItem>
        <UnorderedListItem>
          Kinderen jonger dan 18 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
        </UnorderedListItem>
        <UnorderedListItem>Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen.</UnorderedListItem>
      </UnorderedList>

      <Paragraph>Meer informatie vindt u onder het kopje Toestemming van ouder(s) of gezaghebber(s).</Paragraph>

      <Heading2>Afspraak maken</Heading2>
      <Paragraph>
        Maak een afspraak voor het aanvragen van een paspoort of ID-kaart. U kunt uw paspoort of ID-kaart 6 werkdagen na
        na de aanvraag ophalen. Ook hiervoor maakt u een afspraak. U kunt het document ook laten bezorgen.
      </Paragraph>

      <Link
        className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
        href="#"
      >
        <UtrechtIconChevronRight />
        Bekijk video met eenvoudige uitleg over het aanvragen van een paspoort
      </Link>
      <Heading3>Aanvragen</Heading3>

      <ButtonGroup direction="row">
        <ButtonLink appearance="primary-action-button" href="#">
          Vraag paspoort aan
          <UtrechtIconArrow />
        </ButtonLink>

        <ButtonLink appearance="primary-action-button" href="#">
          Vraag ID-kaart aan
          <UtrechtIconArrow />
        </ButtonLink>
      </ButtonGroup>

      <Paragraph>
        Bent u 12 jaar of ouder? Dan neemt de medewerker bij de aanvraag 2 vingerafdrukken van u af voor in uw paspoort
        of ID-kaart.
      </Paragraph>

      <Heading3>Ophalen</Heading3>

      <Paragraph>
        Maak een afspraak voor het ophalen van uw paspoort of ID-kaart. U kunt uw document 6 werkdagen na de aanvraag
        ophalen.
        <br />
        <br />
        Bijvoorbeeld: u vraagt het document op maandag aan. U kunt het dan de week erna vanaf dinsdag ophalen.
      </Paragraph>

      <UnorderedList>
        <UnorderedListItem>Haal het document op dezelfde plek op waar u de aanvraag deed.</UnorderedListItem>
        <UnorderedListItem>Haal het document altijd persoonlijk op.</UnorderedListItem>
        <UnorderedListItem>
          Haal het document binnen 3 maanden na de aanvraag op. Daarna vernietigen we het document.
        </UnorderedListItem>
        <UnorderedListItem>
          Is uw kind jonger dan 12 jaar? Lees dan deze informatie over het ophalen van een reisdocument.
        </UnorderedListItem>
      </UnorderedList>

      <ButtonGroup direction="row">
        <ButtonLink appearance="primary-action-button" href="#">
          Haal paspoort op
          <UtrechtIconArrow />
        </ButtonLink>

        <ButtonLink appearance="primary-action-button" href="#">
          Haal ID-kaart op
          <UtrechtIconArrow />
        </ButtonLink>
      </ButtonGroup>

      <Heading3>Laten bezorgen</Heading3>
      <Paragraph>
        U kunt uw paspoort of ID-kaart ook laten bezorgen. Dit kost € 18,65. Geef dit aan tijdens uw aanvraag aan de
        balie.
      </Paragraph>

      <AccordionProvider
        appearance="default"
        sections={[
          {
            body: 'We kunnen uw paspoort of ID-kaart bezorgen op een adres in Nederland (thuis, werkplek of een ander adres)We bezorgen niet op de Waddeneilanden. U betaalt € 18,65 per huishouden. Bezorgen kan niet bij een spoedaanvraag. Zo werkt het: Tijdens de aanvraag aan de balie geeft u aan dat u kiest voor het bezorgen van uw paspoort of ID-kaart. Binnen 5 werkdagen na de aanvraag krijgt u een e-mail of sms van onze bezorgpartij AMP Groep om een bezorgafspraak te maken. U kiest de datum, tijd en plaats van de bezorging. Bezorgen kan ook s avonds of op zaterdag. U bent zelf aanwezig bij de bezorging. Hebt u voor meerdere personen een paspoort of ID-kaart aangevraagd? Dan moeten zij ook zelf aanwezig zijn. Voor kinderen jonger dan 12 jaar geldt dat er altijd een volwassene bij moet zijn.',
            expanded: undefined,
            label: 'Zo werkt het bozorgen van uw paspoort of ID-kaart',
          },
        ]}
      />

      <Heading2>Kosten</Heading2>
      <Heading2>Kosten paspoort en ID-kaart</Heading2>

      <Heading2>Toestemming van ouder(s) of gezaghebber(s)</Heading2>
      <UnorderedList>
        <UnorderedListItem>
          Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.
        </UnorderedListItem>
        <UnorderedListItem>
          Kinderen jonger dan 18 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
        </UnorderedListItem>
      </UnorderedList>

      <Paragraph>Voor een minderjarige is een paspoort of ID-kaart 5 jaar geldig.</Paragraph>

      <Heading3>Aanvragen (kind jonger dan 12 jaar)</Heading3>
      <Paragraph>
        Maak een afspraak. Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen. Lees hieronder hoe u
        toestemming geeft en wat u nodig hebt.
      </Paragraph>

      <AccordionProvider
        appearance="default"
        sections={[
          {
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n      laborum.',
            expandedAccordion: false,
            label: 'Hebt u (beiden) het gezag? Komt u (samen) mee naar de afspraak?',
          },
          {
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n      laborum.',
            expandedAccordion: false,
            label: 'Hebt u beiden het gezag? Komt er 1 ouder mee naar de afspraak?',
          },
          {
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n      laborum.',
            expandedAccordion: false,
            label: 'Komt uw kind alleen naar de afspraak? En hebt u beiden het gezag?',
          },
          {
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n      laborum.',
            expandedAccordion: false,
            label: 'Komt uw kind alleen naar de afspraak? En hebt u als enige het gezag?',
          },
        ]}
      />
      <Heading3>Ophalen (kind jonger dan 12 jaar)</Heading3>
      <Paragraph>
        Maak een afspraak. Uw kind komt naar de balie voor het ophalen. Is uw kind jonger dan 12 jaar? Dan komt er ook
        een volwassene mee die zichzelf kan identificeren. Kinderen vanaf 12 jaar kunnen zelf hun paspoort of ID-kaart
        ophalen.
      </Paragraph>
      <Heading2>Paspoort of ID-kaart kwijt of gestolen</Heading2>
      <Paragraph>
        Bent u uw paspoort of ID-kaart kwijt? Of is uw paspoort of ID-kaart gestolen? Geef dit dan zo snel mogelijk
        door. Dit is belangrijk om misbruik ervan te voorkomen.
      </Paragraph>

      <Link
        className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
        href="#"
      >
        <UtrechtIconChevronRight />
        Geef door dat uw paspoort of ID-kaart kwijt of gestolen is
      </Link>

      <Heading2>Spoedaanvraag</Heading2>
      <Paragraph>Hebt u met spoed een paspoort of ID-kaart nodig?</Paragraph>

      <Link
        className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
        href="#"
      >
        <UtrechtIconChevronRight />
        Maak een afspraak
      </Link>
      <Paragraph>Lukt het niet om op tijd online een afspraak te maken? Bel dan naar 14 030.</Paragraph>

      <Heading2>ophalen</Heading2>
      <Paragraph>Maak een afspraak voor het ophalen van uw paspoort of ID-kaart.</Paragraph>

      <UnorderedList>
        <UnorderedListItem>
          Doet u uw aanvraag op een werkdag voor 14.00 uur? U kunt uw paspoort of ID-kaart de werkdag na uw aanvraag
          ophalen vanaf 12.00 uur.
        </UnorderedListItem>
        <UnorderedListItem>
          Doet u uw aanvraag op een werkdag na 14.00 uur? U kunt uw paspoort of ID-kaart 2 werkdagen na uw aanvraag
          ophalen vanaf 12.00 uur.
        </UnorderedListItem>
      </UnorderedList>
      <Heading3>Kosten</Heading3>
      <Paragraph>Per paspoort of ID-kaart betaalt u € 59,10 extra voor een spoedaanvraag.</Paragraph>

      <AccordionProvider
        appearance="default"
        sections={[
          {
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n      laborum.',
            expandedAccordion: false,
            label: 'Noodpaspoort',
          },
          {
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n      laborum.',
            expandedAccordion: false,
            label: 'Zakenpaspoort',
          },
          {
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n      laborum.',
            expandedAccordion: false,
            label: 'Tweede paspoort',
          },
          {
            body: 'Voor informatie kunt u contact opnemen via telefoonnummer 14 030.',
            expandedAccordion: false,
            label: 'Vlichtilingenpaspoort of vreemdelingenpaspoort',
          },
        ]}
      />
      <Heading2>Meer informatie</Heading2>
      <UnorderedList>
        <UnorderedListItem>Reizen met kinderen</UnorderedListItem>
        <UnorderedListItem>Achternaam van uw partner op uw reisdocument</UnorderedListItem>
        <UnorderedListItem>Geldigheid paspoort en ID-kaart</UnorderedListItem>
        <UnorderedListItem>Identiteitsfraude voorkomen en melden</UnorderedListItem>
        <UnorderedListItem>Vingerafdrukken afnemen voor uw paspoort of ID-kaart</UnorderedListItem>
      </UnorderedList>
    </>
  );
};

export default ContentWebpage;
