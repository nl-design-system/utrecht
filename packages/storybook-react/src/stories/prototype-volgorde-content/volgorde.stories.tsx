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
import React from 'react';
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

// Reusable BreadcrumbNav component
const CommonBreadcrumbNav = () => (
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
);

// Reusable Footer with Chatbot component
const FooterWithChatbot = () => (
  <>
    <FooterContact />
    <Chatbot />
  </>
);

const AccordionText1 = () => (
  <>
    <Paragraph>U komt in aanmerking voor een IOAW-uitkering als u:</Paragraph>
    <UnorderedList>
      <UnorderedListItem>
        <Paragraph>bent geboren voor 1 januari 1965, en</Paragraph>
      </UnorderedListItem>
      <UnorderedListItem>
        <Paragraph>
          onvoldoende inkomen heeft om van te leven. Wij kijken naar uw inkomsten, niet naar uw vermogen. Het inkomen
          van uw partner telt mee, het inkomen van eventuele minderjarige kinderen niet.
        </Paragraph>
      </UnorderedListItem>
    </UnorderedList>
    <Paragraph>Daarnaast voldoet u aan ten minste 1 van de volgende voorwaarden:</Paragraph>
    <UnorderedList>
      <UnorderedListItem>
        <Paragraph>
          U bent op of na uw 50ᵉ jaar werkloos geworden, maar u hebt nog niet de AOW-leeftijd. U kreeg langer dan 3
          maanden een WW-uitkering.
        </Paragraph>
      </UnorderedListItem>
      <UnorderedListItem>
        <Paragraph>
          U hebt eerder IOAW ontvangen van de gemeente Utrecht of een andere gemeente. Vul dan bij de vraag of u langer
          dan 3 maanden WW of WGA hebt ontvangen 'ja' in.
        </Paragraph>
      </UnorderedListItem>
      <UnorderedListItem>
        <Paragraph>
          U hebt op of na uw 50ᵉ recht gekregen op een WGA-uitkering. (Regeling werkhervatting gedeeltelijk
          arbeidsgeschikten). Deze WGA-uitkering is gestopt omdat u bij uw herkeuring voor minder dan 35%
          arbeidsongeschikt was.
        </Paragraph>
      </UnorderedListItem>
      <UnorderedListItem>
        <Paragraph>
          U bent gedeeltelijk arbeidsongeschikt (minder dan 80%). En u had op 28 december 2005, voor de komst van de
          WIA, een IOAW-uitkering.
        </Paragraph>
      </UnorderedListItem>
    </UnorderedList>
    <Paragraph>Ook hiervoor vraagt u een bijstandsuitkering aan (zie hierboven).</Paragraph>
  </>
);

const AccordionText2 = () => (
  <>
    <Paragraph>
      Krijgt u een bijstandsuitkering? Dan kunnen wij een deel of de hele bijstandsuitkering terugeisen bij iemand die
      een onderhoudsplicht voor u of uw kinderen heeft. Meer hierover leest u op{' '}
      <a
        href="https://www.utrecht.nl/bijstandonderhoudsplicht"
        className="utrecht-link utrecht-link--html-a utrecht-link--external"
        rel="external noopener noreferrer"
      >
        Bijstand en onderhoudsplicht voor ex-partner
      </a>
      .
    </Paragraph>
  </>
);

