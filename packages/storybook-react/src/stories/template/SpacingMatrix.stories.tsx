import type { Meta } from '@storybook/react-vite';
import React from 'react';
import { elemProps, makeControls, makeStory, matrixDefault, StoryShell, useSpacingStory } from './spacing-story-kit.js';
import {
  Accordion,
  AccordionProvider,
  ActionGroup,
  Alert,
  BadgeList,
  Blockquote,
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Button,
  ButtonGroup,
  DataList,
  DataListItem,
  DataListKey,
  DataListValue,
  Figure,
  FigureCaption,
  FormField,
  FormFieldTextbox,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Link,
  OrderedList,
  OrderedListItem,
  Paragraph,
  RichText,
  Separator,
  SpotlightSection,
  StatusBadge,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableContainer,
  TableHeader,
  TableHeaderCell,
  TableRow,
  UnorderedList,
  UnorderedListItem,
} from '../../../../component-library-react/src/index.js';

// ---- Story 1: Headings & co ----

const HEADINGS = [Heading1, Heading2, Heading3, Heading4, Heading5, Heading6] as const;
const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const HEADINGS_DEFAULTS = Object.fromEntries(
  [1, 2, 3, 4, 5, 6].map((n) => [`h${n}`, matrixDefault(`utrecht-heading-${n}`, 'utrecht-paragraph')]),
) as Record<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', string>;

function HeadingsAndCoStory() {
  const { terms, setTerm, ...shellProps } = useSpacingStory(HEADINGS_DEFAULTS);

  const controls = makeControls(
    {
      h1: 'H1 → Paragraph',
      h2: 'H2 → Paragraph',
      h3: 'H3 → Paragraph',
      h4: 'H4 → Paragraph',
      h5: 'H5 → Paragraph',
      h6: 'H6 → Paragraph',
    },
    terms,
    setTerm,
    HEADINGS_DEFAULTS,
  );

  return (
    <StoryShell {...shellProps} controls={controls}>
      {HEADINGS.map((HeadingN, i) => {
        const n = i + 1;
        const key = `h${n}` as keyof typeof HEADINGS_DEFAULTS;
        return (
          <React.Fragment key={n}>
            <HeadingN {...elemProps(terms[key], `utrecht-heading-${n}`, 'utrecht-paragraph')}>Heading {n}</HeadingN>
            <Paragraph>{LOREM}</Paragraph>
          </React.Fragment>
        );
      })}
    </StoryShell>
  );
}

// ---- Story 2: Realistische pagina inhoud ----

const EVENEMENT_DEFAULTS = {
  h1ToParagraph: matrixDefault('utrecht-heading-1', 'utrecht-paragraph'),
  paragraphToParagraph: matrixDefault('utrecht-paragraph', 'utrecht-paragraph'),
  paragraphToHeading2: matrixDefault('utrecht-paragraph', 'utrecht-heading-2'),
  paragraphToLink: matrixDefault('utrecht-paragraph', 'utrecht-link'),
  linkToHeading2: matrixDefault('utrecht-link', 'utrecht-heading-2'),
  heading2ToParagraph: matrixDefault('utrecht-heading-2', 'utrecht-paragraph'),
  paragraphToHeading3: matrixDefault('utrecht-paragraph', 'utrecht-heading-3'),
  heading3ToParagraph: matrixDefault('utrecht-heading-3', 'utrecht-paragraph'),
};

