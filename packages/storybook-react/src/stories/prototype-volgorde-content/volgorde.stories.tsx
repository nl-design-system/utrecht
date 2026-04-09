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
import IntroductieVolgorde from '../prototype-src/introductie_scenarios/IntroductieVolgorde.js';
import ScenarioVolgorde from '../prototype-src/introductie_scenarios/ScenarioVolgorde.js';
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

const AccordionTextPerPost = () => (
  <>
    <Paragraph>Voor het doorgeven per post stuurt u op:</Paragraph>
    <UnorderedList>
      <UnorderedListItem>
        <Paragraph>
          Het ingevulde formulier{' '}
          <a
            href="https://www.utrecht.nl/fileadmin/uploads/documenten/9.digitaalloket/Burgerzaken/Formulier-Aangifte-adreswijziging.pdf"
            className="utrecht-link utrecht-link--html-a"
          >
            Adreswijziging
          </a>{' '}
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
              <a
                href="https://www.utrecht.nl/fileadmin/uploads/documenten/9.digitaalloket/Burgerzaken/2024-05-formulier-verklaring-bewoning-adres.pdf"
                className="utrecht-link utrecht-link--html-a"
              >
                Verklaring van inwoning
              </a>{' '}
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
              het ingevulde en met pen ondertekende formulier{' '}
              <a
                href="https://www.utrecht.nl/fileadmin/uploads/documenten/9.digitaalloket/Burgerzaken/2024-05-formulier-verklaring-bewoning-adres.pdf"
                className="utrecht-link utrecht-link--html-a"
              >
                Verklaring van inwoning
              </a>{' '}
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
  id: 'volgorde',
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
              <IntroductieVolgorde />
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
              <ScenarioVolgorde />
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
                      label: 'Per post',
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
