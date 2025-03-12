import {
  AccordionProvider,
  ButtonGroup,
  ButtonLink,
  Heading1,
  Heading2,
  Link,
  OrderedList,
  OrderedListItem,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import { UtrechtIconArrow, UtrechtIconChevronLeft, UtrechtSeparator } from '@utrecht/web-component-library-react';
import React from 'react';
import urls from './variables.js';
const Events2: React.FC = () => {
  return (
    <>
      <Heading1>Evenement, vergunning aanvragen</Heading1>
      <Paragraph appearance="lead">
        Organiseert u een evenement of festival? Voor evenementen in de openbare ruimte hebt u bijna altijd een
        vergunning nodig. Doe de vergunningscheck en vraag de vergunning aan. Of doe een melding.
      </Paragraph>
      <Heading2>Vergunningcheck</Heading2>
      <Paragraph>
        Doe de vergunningcheck om te kijken of u een evenementenvergunning moet aanvragen of een melding moet doen. U
        ziet ook of u andere vergunningen moet aanvragen, zoals een <Link>tapontheffing</Link> of een{' '}
        <Link>vergunning gemeentegrond gebruiken</Link>.
      </Paragraph>
      <Paragraph>
        Organiseert u een straat- of buurtfeest? Dan is een melding meestal voldoende. Na de vergunningcheck kunt u deze
        melding meteen doen.
      </Paragraph>
      <Link
        href="#"
        className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
        rel="external noopener noreferrer"
      >
        <UtrechtIconArrow />
        Doe de vergunningcheck evenement
      </Link>
      <Heading2>Wat stuurt u mee?</Heading2>
      <Paragraph>Stuur deze 4 bijlagen mee. Lees eerst de richtlijnen.</Paragraph>
      <OrderedList>
        <OrderedListItem>Veiligheidsplan</OrderedListItem>
        <OrderedListItem>Mobiliteitsplan</OrderedListItem>
        <OrderedListItem>Communicatieplan</OrderedListItem>
        <OrderedListItem>
          Plattegrond met alle details van het ingerichte evenemententerrein. Op de plattegrond staan alle objecten,
          attracties, verkooppunten, afvalpunten, veiligheidszaken en andere voorzieningen.
        </OrderedListItem>
      </OrderedList>
      <Heading2>Richtlijnen voor veiligheidsplan</Heading2>
      <AccordionProvider
        appearance=""
        sections={[
          {
            body: 'De richtlijn geeft uitleg bij de onderwerpen die in uw veiligheidsplan naar voren moeten komen. Het is aan u als organisator om een veiligheidsplan op te stellen, in te delen en vorm te geven en de zaken in het plan op te nemen die relevant zijn voor uw evenement. U bent als organisator tenslotte zelf degene die het evenement het beste kent, en ons als gemeente het beste een inkijk kan geven in uw evenement voorafgaand, tijdens de op- en afbouw en tijdens het evenement zelf.\n De richtlijn is dus ook geen kant en klaar veiligheidsplan. Omdat ieder evenement verschilt en bij ieder evenement andere bijzonderheden en risico’s kunnen spelen, is ieder veiligheidsplan in de basis verschillend. Het is dan ook als organisator de bedoeling dat u zelf over veiligheid op en rond uw evenement nadenkt en dit in uw veiligheidsplan verwerkt. De richtlijn kan hierbij helpen, maar is niet uitputtend. \n De richtlijn biedt geen garantie dat u de vergunning zal krijgen. Het kan bijvoorbeeld zo zijn dat er aanvullende informatie wordt opgevraagd. Mocht u vooraf twijfelen over uw vergunningaanvraag kan u altijd contact opnemen met team evenementen voor overleg.\n Vragen\n Heeft u vragen over de veiligheid op uw evenement, het schrijven van een plan of overige vragen rondom uw evenement? Neem dan contact op met de gemeente Utrecht, afdeling VTH, team Evenementen. Dit kan per mail via evenementen@utrecht.nl of via telefoonnummer 14 030 door te vragen naar de afdeling.',
            expandedAccordion: true,
            label: 'Inleiding',
          },
          {
            body: 'Uw evenement wordt opgebouwd en afgebouwd. Dit kan tijd kosten, bijvoorbeeld als er objecten zoals een podium of een tent worden geleverd. Om een goede inschatting te kunnen maken van het gebruik en de toegankelijkheid van de ruimte tijdens de op- en afbouw, is het noodzakelijk dat de tijden en de werkzaamheden rondom de op- en afbouw inzichtelijk worden gemaakt. Beschrijf hierin bijvoorbeeld welk gedeelte u van het terrein nodig heeft, welke gedeeltes worden afgesloten, welke gedeeltes publiek toegankelijk blijven, wanneer u wat gaat opbouwen hoeveel tijd u hiervoor nodig heeft.',
            expandedAccordion: false,
            label: 'Evenement',
          },
          {
            body: 'In de aanvraag van de vergunning heeft u aangegeven wie de organisator en/of de vergunninghouder is. is. Het is het belangrijk om in het veiligheidsplan aan te geven wie op de dag zelf de contactpersoon is, met telefoonnummer. Van de contactpersoon moet in ieder geval de volledige naam, functie en het telefoonnummer zijn opgenomen in het veiligheidsplan. Deze persoon moet tijdens de op- en afbouw en het evenement bereikbaar zijn.',
            expandedAccordion: false,
            label: 'Organisatie',
          },
          {
            body: 'In de aanvraag van de vergunning heeft u aangegeven wie de organisator en/of de vergunninghouder is. is. Het is het belangrijk om in het veiligheidsplan aan te geven wie op de dag zelf de contactpersoon is, met telefoonnummer. Van de contactpersoon moet in ieder geval de volledige naam, functie en het telefoonnummer zijn opgenomen in het veiligheidsplan. Deze persoon moet tijdens de op- en afbouw en het evenement bereikbaar zijn.',
            expandedAccordion: false,
            label: 'Locatie',
          },
          {
            body: 'In de aanvraag van de vergunning heeft u aangegeven wie de organisator en/of de vergunninghouder is. is. Het is het belangrijk om in het veiligheidsplan aan te geven wie op de dag zelf de contactpersoon is, met telefoonnummer. Van de contactpersoon moet in ieder geval de volledige naam, functie en het telefoonnummer zijn opgenomen in het veiligheidsplan. Deze persoon moet tijdens de op- en afbouw en het evenement bereikbaar zijn.',
            expandedAccordion: false,
            label: 'Geluid',
          },
          {
            body: 'In de aanvraag van de vergunning heeft u aangegeven wie de organisator en/of de vergunninghouder is. is. Het is het belangrijk om in het veiligheidsplan aan te geven wie op de dag zelf de contactpersoon is, met telefoonnummer. Van de contactpersoon moet in ieder geval de volledige naam, functie en het telefoonnummer zijn opgenomen in het veiligheidsplan. Deze persoon moet tijdens de op- en afbouw en het evenement bereikbaar zijn.',
            expandedAccordion: false,
            label: 'Voorzieningen',
          },
          {
            body: 'In de aanvraag van de vergunning heeft u aangegeven wie de organisator en/of de vergunninghouder is. is. Het is het belangrijk om in het veiligheidsplan aan te geven wie op de dag zelf de contactpersoon is, met telefoonnummer. Van de contactpersoon moet in ieder geval de volledige naam, functie en het telefoonnummer zijn opgenomen in het veiligheidsplan. Deze persoon moet tijdens de op- en afbouw en het evenement bereikbaar zijn.',
            expandedAccordion: false,
            label: 'Scenarios',
          },
        ]}
      />
      <Heading2>Kosten</Heading2>
      <UnorderedList>
        <UnorderedListItem>
          € 241,60 tot € 11.880,60. Dit hangt af van hoe groot het evenement is en wat de activiteiten zijn.
        </UnorderedListItem>
        <UnorderedListItem>€ 314,70 voor een geluidsmeting (als u versterkt geluid maakt).</UnorderedListItem>
      </UnorderedList>
      <Heading2>Aanvragen</Heading2>
      <Paragraph>U moet uw aanvraag voor een vergunning minimaal 12 weken voor uw evenement aanvragen.</Paragraph>
      <ButtonLink appearance="primary-action-button" href={urls.fonttestStapForm}>
        Vraag vergunning aan
        <UtrechtIconArrow />
      </ButtonLink>
      <Heading2>Toezicht en handhaving</Heading2>
      <Paragraph>De gemeente controleert of u zich houdt aan de regels en de voorwaarden in de vergunning.</Paragraph>
      <Heading2>Meer informatie</Heading2>
      <UnorderedList>
        <UnorderedListItem>
          Meer weten over de regels en het evenementenbeleid? Kijk op <Link href="#">www.utrecht.nl/evenementen</Link>.
        </UnorderedListItem>
        <UnorderedListItem>
          <Link href="#">Bekijk welk evenement een evenementenvergunning heeft gekregen</Link>.
        </UnorderedListItem>
      </UnorderedList>

      <UtrechtSeparator></UtrechtSeparator>
      <ButtonGroup direction="column">
        <ButtonLink appearance="primary-action-button" href={urls.fonttestStapForm}>
          Naar test formulier
          <UtrechtIconArrow />
        </ButtonLink>
        <Link
          className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
          href={urls.fonttestStap1}
        >
          <UtrechtIconChevronLeft />
          Pagina terug
        </Link>
      </ButtonGroup>
    </>
  );
};

export default Events2;