function EvenementOrganiserenStory() {
  const { terms, setTerm, ...shellProps } = useSpacingStory(EVENEMENT_DEFAULTS);

  const controls = makeControls(
    {
      h1ToParagraph: 'H1 → Paragraph',
      paragraphToParagraph: 'Paragraph → Paragraph',
      paragraphToHeading2: 'Paragraph → H2',
      paragraphToLink: 'Paragraph → Link',
      linkToHeading2: 'Link → H2',
      heading2ToParagraph: 'H2 → Paragraph',
      paragraphToHeading3: 'Paragraph → H3',
      heading3ToParagraph: 'H3 → Paragraph',
    },
    terms,
    setTerm,
    EVENEMENT_DEFAULTS,
  );

  return (
    <StoryShell {...shellProps} controls={controls}>
      <Heading1 {...elemProps(terms.h1ToParagraph, 'utrecht-heading-1', 'utrecht-paragraph')}>
        Evenement organiseren
      </Heading1>
      <Paragraph appearance="lead" {...elemProps(terms.paragraphToParagraph, 'utrecht-paragraph', 'utrecht-paragraph')}>
        Wilt u een evenement of festival organiseren? Voor evenementen met versterkt geluid hebt u altijd een vergunning
        nodig. Als organisator zorgt u voor een goed en veilig verloop van uw evenement. De gemeente controleert hierop.
      </Paragraph>
      <Paragraph {...elemProps(terms.paragraphToHeading2, 'utrecht-paragraph', 'utrecht-heading-2')}>
        Wilt u een straatfeest organiseren? Ga dan naar www.utrecht.nl/straatfeest.
      </Paragraph>

      <Heading2 {...elemProps(terms.heading2ToParagraph, 'utrecht-heading-2', 'utrecht-paragraph')}>
        Locaties bekijken
      </Heading2>
      <Paragraph {...elemProps(terms.paragraphToLink, 'utrecht-paragraph', 'utrecht-link')}>
        Bekijk welke plekken in de buitenlucht het meest geschikt zijn en welke voorzieningen en regels daar zijn.
      </Paragraph>
      <Link href="#" {...elemProps(terms.linkToHeading2, 'utrecht-link', 'utrecht-heading-2')}>
        Buitenlocaties met voorzieningen en regels
      </Link>

      {/* Both H2 elements share the same heading2ToParagraph term */}
      <Heading2 {...elemProps(terms.heading2ToParagraph, 'utrecht-heading-2', 'utrecht-paragraph')}>
        Reserveer plek en datum op reserveringskalender
      </Heading2>
      <Paragraph {...elemProps(terms.paragraphToParagraph, 'utrecht-paragraph', 'utrecht-paragraph')}>
        Meld uw evenement aan voor de reserveringskalender. Dat kan alleen tussen 1 augustus en 31 augustus.
      </Paragraph>
      <Paragraph {...elemProps(terms.paragraphToHeading3, 'utrecht-paragraph', 'utrecht-heading-3')}>
        Staat uw evenement op de reserveringskalender? Dan heeft uw vergunningaanvraag voorrang op andere aanvragen. U
        vraagt dan dus nog wel een vergunning aan.
      </Paragraph>

      <Heading3 {...elemProps(terms.heading3ToParagraph, 'utrecht-heading-3', 'utrecht-paragraph')}>
        Evenementenkalender
      </Heading3>
      <Paragraph>Bekijk welke evenementen een vergunning hebben gekregen.</Paragraph>
    </StoryShell>
  );
}

// ---- Story 3: Alle componenten ----

