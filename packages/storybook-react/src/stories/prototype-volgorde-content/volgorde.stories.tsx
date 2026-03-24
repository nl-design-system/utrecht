import { Meta, StoryObj } from '@storybook/react';
import {
  AccordionProvider,
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  ButtonLink,
  Heading1,
  Heading2,
  Heading3,
  Link,
  Logo,
  LogoImage,
  Page,
  PageContent,
  PageHeader,
  Paragraph,
  Surface,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import { UtrechtIconArrow, UtrechtIconChevronRight } from '@utrecht/web-component-library-react';
import React, { useState } from 'react';
import '../prototype-src/index.css';
import FooterKlachten from '../prototype-src/FooterKlachtenFormulier.js';
import Chatbot from '../prototype-src/contactformulier/Chatbot.js';
import FooterContact from '../prototype-src/contactformulier/FooterContactFormulier.js';
import IntroductieContact from '../prototype-src/contactformulier/IntroductieContactFormulier.js';
import urls from '../prototype-src/variables.js';
import HoofdNavigatie from '../prototype-src/webpaginablokken/HoofdNavigatie.js';
import KlantTevredenheidsOnderzoek from '../prototype-src/webpaginablokken/KTO.js';
import '../styles.css';
import PageHeaderWithSearch from '../prototype-src/webpaginablokken/PageHeaderWithSearch.js';

const meta = {
  title: 'Prototypes/Volgorde/Navigeren',
  id: 'volgorde-bijstand',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Introductie: Story = {
  render: (args: any) => (
    <Surface className="utrecht-custom-theme">
      <Page {...args}>
        <PageHeader>
          <Logo>
            <LogoImage />
          </Logo>
        </PageHeader>
        <PageContent>
          <main>
            <section>
              <IntroductieContact />
              <br />
              <ButtonLink appearance="primary-action-button" href={urls.volgordeScenario}>
                Starten
                <UtrechtIconArrow />
              </ButtonLink>
            </section>
          </main>
        </PageContent>
        <FooterContact />
      </Page>
    </Surface>
  ),
};

export const Scenario: Story = {
  render: (args: any) => (
    <Surface className="utrecht-custom-theme">
      <Page {...args}>
        <PageHeader>
          <Logo>
            <LogoImage />
          </Logo>
        </PageHeader>
        <PageContent>
          <main>
            <section>
              <Heading1>Bijstand aanvragen</Heading1>
              <br />
              <ButtonLink appearance="primary-action-button" href={urls.volgorde1}>
                Start
                <UtrechtIconArrow />
              </ButtonLink>
            </section>
          </main>
        </PageContent>
        <FooterKlachten />
      </Page>
    </Surface>
  ),
};

export const Volgorde1: Story = {
  render: (args: any) => {
    return (
      <Surface className="utrecht-custom-theme">
        <Page {...args}>
          <PageHeaderWithSearch />
          <HoofdNavigatie />
          <PageContent>
            <BreadcrumbNav>
              <BreadcrumbNavLink href="https://www.utrecht.nl/">
                <BreadcrumbNavSeparator></BreadcrumbNavSeparator>
                Home
              </BreadcrumbNavLink>
              <BreadcrumbNavLink href="https://loket.digitaal.utrecht.nl/nl">
                <BreadcrumbNavSeparator>
                  <UtrechtIconChevronRight />
                </BreadcrumbNavSeparator>
                Online Loket
              </BreadcrumbNavLink>
              <BreadcrumbNavLink href="https://loket.digitaal.utrecht.nl/nl/producten">
                <BreadcrumbNavSeparator>
                  <UtrechtIconChevronRight />
                </BreadcrumbNavSeparator>
                Producten
              </BreadcrumbNavLink>
            </BreadcrumbNav>
            <main>
              <section>
                <Heading1>Bijstand aanvragen</Heading1>
                <Paragraph appearance="lead">
                  Hebt u niet genoeg inkomen of vermogen om van te leven? Als u voldoet aan de voorwaarden kunt u een
                  bijstandsuitkering aanvragen. Dan hebt u een{' '}
                  <Link href="https://www.utrecht.nl/hoogteuitkering">inkomen</Link> totdat u (weer) aan het werk gaat.
                  Een bijstandsuitkering wordt ook wel bijstand genoemd.
                </Paragraph>{' '}
                <Heading2>Belangrijk om te weten</Heading2>
                <UnorderedList>
                  <UnorderedListItem>
                    U hebt als u bijstand aanvraagt of krijgt{' '}
                    <Link href="https://www.utrecht.nl/regelsbijstand">rechten en plichten</Link>.
                  </UnorderedListItem>
                  <UnorderedListItem>
                    U mag niet te veel <Link href="https://www.utrecht.nl/vermogenbijstand">vermogen</Link> hebben voor
                    bijstand.
                  </UnorderedListItem>
                  <UnorderedListItem>
                    Hebt u een WW-uitkering? U kunt 4 weken voordat die uitkering stopt bijstand aanvragen.
                  </UnorderedListItem>
                  <UnorderedListItem>
                    Had u minder dan 6 maanden geleden bijstand van ons? En hebt u daarna gewerkt? Kijk of u{' '}
                    <Link href="https://www.utrecht.nl/korte-aanvraag">bijstand na kort werken</Link> kunt aanvragen.
                    Dan krijgt u snel een uitkering.
                  </UnorderedListItem>
                  <UnorderedListItem>
                    Bent u net naar Utrecht verhuisd? En nog niet ingeschreven in Utrecht? Geef uw{' '}
                    <Link href="https://www.utrecht.nl/verhuizing">verhuizing</Link> dan snel aan ons door. Wij passen
                    uw gegevens dan aan. Dat duurt ongeveer 1 week. U kunt al wel vast een aanvraag doen. Bijstand kan
                    pas ingaan vanaf de datum waarop u bij ons bent ingeschreven.
                  </UnorderedListItem>
                  <UnorderedListItem>
                    Bent u jonger dan 27 jaar? In de wet staat dat u na uw aanvraag eerst 4 weken naar werk of een
                    opleiding moet zoeken. En dat wij uw aanvraag daarna pas behandelen. Maar bij ons hoeft u niet eerst
                    te zoeken. Wij behandelen uw aanvraag meteen.
                  </UnorderedListItem>
                  <UnorderedListItem>
                    Is uw aanvraag compleet? Dan nemen we binnen 8 weken een besluit.
                  </UnorderedListItem>
                  <UnorderedListItem>
                    Hebt u recht op bijstand? Dan krijgt u dit vanaf de dag dat u dit bij ons aanvraagt. Doe uw aanvraag
                    dus op tijd. Zijn er bijzondere omstandigheden waardoor u niet eerder bijstand kon aanvragen,
                    bijvoorbeeld een ziekenhuisopname? Geef dit dan aan in uw aanvraag. Mogelijk kunt u bijstand krijgen
                    met een eerdere ingangsdatum (tot maximaal 3 maanden voor uw aanvraag).
                  </UnorderedListItem>
                </UnorderedList>
                <Heading2>Voorwaarden bijstand</Heading2>
                <Heading3>Voor u en uw partner</Heading3>
                <Paragraph>Deze voorwaarden gelden voor u en uw partner als uw die hebt:</Paragraph>
                <UnorderedList>
                  <UnorderedListItem>u hebt te weinig geld om rond te komen</UnorderedListItem>
                  <UnorderedListItem>u bent 18 jaar of ouder</UnorderedListItem>
                  <UnorderedListItem>u mag volgens de wet in Nederland wonen</UnorderedListItem>
                  <UnorderedListItem>u hebt geen recht op een andere uitkering</UnorderedListItem>
                  <UnorderedListItem>u zit niet in de gevangenis of een huis van bewaring</UnorderedListItem>
                  <UnorderedListItem>
                    u kunt de <Link href="https://www.utrecht.nl/taaleis">Nederlandse taal voldoende</Link> begrijpen,
                    spreken, lezen en schrijven.
                  </UnorderedListItem>
                  <UnorderedListItem>
                    u doet er alles aan om genoeg te verdienen om weer rond te kunnen komen
                  </UnorderedListItem>
                  <UnorderedListItem>u doet mee aan activiteiten die wij aanbieden om werk te vinden</UnorderedListItem>
                </UnorderedList>
                <Heading3>U bent nieuwkomer</Heading3>
                <Paragraph>Als nieuwkomer gelden de volgende voorwaarden:</Paragraph>
                <UnorderedList>
                  <UnorderedListItem>u hebt een geldige verblijfsvergunning</UnorderedListItem>
                  <UnorderedListItem>
                    u hebt een verblijfstatus gekregen van het Centraal Orgaan opvang Asielzoekers (COA)
                  </UnorderedListItem>
                  <UnorderedListItem>u woont zelfstandig of gaat dat binnenkort doen</UnorderedListItem>
                  <UnorderedListItem>u doet mee aan het verplichte inburgeren</UnorderedListItem>
                  <UnorderedListItem>
                    u voldoet aan de algemene voorwaarden voor een bijstandsuitkering
                  </UnorderedListItem>
                </UnorderedList>
                <Heading2>Wat hebt u nodig bij uw aanvraag?</Heading2>
                <Paragraph>Wat hebt u nodig bij uw aanvraag?</Paragraph>
                <UnorderedList>
                  <UnorderedListItem>
                    burgerservicenummer (BSN) van uzelf en eventueel van uw partner en/of kinderen
                  </UnorderedListItem>
                  <UnorderedListItem>
                    laatste bankafschriften van uzelf en eventueel van uw partner en/of kinderen
                  </UnorderedListItem>
                  <UnorderedListItem>hypotheekgegevens als u een koophuis hebt</UnorderedListItem>
                  <UnorderedListItem>uw e-mailadres</UnorderedListItem>
                  <UnorderedListItem>
                    Uw DigiD. Hebt u geen DigiD? Bekijk dan de{' '}
                    <Link href="https://digid.uabc.nl/nl/">eenvoudige uitleg over het aanvragen van een DigiD</Link>.
                    Hebt u een partner? Dan heeft uw partner ook een DigiD nodig.
                  </UnorderedListItem>
                </UnorderedList>
                <Heading2>Bijstandsuitkering aanvragen</Heading2>
                <Paragraph>
                  Wij stellen u in het aanvraagformulier eerst een aantal vragen. Het kan namelijk zijn dat u recht hebt
                  op een andere uitkering. Of dat u op een andere manier een uitkering moet aanvragen.
                </Paragraph>
                <Paragraph>
                  U bent ongeveer een 0,5 tot 1 uur bezig met het invullen van het formulier. U kunt het formulier
                  opslaan om later verder te gaan. Lees goed de uitleg in het aanvraagformulier. Deze informatie helpt u
                  bij het gebruik van het formulier.
                </Paragraph>
                <br />
                <ButtonLink
                  appearance="primary-action-button"
                  href="https://loket.digitaal.utrecht.nl/nl/formulier/bijstandsuitkering-aanvragen-voordat-u-begint"
                >
                  Vraag bijstand aan
                  <UtrechtIconArrow />
                </ButtonLink>
                <Heading2>Hulp bij uw aanvraag</Heading2>
                <Paragraph>
                  Lukt het u niet om de aanvraag op de computer te doen? Bel dan naar Werk en Inkomen van de gemeente
                  via 14 030. Of maak direct een{' '}
                  <Link href="https://afspraak.utrecht.nl/qmaticwebbooking/index.html#/preselect/services/8a475c37dd93c74843b54652d5a2158fb3644815c996412d9f5ddc8a6e4">
                    afspraak voor hulp bij uw aanvraag
                  </Link>
                </Paragraph>
                <Heading2>Na uw aanvraag</Heading2>
                <Paragraph>
                  U ontvangt automatisch een bevestiging van uw aanvraag op uw e-mailadres. Op de pagina{' '}
                  <Link href="https://www.utrecht.nl/na-aanvraag-bijstand">Na uw aanvraag bijstandsuitkering</Link>{' '}
                  leest u hoe het verder gaat.
                </Paragraph>{' '}
                <Heading2>Voorschot</Heading2>
                <Paragraph>
                  Hebt u bijstand aangevraagd? Dan kunt u{' '}
                  <Link href="https://www.utrecht.nl/voorschotbijstand">een voorschot aanvragen</Link> als u niet genoeg
                  geld hebt om van te leven. Bijvoorbeeld omdat u geen boodschappen meer kunt doen. U krijgt dan alvast
                  een geldbedrag.
                </Paragraph>
                <Heading2>Persoonsgegevens aanpassen</Heading2>
                <Paragraph>
                  U kunt uw persoonsgegevens laten aanpassen in de Basisregistratie personen. Op{' '}
                  <Link href="https://www.utrecht.nl/persoonsgegevenswijzigen">
                    persoonsgegevens opvragen of aanpassen (BRP)
                  </Link>{' '}
                  leest u hoe u dit doet.
                </Paragraph>{' '}
                <Heading2>Meer informatie</Heading2>
                <UnorderedList>
                  <UnorderedListItem>
                    <Link href="https://www.utrecht.nl/hoogteuitkering">Hoogte bijstandsuitkering</Link>
                  </UnorderedListItem>
                  <UnorderedListItem>
                    <Link href="https://www.utrecht.nl/werk-en-inkomen/uitkeringen/betaaldatums-uitkering/">
                      Betaaldatums uitkering
                    </Link>
                  </UnorderedListItem>
                </UnorderedList>
                <br />
                <AccordionProvider
                  sections={[
                    {
                      body: 'Amorem ipsum dolor sit amet, consectetur heartbeat elit. Sed do eiusmod tempor kiss incididunt ut labore et dolore magna passion. Ut enim ad minim veniam, quis nostrud embrace ullam corporis suscipit amoroso, nisi ut aliquip ex ea commodo tender caress. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',

                      expanded: undefined,
                      label: 'Geboren voor 1965: mogelijk recht op een IOAW-uitkering',
                    },
                    {
                      body: 'Amorem ipsum dolor sit amet, consectetur heartbeat elit. Sed do eiusmod tempor kiss incididunt ut labore et dolore magna passion. Ut enim ad minim veniam, quis nostrud embrace ullam corporis suscipit amoroso, nisi ut aliquip ex ea commodo tender caress. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',

                      expanded: undefined,
                      label: 'Bijstand en onderhoudsplicht voor ex-partner',
                    },
                  ]}
                />
                <KlantTevredenheidsOnderzoek />
              </section>
            </main>
          </PageContent>
          <FooterContact />
          <Chatbot />
        </Page>
      </Surface>
    );
  },
};

export const Volgorde2: Story = {
  render: (args: any) => {
    return (
      <Surface className="utrecht-custom-theme">
        <Page {...args}>
          <PageHeaderWithSearch />
          <HoofdNavigatie />
          <PageContent>
            <BreadcrumbNav>
              <BreadcrumbNavLink href="https://www.utrecht.nl/">
                <BreadcrumbNavSeparator></BreadcrumbNavSeparator>
                Home
              </BreadcrumbNavLink>
              <BreadcrumbNavLink href="https://loket.digitaal.utrecht.nl/nl">
                <BreadcrumbNavSeparator>
                  <UtrechtIconChevronRight />
                </BreadcrumbNavSeparator>
                Online Loket
              </BreadcrumbNavLink>
              <BreadcrumbNavLink href="https://loket.digitaal.utrecht.nl/nl/producten">
                <BreadcrumbNavSeparator>
                  <UtrechtIconChevronRight />
                </BreadcrumbNavSeparator>
                Producten
              </BreadcrumbNavLink>
            </BreadcrumbNav>
            <main>
              <section>
                <Heading1>PLACEHOLDER Bijstand aanvragen</Heading1>
                <Paragraph appearance="lead">
                  Hebt u niet genoeg inkomen of vermogen om van te leven? Als u voldoet aan de voorwaarden kunt u een
                  bijstandsuitkering aanvragen. Dan hebt u een{' '}
                  <Link href="https://www.utrecht.nl/hoogteuitkering">inkomen</Link> totdat u (weer) aan het werk gaat.
                  Een bijstandsuitkering wordt ook wel bijstand genoemd.
                </Paragraph>{' '}
                <Heading2>Placeholder</Heading2>
                <UnorderedList>
                  <UnorderedListItem>PLACEHOLDER</UnorderedListItem>
                </UnorderedList>
                <KlantTevredenheidsOnderzoek />
              </section>
            </main>
          </PageContent>
          <FooterContact />
          <Chatbot />
        </Page>
      </Surface>
    );
  },
};
