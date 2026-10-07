import { Meta, StoryObj } from '@storybook/react';
import {
  UtrechtIconArrow,
  UtrechtIconChevronLeft,
  UtrechtIconChevronRight,
} from '@utrecht/web-component-library-react';
import React, { useState } from 'react';
import {
  AccordionProvider,
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  ButtonLink,
  Heading1,
  Heading2,
  Heading3,
  Image,
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
} from '../../../../component-library-react/src/index.js';
import '../prototype-src/index.css';
import Chatbot from '../prototype-src/contactformulier/Chatbot.js';
import FooterContact from '../prototype-src/contactformulier/FooterContactFormulier.js';
import urls from '../prototype-src/variables.js';
import HoofdNavigatie from '../prototype-src/webpaginablokken/HoofdNavigatie.js';
import HulpEnContact from '../prototype-src/webpaginablokken/HulpEnContact.js';
import HulpEnContact2 from '../prototype-src/webpaginablokken/HulpEnContact2.js';
import KTO from '../prototype-src/webpaginablokken/KTO.js';
import '../styles.css';
import PageHeaderWithSearch from '../prototype-src/webpaginablokken/PageHeaderWithSearch.js';

const meta = {
  title: 'Prototypes/Trouwen/Pagina indeling/Navigeren',
  id: 'trouwen-navigeren',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const One: Story = {
  render: (args: any) => {
    // State om te bepalen welke HulpEnContact component getoond wordt
    const [showHulpEnContact2, setShowHulpEnContact2] = useState(false);

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
              <BreadcrumbNavLink href="https://www.utrecht.nl/wonen-en-leven">
                <BreadcrumbNavSeparator>
                  <UtrechtIconChevronRight />
                </BreadcrumbNavSeparator>
                Wonen en leven
              </BreadcrumbNavLink>
            </BreadcrumbNav>
            <main>
              <section>
                <Heading1>Trouwen en geregistreerd partnerschap</Heading1>
                <Paragraph appearance="lead">
                  Gefeliciteerd, u gaat trouwen of u gaat een geregistreerd partnerschap aan! Het is belangrijk dat u
                  goed voorbereid bent. Lees hier wat er mogelijk is en wat u allemaal moet regelen.
                </Paragraph>
                <Heading2>Trouwen</Heading2>
                <UnorderedList>
                  <UnorderedListItem>U geeft elkaar het 'jawoord’</UnorderedListItem>
                  <UnorderedListItem>Een huwelijk is overal in de wereld officieel</UnorderedListItem>
                  <UnorderedListItem>
                    Sommige landen erkennen een huwelijk tussen gelijke geslachten niet
                  </UnorderedListItem>
                  <UnorderedListItem>Scheiden: u gaat altijd naar de rechter </UnorderedListItem>
                </UnorderedList>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href={urls.trouwenRegelen}
                >
                  <UtrechtIconChevronRight />
                  Lees meer over trouwen en wat u hiervoor moet regelen
                </Link>
                <Heading2>Geregistreerd Partnerschap</Heading2>
                <UnorderedList>
                  <UnorderedListItem>U sluit het partnerschap met het zetten van de handtekening</UnorderedListItem>
                  <UnorderedListItem>
                    Het huwelijk en geregistreerd partnerschap zijn in Nederland juridisch gelijkwaardig
                  </UnorderedListItem>
                  <UnorderedListItem>Sommige landen erkennen een geregistreerd partnerschap niet</UnorderedListItem>
                  <UnorderedListItem>
                    Scheiden: u gaat alleen naar de rechter als u samen kinderen hebt onder 18 jaar
                  </UnorderedListItem>
                </UnorderedList>{' '}
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="https://loket.digitaal.utrecht.nl/nl/producten/geregistreerd-partnerschap"
                >
                  <UtrechtIconChevronRight />
                  Lees meer over het geregistreerd partnerschap en wat u hiervoor moet regelen
                </Link>
                <Heading2>Omzetten geregistreerd partnerschap in een huwelijk</Heading2>
                <UnorderedList>
                  <UnorderedListItem>
                    U zet het geregistreerde partnerschap om door het zetten van de handtekening
                  </UnorderedListItem>
                  <UnorderedListItem>Er zijn geen getuigen</UnorderedListItem>
                  <UnorderedListItem>Sommige landen erkennen een omzetting niet</UnorderedListItem>
                </UnorderedList>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="https://loket.digitaal.utrecht.nl/nl/producten/geregistreerd-partnerschap#geregistreerd-partnerschap-omzetten-in-huwelijk"
                >
                  <UtrechtIconChevronRight />
                  Lees meer over het omzetten van een partnerschap in een huwelijk
                </Link>
                <Heading2>Samenlevingscontract</Heading2>
                <UnorderedList>
                  <UnorderedListItem>U laat een samenlevingscontract opstellen bij de notaris</UnorderedListItem>
                  <UnorderedListItem>
                    Een samenlevingscontract is niet hetzelfde als een huwelijk of een geregistreerd partnerschap
                  </UnorderedListItem>
                </UnorderedList>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="https://www.rijksoverheid.nl/onderwerpen/trouwen-samenlevingscontract-en-geregistreerd-partnerschap/vraag-en-antwoord/checklist-samenlevingscontract"
                >
                  <UtrechtIconChevronRight />
                  Lees meer over het samenlevingscontract
                </Link>
                {/* Conditioneel renderen van HulpEnContact of HulpEnContact2 */}
                {!showHulpEnContact2 ? (
                  <HulpEnContact onSubmit={() => setShowHulpEnContact2(true)} />
                ) : (
                  <HulpEnContact2 />
                )}
                <KTO />
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