const ALLE_DEFAULTS = {
  breadcrumbNavToHeading1: matrixDefault('utrecht-breadcrumb-nav', 'utrecht-heading-1'),
  heading1ToParagraph: matrixDefault('utrecht-heading-1', 'utrecht-paragraph'),
  paragraphToParagraph: matrixDefault('utrecht-paragraph', 'utrecht-paragraph'),
  paragraphToHeading2: matrixDefault('utrecht-paragraph', 'utrecht-heading-2'),
  heading2ToParagraph: matrixDefault('utrecht-heading-2', 'utrecht-paragraph'),
  paragraphToUnorderedList: matrixDefault('utrecht-paragraph', 'utrecht-unordered-list'),
  unorderedListToParagraph: matrixDefault('utrecht-unordered-list', 'utrecht-paragraph'),
  paragraphToHeading3: matrixDefault('utrecht-paragraph', 'utrecht-heading-3'),
  heading3ToParagraph: matrixDefault('utrecht-heading-3', 'utrecht-paragraph'),
  heading2ToOrderedList: matrixDefault('utrecht-heading-2', 'utrecht-ordered-list'),
  orderedListToParagraph: matrixDefault('utrecht-ordered-list', 'utrecht-paragraph'),
  paragraphToBlockquote: matrixDefault('utrecht-paragraph', 'utrecht-blockquote'),
  blockquoteToParagraph: matrixDefault('utrecht-blockquote', 'utrecht-paragraph'),
  paragraphToLink: matrixDefault('utrecht-paragraph', 'utrecht-link'),
  linkToParagraph: matrixDefault('utrecht-link', 'utrecht-paragraph'),
  heading2ToFigure: matrixDefault('utrecht-heading-2', 'utrecht-figure'),
  figureToParagraph: matrixDefault('utrecht-figure', 'utrecht-paragraph'),
  paragraphToTable: matrixDefault('utrecht-paragraph', 'utrecht-table'),
  tableToParagraph: matrixDefault('utrecht-table', 'utrecht-paragraph'),
  heading2ToDataList: matrixDefault('utrecht-heading-2', 'utrecht-data-list'),
  dataListToParagraph: matrixDefault('utrecht-data-list', 'utrecht-paragraph'),
  paragraphToAlert: matrixDefault('utrecht-paragraph', 'utrecht-alert'),
  alertToParagraph: matrixDefault('utrecht-alert', 'utrecht-paragraph'),
  paragraphToAccordion: matrixDefault('utrecht-paragraph', 'utrecht-accordion'),
  accordionToAccordion: matrixDefault('utrecht-accordion', 'utrecht-accordion'),
  accordionToParagraph: matrixDefault('utrecht-accordion', 'utrecht-paragraph'),
  heading2ToFormField: matrixDefault('utrecht-heading-2', 'utrecht-form-field'),
  formFieldToFormField: matrixDefault('utrecht-form-field', 'utrecht-form-field'),
  formFieldToButtonGroup: matrixDefault('utrecht-form-field', 'utrecht-button-group'),
  buttonGroupToParagraph: matrixDefault('utrecht-button-group', 'utrecht-paragraph'),
  paragraphToSpotlightSection: matrixDefault('utrecht-paragraph', 'utrecht-spotlight-section'),
  spotlightSectionToSpotlightSection: matrixDefault('utrecht-spotlight-section', 'utrecht-spotlight-section'),
  spotlightSectionToParagraph: matrixDefault('utrecht-spotlight-section', 'utrecht-paragraph'),
  paragraphToBadgeList: matrixDefault('utrecht-paragraph', 'utrecht-badge-list'),
  badgeListToParagraph: matrixDefault('utrecht-badge-list', 'utrecht-paragraph'),
  paragraphToSeparator: matrixDefault('utrecht-paragraph', 'utrecht-separator'),
  separatorToParagraph: matrixDefault('utrecht-separator', 'utrecht-paragraph'),
};