const AccordionTextPerPost = () => (
  <>
    <Paragraph>Voor het doorgeven per post stuurt u op:</Paragraph>
    <UnorderedList>
      <UnorderedListItem>
        <Paragraph>
          Het ingevulde formulier{' '}
          <a href="#" className="utrecht-link utrecht-link--html-a">
            Adreswijziging{' '}
          </a>
          (pdf, 225 kB).
        </Paragraph>
      </UnorderedListItem>
      <UnorderedListItem>
        <Paragraph>Kopie van uw geldige identiteitsbewijs (paspoort, ID-kaart of rijbewijs).</Paragraph>
      </UnorderedListItem>
      <UnorderedListItem>
        <Paragraph>Als u verhuist naar een huurwoning of koopwoning:</Paragraph>
        <UnorderedList>
          <UnorderedListItem>
            <Paragraph>kopie van uw huurcontract of eigendomsbewijs</Paragraph>
          </UnorderedListItem>
        </UnorderedList>
      </UnorderedListItem>
      <UnorderedListItem>
        <Paragraph>Als u verhuist naar een instelling:</Paragraph>
        <UnorderedList>
          <UnorderedListItem>
            <Paragraph>uw overeenkomst met de instelling of een verklaring van de instelling</Paragraph>
          </UnorderedListItem>
        </UnorderedList>
      </UnorderedListItem>
      <UnorderedListItem>
        <Paragraph>Als u bij iemand anders gaat wonen:</Paragraph>
        <UnorderedList>
          <UnorderedListItem>
            <Paragraph>
              het ingevulde en met pen ondertekende formulier{' '}
              <a href="#" className="utrecht-link utrecht-link--html-a">
                Verklaring van inwoning{' '}
              </a>
              (pdf, 697 kB).
            </Paragraph>
          </UnorderedListItem>
          <UnorderedListItem>
            <Paragraph>kopie van een geldig identiteitsbewijs van de persoon bij wie u gaat wonen.</Paragraph>
          </UnorderedListItem>
        </UnorderedList>
      </UnorderedListItem>
    </UnorderedList>
  </>
);