function AlleComponentenStory() {
  const { terms, setTerm, ...shellProps } = useSpacingStory(ALLE_DEFAULTS);

  const controls = makeControls(
    {
      breadcrumbNavToHeading1: 'BreadcrumbNav → H1',
      heading1ToParagraph: 'H1 → Paragraph',
      paragraphToParagraph: 'Paragraph → Paragraph',
      paragraphToHeading2: 'Paragraph → H2',
      heading2ToParagraph: 'H2 → Paragraph',
      paragraphToUnorderedList: 'Paragraph → UnorderedList',
      unorderedListToParagraph: 'UnorderedList → Paragraph',
      paragraphToHeading3: 'Paragraph → H3',
      heading3ToParagraph: 'H3 → Paragraph',
      heading2ToOrderedList: 'H2 → OrderedList',
      orderedListToParagraph: 'OrderedList → Paragraph',
      paragraphToBlockquote: 'Paragraph → Blockquote',
      blockquoteToParagraph: 'Blockquote → Paragraph',
      paragraphToLink: 'Paragraph → Link',
      linkToParagraph: 'Link → Paragraph',
      heading2ToFigure: 'H2 → Figure',
      figureToParagraph: 'Figure → Paragraph',
      paragraphToTable: 'Paragraph → Table',
      tableToParagraph: 'Table → Paragraph',
      heading2ToDataList: 'H2 → DataList',
      dataListToParagraph: 'DataList → Paragraph',
      paragraphToAlert: 'Paragraph → Alert',
      alertToParagraph: 'Alert → Paragraph',
      paragraphToAccordion: 'Paragraph → Accordion',
      accordionToAccordion: 'Accordion → Accordion',
      accordionToParagraph: 'Accordion → Paragraph',
      heading2ToFormField: 'H2 → FormField',
      formFieldToFormField: 'FormField → FormField',
      formFieldToButtonGroup: 'FormField → ButtonGroup',
      buttonGroupToParagraph: 'ButtonGroup → Paragraph',
      paragraphToSpotlightSection: 'Paragraph → SpotlightSection',
      spotlightSectionToSpotlightSection: 'SpotlightSection → SpotlightSection',
      spotlightSectionToParagraph: 'SpotlightSection → Paragraph',
      paragraphToBadgeList: 'Paragraph → BadgeList',
      badgeListToParagraph: 'BadgeList → Paragraph',
      paragraphToSeparator: 'Paragraph → Separator',
      separatorToParagraph: 'Separator → Paragraph',
    },
    terms,
    setTerm,
    ALLE_DEFAULTS,
  );

  return (
    <StoryShell {...shellProps} controls={controls}>
      {/* BreadcrumbNav → Heading1 */}
      <BreadcrumbNav
        label="Kruimelpad"
        {...elemProps(terms.breadcrumbNavToHeading1, 'utrecht-breadcrumb-nav', 'utrecht-heading-1')}
      >
        <BreadcrumbNavLink href="#">Home</BreadcrumbNavLink>
        <BreadcrumbNavSeparator />
        <BreadcrumbNavLink href="#">Vergunningen</BreadcrumbNavLink>
        <BreadcrumbNavSeparator />
        <BreadcrumbNavLink href="#" current>
          Parkeervergunning aanvragen
        </BreadcrumbNavLink>
      </BreadcrumbNav>

      {/* Heading1 → Paragraph */}
      <Heading1 {...elemProps(terms.heading1ToParagraph, 'utrecht-heading-1', 'utrecht-paragraph')}>
        Parkeervergunning aanvragen
      </Heading1>

      {/* Paragraph → Paragraph */}
      <Paragraph appearance="lead" {...elemProps(terms.paragraphToParagraph, 'utrecht-paragraph', 'utrecht-paragraph')}>
        Met een parkeervergunning kunt u uw auto parkeren in een vergunninghoudergebied. U vraagt een vergunning aan
        voor uw woonadres of werkadres in Utrecht.
      </Paragraph>

      {/* Paragraph → Heading2 */}
      <Paragraph {...elemProps(terms.paragraphToHeading2, 'utrecht-paragraph', 'utrecht-heading-2')}>
        De aanvraag verloopt volledig digitaal. Houd uw DigiD bij de hand.
      </Paragraph>

      {/* Heading2 → Paragraph */}
      <Heading2 {...elemProps(terms.heading2ToParagraph, 'utrecht-heading-2', 'utrecht-paragraph')}>
        Voorwaarden
      </Heading2>

      {/* Paragraph → UnorderedList */}
      <Paragraph {...elemProps(terms.paragraphToUnorderedList, 'utrecht-paragraph', 'utrecht-unordered-list')}>
        U kunt een parkeervergunning aanvragen als u voldoet aan de volgende voorwaarden:
      </Paragraph>

      {/* UnorderedList → Paragraph */}
      <UnorderedList {...elemProps(terms.unorderedListToParagraph, 'utrecht-unordered-list', 'utrecht-paragraph')}>
        <UnorderedListItem>U bent ingeschreven op een adres in Utrecht</UnorderedListItem>
        <UnorderedListItem>Uw adres ligt in een vergunninghoudergebied</UnorderedListItem>
        <UnorderedListItem>U heeft een voertuig op naam staan of een leasecontract</UnorderedListItem>
        <UnorderedListItem>U heeft nog geen parkeervergunning voor dit adres</UnorderedListItem>
      </UnorderedList>

      {/* Paragraph → Heading3 */}
      <Paragraph {...elemProps(terms.paragraphToHeading3, 'utrecht-paragraph', 'utrecht-heading-3')}>
        Woont u in een gebied zonder vergunningplicht? Dan kunt u geen vergunning aanvragen.
      </Paragraph>

      {/* Heading3 → Paragraph */}
      <Heading3 {...elemProps(terms.heading3ToParagraph, 'utrecht-heading-3', 'utrecht-paragraph')}>
        Controleer uw gebied
      </Heading3>
      <Paragraph {...elemProps(terms.paragraphToHeading2, 'utrecht-paragraph', 'utrecht-heading-2')}>
        Gebruik de kaart op de website om te controleren of uw adres in een vergunninghoudergebied valt.
      </Paragraph>

      {/* Heading2 → OrderedList */}
      <Heading2 {...elemProps(terms.heading2ToOrderedList, 'utrecht-heading-2', 'utrecht-ordered-list')}>
        Stap voor stap aanvragen
      </Heading2>

      {/* OrderedList → Paragraph */}
      <OrderedList {...elemProps(terms.orderedListToParagraph, 'utrecht-ordered-list', 'utrecht-paragraph')}>
        <OrderedListItem>Log in met DigiD op Mijn Utrecht</OrderedListItem>
        <OrderedListItem>Kies 'Parkeervergunning aanvragen'</OrderedListItem>
        <OrderedListItem>Vul uw kenteken en adresgegevens in</OrderedListItem>
        <OrderedListItem>Upload uw kentekenbewijs of leasecontract</OrderedListItem>
        <OrderedListItem>Controleer en verstuur uw aanvraag</OrderedListItem>
      </OrderedList>

      {/* Paragraph → Blockquote */}
      <Paragraph {...elemProps(terms.paragraphToBlockquote, 'utrecht-paragraph', 'utrecht-blockquote')}>
        De gemeente Utrecht hanteert een quotum per straat. Zorg dat u op tijd aanvraagt.
      </Paragraph>

      {/* Blockquote → Paragraph */}
      <Blockquote {...elemProps(terms.blockquoteToParagraph, 'utrecht-blockquote', 'utrecht-paragraph')}>
        "Na goedkeuring van uw aanvraag ontvangt u de vergunning binnen 5 werkdagen digitaal. U kunt daarna direct
        parkeren in het aangewezen gebied."
      </Blockquote>

      {/* Paragraph → Link */}
      <Paragraph {...elemProps(terms.paragraphToLink, 'utrecht-paragraph', 'utrecht-link')}>
        Heeft u een elektrisch voertuig? Dan kunt u ook een oplaadpas aanvragen. Meer informatie vindt u op:
      </Paragraph>

      {/* Link → Paragraph */}
      <Link href="#" {...elemProps(terms.linkToParagraph, 'utrecht-link', 'utrecht-paragraph')}>
        Oplaadpas aanvragen voor elektrische voertuigen
      </Link>

      {/* Paragraph → Heading2 (reused control) */}
      <Paragraph {...elemProps(terms.paragraphToHeading2, 'utrecht-paragraph', 'utrecht-heading-2')}>
        De oplaadpas is gratis voor vergunninghouders met een elektrisch voertuig.
      </Paragraph>

      {/* Heading2 → Figure */}
      <Heading2 {...elemProps(terms.heading2ToFigure, 'utrecht-heading-2', 'utrecht-figure')}>
        Vergunninghoudergebieden in Utrecht
      </Heading2>

      {/* Figure → Paragraph */}
      <Figure {...elemProps(terms.figureToParagraph, 'utrecht-figure', 'utrecht-paragraph')}>
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='200'%3E%3Crect width='600' height='200' fill='%23e8e8e8'/%3E%3Ctext x='300' y='110' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%23666'%3EKaart van Utrecht parkeergebieden%3C/text%3E%3C/svg%3E"
          alt="Kaart met vergunninghoudergebieden in Utrecht"
          style={{ width: '100%', display: 'block' }}
        />
        <FigureCaption>Overzicht van alle vergunninghoudergebieden in de gemeente Utrecht (2025)</FigureCaption>
      </Figure>

      {/* Paragraph → Table */}
      <Paragraph {...elemProps(terms.paragraphToTable, 'utrecht-paragraph', 'utrecht-table')}>
        De tarieven voor een parkeervergunning zijn afhankelijk van uw voertuigcategorie:
      </Paragraph>

      {/* Table → Paragraph */}
      <TableContainer>
        <Table {...elemProps(terms.tableToParagraph, 'utrecht-table', 'utrecht-paragraph')}>
          <TableCaption>Tarieven parkeervergunning 2025</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHeaderCell scope="col">Voertuigcategorie</TableHeaderCell>
              <TableHeaderCell scope="col">Tarief per jaar</TableHeaderCell>
              <TableHeaderCell scope="col">Tarief per maand</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Personenauto (brandstof)</TableCell>
              <TableCell>€ 312,00</TableCell>
              <TableCell>€ 26,00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Elektrisch voertuig</TableCell>
              <TableCell>€ 156,00</TableCell>
              <TableCell>€ 13,00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Motor / scooter</TableCell>
              <TableCell>€ 78,00</TableCell>
              <TableCell>€ 6,50</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Heading2 → DataList */}
      <Paragraph {...elemProps(terms.paragraphToHeading2, 'utrecht-paragraph', 'utrecht-heading-2')}>
        De vergunning wordt automatisch verlengd tenzij u opzegt.
      </Paragraph>
      <Heading2 {...elemProps(terms.heading2ToDataList, 'utrecht-heading-2', 'utrecht-data-list')}>
        Overzicht aanvraaggegevens
      </Heading2>

      {/* DataList → Paragraph */}
      <DataList {...elemProps(terms.dataListToParagraph, 'utrecht-data-list', 'utrecht-paragraph')}>
        <DataListItem>
          <DataListKey>Aanvrager</DataListKey>
          <DataListValue>J. de Vries</DataListValue>
        </DataListItem>
        <DataListItem>
          <DataListKey>Adres</DataListKey>
          <DataListValue>Oudegracht 100, 3511 AX Utrecht</DataListValue>
        </DataListItem>
        <DataListItem>
          <DataListKey>Kenteken</DataListKey>
          <DataListValue>AB-12-CD</DataListValue>
        </DataListItem>
        <DataListItem>
          <DataListKey>Geldig tot</DataListKey>
          <DataListValue>31 december 2025</DataListValue>
        </DataListItem>
      </DataList>

      {/* Paragraph → Alert */}
      <Paragraph {...elemProps(terms.paragraphToAlert, 'utrecht-paragraph', 'utrecht-alert')}>
        Let op: er geldt een wachttijd van maximaal 4 weken voor uw gebied.
      </Paragraph>

      {/* Alert → Paragraph */}
      <Alert type="warning" {...elemProps(terms.alertToParagraph, 'utrecht-alert', 'utrecht-paragraph')}>
        <Heading3>Beperkt aantal vergunningen beschikbaar</Heading3>
        <Paragraph>
          In uw straat zijn nog 3 vergunningen beschikbaar. Dien uw aanvraag zo snel mogelijk in om in aanmerking te
          komen.
        </Paragraph>
      </Alert>

      {/* Paragraph → Accordion */}
      <Paragraph {...elemProps(terms.paragraphToAccordion, 'utrecht-paragraph', 'utrecht-accordion')}>
        Heeft u vragen over het aanvraagproces? Bekijk dan de veelgestelde vragen hieronder.
      </Paragraph>

      {/* Accordion → Accordion (via AccordionProvider) */}
      <AccordionProvider
        heading="Veelgestelde vragen"
        headingLevel={3}
        sections={[
          {
            label: 'Hoelang duurt de behandeling van mijn aanvraag?',
            body: (
              <Paragraph>
                De gemeente behandelt uw aanvraag binnen 5 werkdagen. U ontvangt een bevestiging per e-mail zodra de
                vergunning is goedgekeurd.
              </Paragraph>
            ),
            defaultExpanded: true,
            ...elemProps(terms.accordionToAccordion, 'utrecht-accordion', 'utrecht-accordion'),
          },
          {
            label: 'Kan ik een vergunning aanvragen voor een leaseauto?',
            body: (
              <Paragraph>
                Ja, dat kan. Upload dan een kopie van uw leasecontract waarop uw naam en het kenteken vermeld staan.
              </Paragraph>
            ),
            ...elemProps(terms.accordionToAccordion, 'utrecht-accordion', 'utrecht-accordion'),
          },
          {
            label: 'Wat gebeurt er als ik verhuis?',
            body: (
              <Paragraph>
                U moet uw vergunning aanpassen of opzeggen binnen 2 weken na uw verhuizing. Dit kunt u doen via Mijn
                Utrecht.
              </Paragraph>
            ),
            ...elemProps(terms.accordionToParagraph, 'utrecht-accordion', 'utrecht-paragraph'),
          },
        ]}
      />

      {/* Heading2 → FormField */}
      <Paragraph {...elemProps(terms.paragraphToHeading2, 'utrecht-paragraph', 'utrecht-heading-2')}>
        Na het lezen van bovenstaande informatie kunt u direct een aanvraag indienen.
      </Paragraph>
      <Heading2 {...elemProps(terms.heading2ToFormField, 'utrecht-heading-2', 'utrecht-form-field')}>
        Aanvraag indienen
      </Heading2>

      {/* FormField → FormField */}
      <FormFieldTextbox
        label="Kenteken voertuig"
        description="Voer het kenteken in zonder streepjes, bijv. AB12CD"
        {...elemProps(terms.formFieldToFormField, 'utrecht-form-field', 'utrecht-form-field')}
      />
      <FormFieldTextbox
        label="Woonadres"
        description="Straatnaam, huisnummer en postcode"
        {...elemProps(terms.formFieldToFormField, 'utrecht-form-field', 'utrecht-form-field')}
      />

      {/* FormField → ButtonGroup */}
      <FormFieldTextbox
        label="E-mailadres"
        description="Wij sturen de bevestiging naar dit adres"
        {...elemProps(terms.formFieldToButtonGroup, 'utrecht-form-field', 'utrecht-button-group')}
      />

      {/* ButtonGroup → Paragraph */}
      <ButtonGroup {...elemProps(terms.buttonGroupToParagraph, 'utrecht-button-group', 'utrecht-paragraph')}>
        <Button appearance="primary-action-button">Aanvraag versturen</Button>
        <Button appearance="secondary-action-button">Opslaan als concept</Button>
      </ButtonGroup>

      {/* Paragraph → SpotlightSection */}
      <Paragraph {...elemProps(terms.paragraphToSpotlightSection, 'utrecht-paragraph', 'utrecht-spotlight-section')}>
        Wist u dat u ook andere vergunningen en ontheffingen kunt aanvragen via Mijn Utrecht?
      </Paragraph>

      {/* SpotlightSection → SpotlightSection */}
      <SpotlightSection
        type="info"
        {...elemProps(
          terms.spotlightSectionToSpotlightSection,
          'utrecht-spotlight-section',
          'utrecht-spotlight-section',
        )}
      >
        <Heading3>Bezoekersregeling</Heading3>
        <Paragraph>
          Vergunninghouders kunnen ook een bezoekersregeling aanvragen. Hiermee kunnen uw bezoekers tijdelijk parkeren
          in uw gebied. De kosten zijn € 0,10 per uur.
        </Paragraph>
      </SpotlightSection>

      {/* SpotlightSection → Paragraph */}
      <SpotlightSection
        type="warning"
        {...elemProps(terms.spotlightSectionToParagraph, 'utrecht-spotlight-section', 'utrecht-paragraph')}
      >
        <Heading3>Gehandicaptenparkeerplaats</Heading3>
        <Paragraph>
          Heeft u een gehandicaptenparkeerkaart? Dan heeft u geen parkeervergunning nodig. U mag altijd parkeren op een
          gehandicaptenparkeerplaats.
        </Paragraph>
      </SpotlightSection>

      {/* Paragraph → BadgeList */}
      <Paragraph {...elemProps(terms.paragraphToBadgeList, 'utrecht-paragraph', 'utrecht-badge-list')}>
        Beschikbare vergunningcategorieën in uw gebied:
      </Paragraph>

      {/* BadgeList → Paragraph */}
      <BadgeList {...elemProps(terms.badgeListToParagraph, 'utrecht-badge-list', 'utrecht-paragraph')}>
        <StatusBadge status="safe">Bewonersvergunning</StatusBadge>
        <StatusBadge status="safe">Bezoekersregeling</StatusBadge>
        <StatusBadge status="warning">Bedrijfsvergunning (wachtlijst)</StatusBadge>
        <StatusBadge status="error">Gehandicaptenparkeerplaats (vol)</StatusBadge>
      </BadgeList>

      {/* Paragraph → Separator */}
      <Paragraph {...elemProps(terms.paragraphToSeparator, 'utrecht-paragraph', 'utrecht-separator')}>
        Voor vragen over uw vergunning kunt u contact opnemen met de gemeente.
      </Paragraph>

      {/* Separator → Paragraph */}
      <Separator {...elemProps(terms.separatorToParagraph, 'utrecht-separator', 'utrecht-paragraph')} />

      <Paragraph>
        <ActionGroup>
          <Link href="#">Bel 14 030</Link>
          <Link href="#">Stuur een bericht</Link>
          <Link href="#">Maak een afspraak</Link>
        </ActionGroup>
      </Paragraph>
    </StoryShell>
  );
}