const AccordionTextAanDeBalie = () => (
  <>
    <Paragraph>Voor het doorgeven aan de balie neemt u mee:</Paragraph>
    <UnorderedList>
      <UnorderedListItem>
        <Paragraph>Uw geldige identiteitsbewijs (paspoort, ID-kaart of rijbewijs).</Paragraph>
      </UnorderedListItem>
      <UnorderedListItem>
        <Paragraph>Als u verhuist naar een huurwoning of koopwoning:</Paragraph>
        <UnorderedList>
          <UnorderedListItem>
            <Paragraph>kopie van uw huurcontract of eigendomsbewijs</Paragraph>
          </UnorderedListItem>
        </UnorderedList>
      </UnorderedListItem>
      <UnorderedListItem>
        <Paragraph>Als u verhuist naar een instelling:</Paragraph>
        <UnorderedList>
          <UnorderedListItem>
            <Paragraph>uw overeenkomst met de instelling of een verklaring van de instelling</Paragraph>
          </UnorderedListItem>
        </UnorderedList>
      </UnorderedListItem>
      <UnorderedListItem>
        <Paragraph>Als u bij iemand anders gaat wonen:</Paragraph>
        <UnorderedList>
          <UnorderedListItem>
            <Paragraph>
              Het ingevulde en met pen ondertekende formulier{' '}
              <a href="#" className="utrecht-link utrecht-link--html-a">
                Verklaring van inwoning{' '}
              </a>
              (pdf, 697 kB).
            </Paragraph>
          </UnorderedListItem>
          <UnorderedListItem>
            <Paragraph>kopie van een geldig identiteitsbewijs van de persoon bij wie u gaat wonen.</Paragraph>
          </UnorderedListItem>
        </UnorderedList>
      </UnorderedListItem>
    </UnorderedList>
  </>
);

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
            <CommonBreadcrumbNav />
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
                      body: <AccordionText1 />,
                      expanded: undefined,
                      label: 'Geboren voor 1965: mogelijk recht op een IOAW-uitkering',
                    },
                    {
                      body: <AccordionText2 />,

                      expanded: undefined,
                      label: 'Bijstand en onderhoudsplicht voor ex-partner',
                    },
                  ]}
                />
                <KlantTevredenheidsOnderzoek />
              </section>
            </main>
          </PageContent>
          <FooterWithChatbot />
        </Page>
      </Surface>
    );
  },
};
export const Verhuizen: Story = {
  render: (args: any) => {
    return (
      <Surface className="utrecht-custom-theme">
        <Page {...args}>
          <PageHeaderWithSearch />
          <HoofdNavigatie />
          <PageContent>
            <CommonBreadcrumbNav />
            <main>
              <section>
                <Heading1>Verhuizen</Heading1>
                <Paragraph appearance="lead">
                  Verhuist u naar Utrecht of binnen Utrecht? Geef uw nieuwe adres aan ons door.
                </Paragraph>

                <Heading2>Voorwaarden</Heading2>
                <Paragraph>Deze personen mogen een verhuizing doorgeven:</Paragraph>
                <UnorderedList>
                  <UnorderedListItem>Iedereen van 16 jaar of ouder.</UnorderedListItem>
                  <UnorderedListItem>Ouders, voogden of verzorgers voor kinderen jonger dan 18 jaar.</UnorderedListItem>
                  <UnorderedListItem>
                    Woont u op hetzelfde adres en verhuist u naar hetzelfde nieuwe adres? Dan kunt u de verhuizing
                    doorgeven voor:
                    <UnorderedList>
                      <UnorderedListItem>uw ouders en uw meerderjarige kind of kinderen.</UnorderedListItem>
                      <UnorderedListItem>uw echtgenoot of geregistreerd partner.</UnorderedListItem>
                    </UnorderedList>
                  </UnorderedListItem>
                </UnorderedList>

                <Heading3>Wanneer geeft u uw verhuizing door?</Heading3>
                <Paragraph>
                  Uw verhuizing doorgeven kan vanaf 4 weken voordat u verhuist tot maximaal 5 dagen erna. Geeft u later
                  dan 5 dagen na uw verhuizing uw nieuwe adres door? Dan telt de dag waarop u het doorgeeft als uw
                  verhuisdatum. Dit kan invloed hebben op bijvoorbeeld uw toeslagen of studiefinanciering.
                </Paragraph>

                <Heading2>Wat stuurt u mee?</Heading2>
                <Heading3>Online</Heading3>
                <UnorderedList>
                  <UnorderedListItem>
                    Als u verhuist naar een huurwoning of koopwoning:
                    <UnorderedList>
                      <UnorderedListItem>kopie van uw huurcontract of eigendomsbewijs</UnorderedListItem>
                    </UnorderedList>
                  </UnorderedListItem>
                  <UnorderedListItem>
                    Als u verhuist naar een instelling:
                    <UnorderedList>
                      <UnorderedListItem>
                        uw overeenkomst met de instelling of een verklaring van de instelling
                      </UnorderedListItem>
                    </UnorderedList>
                  </UnorderedListItem>
                  <UnorderedListItem>
                    Als u bij iemand anders gaat wonen:
                    <UnorderedList>
                      <UnorderedListItem>
                        de verklaring van inwoning. Een meerderjarige bewoner van het adres waar u gaat inwonen vult dit
                        formulier in. Dit kan op 2 manieren:
                        <UnorderedList>
                          <UnorderedListItem>
                            De bewoner vult het{' '}
                            <Link href="https://loket.digitaal.utrecht.nl/nl/formulier/verklaring-inwoning/startpagina">
                              online formulier Verklaring van inwoning
                            </Link>{' '}
                            in. En downloadt de verklaring als pdf. U kunt deze pdf toevoegen als u online uw verhuizing
                            doorgeeft.
                          </UnorderedListItem>
                          <UnorderedListItem>
                            De bewoner vult het formulier{' '}
                            <Link href="https://www.utrecht.nl/fileadmin/uploads/documenten/9.digitaalloket/Burgerzaken/2024-05-formulier-verklaring-bewoning-adres.pdf">
                              Verklaring van inwoning
                            </Link>{' '}
                            (pdf, 697 kB) in en ondertekent het met pen. U scant de ondertekende verklaring en slaat die
                            op als pdf. U kunt deze pdf toevoegen als u online uw verhuizing doorgeeft. Mét een kopie
                            van een geldig identiteitsbewijs van de bewoner.
                          </UnorderedListItem>
                        </UnorderedList>
                      </UnorderedListItem>
                    </UnorderedList>
                  </UnorderedListItem>
                </UnorderedList>

                <Heading3>Per post of aan de balie</Heading3>
                <br />
                <AccordionProvider
                  sections={[
                    {
                      body: <AccordionTextPerPost />,
                      expanded: undefined,
                      label: 'Per Post',
                    },
                    {
                      body: <AccordionTextAanDeBalie />,

                      expanded: undefined,
                      label: 'Aan de balie',
                    },
                  ]}
                />
                <Heading2>Aanvragen</Heading2>
                <Paragraph>
                  We kunnen uw verhuizing alleen verwerken als uw aanvraag compleet is. Soms mist er nog iets. Dan nemen
                  we contact met u op. Daarom is het handig als u bij uw aanvraag uw telefoonnummer doorgeeft.
                </Paragraph>

                <Heading3>Online</Heading3>
                <br />
                <ButtonLink
                  appearance="primary-action-button"
                  href="https://edienstenburgerzaken.utrecht.nl/Verhuizen/Login/"
                >
                  Geef verhuizing door
                  <UtrechtIconArrow />
                </ButtonLink>

                <Heading3>Per post</Heading3>
                <Paragraph>Hebt u alles ingevuld en ondertekend? Stuur het op naar:</Paragraph>
                <Paragraph>
                  Gemeente Utrecht
                  <br />
                  Burgerzaken
                  <br />
                  Postbus 5000
                  <br />
                  3502 JA Utrecht
                </Paragraph>

                <Heading3>Aan de balie</Heading3>
                <Paragraph>
                  U kunt uw verhuizing ook doorgeven aan de balie. Maak hiervoor online een afspraak of bel naar 14 030.
                </Paragraph>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="https://afspraak.utrecht.nl/qmaticwebbooking/#/preselect/services/033b64eacbe1e455fc4bf6995ddf99bacf57b13823b6ccfc486ecdfb54c9d4fc"
                >
                  <UtrechtIconChevronRight />
                  Afspraak maken voor verhuizing binnen de gemeente
                </Link>

                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="https://afspraak.utrecht.nl/qmaticwebbooking/#/preselect/services/94245f2b4d22a9cd484a378ad3382735bb7d9e476bf003386c0cce5d48171a50"
                >
                  <UtrechtIconChevronRight />
                  Afspraak maken voor verhuizing naar de gemeente vanuit andere gemeente
                </Link>

                <Heading2>Kosten</Heading2>
                <Paragraph>Uw verhuizing doorgeven is gratis.</Paragraph>

                <Heading2>Na uw aanvraag</Heading2>
                <Paragraph>
                  Wij passen uw gegevens aan. Dat duurt ongeveer een week vanaf de verhuisdatum die u doorgeeft. Geeft u
                  uw verhuizing van tevoren door? Dan verwerken wij de verhuizing vanaf de verhuisdatum die u doorgeeft.
                  Op <Link href="https://mijn.overheid.nl/">MijnOverheid</Link> kunt u zien of uw verhuizing al verwerkt
                  is.
                </Paragraph>
                <Paragraph>
                  Wij geven uw verhuizing door aan een aantal organisaties. Op{' '}
                  <Link href="https://www.overheid.nl/">Overheid.nl</Link> ziet u welke organisaties dit zijn.
                </Paragraph>

                <Heading2>Meer informatie</Heading2>
                <UnorderedList>
                  <UnorderedListItem>
                    Verhuist u naar een gebied waar betaald parkeren is? U kunt een{' '}
                    <Link href="https://www.utrecht.nl/parkeervergunningbewoner">parkeervergunning aanvragen</Link>{' '}
                    nadat uw verhuizing verwerkt is.
                  </UnorderedListItem>
                  <UnorderedListItem>
                    Verhuist u binnen Utrecht en hebt u een parkeervergunning of staat u op de wachtlijst? Lees meer
                    over{' '}
                    <Link href="https://www.utrecht.nl/parkeervergunningverhuizing">
                      parkeervergunning en verhuizen
                    </Link>
                    .
                  </UnorderedListItem>
                  <UnorderedListItem>
                    Hebt u geen woonadres? Dan kunt u misschien een{' '}
                    <Link href="https://www.utrecht.nl/briefadres">briefadres aanvragen</Link>.
                  </UnorderedListItem>
                  <UnorderedListItem>
                    Staat iemand onterecht op uw adres ingeschreven? Dan kunnen we een{' '}
                    <Link href="https://www.utrecht.nl/adresonderzoek">adresonderzoek</Link> starten.
                  </UnorderedListItem>
                  <UnorderedListItem>
                    Informatie over{' '}
                    <Link href="https://www.utrecht.nl/emigreren">verhuizen naar het buitenland (emigreren)</Link>.
                  </UnorderedListItem>
                  <UnorderedListItem>
                    Informatie over{' '}
                    <Link href="https://www.utrecht.nl/eersteinschrijving">
                      inschrijven als u vanuit het buitenland naar Utrecht verhuist
                    </Link>
                    .
                  </UnorderedListItem>
                </UnorderedList>
                <br />
                <KlantTevredenheidsOnderzoek />
              </section>
            </main>
          </PageContent>
          <FooterWithChatbot />
        </Page>
      </Surface>
    );
  },
};