// ---- Meta & exports ----

const meta = {
  title: 'Prototypes/Spacing Matrix/Testen',
  id: 'prototype-spacing-matrix',
  component: RichText,
  parameters: {
    spacingDebug: true,
    docs: {
      description: {
        component: `
De **Spacing Matrix** is een interactieve testomgeving voor de \`:has(+ ...)\` CSS-selectors in het \`utrecht-rich-text\` component.
Deze selectors bepalen de \`margin-block-end\` tussen aangrenzende elementen op basis van hun "relatie" in de spacing matrix — een spreadsheet die per componentpaar vastlegt hoe vertrouwd ze met elkaar zijn.

## Gebruik

Klik op het raster-icoon in de toolbar om de debug-overlay te tonen of te verbergen.
De overlay visualiseert de daadwerkelijk berekende witruimte onder elk element als een gekleurde balk.

Gebruik de dropdowns in het controlepaneel om de relatie tussen twee aangrenzende componenten tijdelijk te wijzigen.
Selects met een **rode rand** wijken af van de waarde in de spacing matrix.
De knop **Reset** herstelt alle paren naar hun matrix-standaardwaarden.

## Relatieniveaus

De witruimte tussen twee elementen wordt bepaald door hun relatieniveau. Van grootste naar kleinste witruimte:

| Niveau | Kleur | CSS-tier |
|---|---|---|
| Onbekenden | Blauw | \`stranger\` |
| Kennissen | Cyaan | \`acquaintance\` |
| Vrienden | Groen | \`friend\` |
| Besties | Amber | \`best-friend\` |
| Kind | Rood | \`confidant\` |

De kleur van de debug-overlay komt overeen met het relatieniveau van het element dat de witruimte bepaalt.
Een **rode rand met doorgetrokken lijn** geeft aan dat de gebruiker het niveau heeft overschreven ten opzichte van de matrix-standaard.
        `,
      },
    },
  },
} satisfies Meta<typeof RichText>;

export default meta;

export const HeadingsAndCo = makeStory(
  'headings & co',
  'Test van de `:has(+ ...)` aangrenzende-broer/zus-selectors in de rich-text CSS voor elk kopniveau gevolgd door een alinea.',
  HeadingsAndCoStory,
);

export const RealistischePaginaInhoud = makeStory(
  'Realistische pagina inhoud',
  "Test met echte paginainhoud: meerdere kopniveaus, alinea's, en een losse link - alle aangrenzende-broer/zus-combinaties die in deze pagina voorkomen zijn afzonderlijk instelbaar.",
  EvenementOrganiserenStory,
);

export const AlleComponenten = makeStory(
  'Alle componenten',
  'Volledige pagina met alle rich-text componenten naast elkaar: kopniveaus, alinea, lijsten, blockquote, afbeelding, tabel, datalist, alert, accordion, formuliervelden, spotlight-secties, badgelijst en separator - elk aangrenzend paar is afzonderlijk instelbaar.',
  AlleComponentenStory,
);
