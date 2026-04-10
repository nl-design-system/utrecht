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
} from '@utrecht/component-library-react/dist/css-module';
import {
  UtrechtIconArrow,
  UtrechtIconChevronLeft,
  UtrechtIconChevronRight,
} from '@utrecht/web-component-library-react';
import React, { useState } from 'react';
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
                <Heading1>Trouwen, partnerschap en samenlevingscontract</Heading1>
                <Paragraph appearance="lead">
                  U wilt trouwen of een geregistreerd partnerschap aangaan. Gefeliciteerd! Bekijk hieronder welke
                  mogelijkheden er zijn en wat u daarvoor moeten regelen.{' '}
                </Paragraph>
                <Heading2>Trouwen</Heading2>
                <Paragraph>
                  U kunt uw relatie officieel maken door te trouwen. U geeft elkaar dan het ja-woord. Huwelijk wordt in
                  alle landen erkend.
                </Paragraph>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href={urls.trouwenRegelen}
                >
                  <UtrechtIconChevronRight />
                  Lees meer over trouwen en wat u hiervoor moet regelen
                </Link>
                <Heading2>Geregistreerd Partnerschap</Heading2>
                <Paragraph>
                  U kunt uw relatie ook officieel maken door een geregistreerd partnerschap te sluiten. Partnerschap
                  lijkt heel erg op huwelijk. Verschil is dat u hier geen ja-woord hoeft te geven en dat partnerschap
                  niet in alle landen erkend wordt.
                </Paragraph>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="https://loket.digitaal.utrecht.nl/nl/producten/geregistreerd-partnerschap"
                >
                  <UtrechtIconChevronRight />
                  Lees meer over het geregistreerd partnerschap en wat u hiervoor moet regelen
                </Link>
                <Heading2>Omzetten partnerschap in huwelijk </Heading2>
                <Paragraph>
                  Hebt u al een geregistreerd partnerschap gesloten? Dan kunt u er ook voor kiezen om uw partnerschap om
                  te zetten in een huwelijk. Hoe u dit doet bepaalt u zelf. Net als bij een huwelijk kan dat van heel
                  eenvoudig tot een uitgebreide ceremonie. Wilt u graag advies? U kunt ons bellen op 14 030.
                </Paragraph>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="https://loket.digitaal.utrecht.nl/nl/producten/geregistreerd-partnerschap#geregistreerd-partnerschap-omzetten-in-huwelijk"
                >
                  <UtrechtIconChevronRight />
                  Lees meer over het omzetten van een partnerschap in een huwelijk
                </Link>
                <Heading2>Samenlevingscontract </Heading2>
                <Paragraph>
                  Wilt u uw relatie vastleggen, maar wilt u niet trouwen of een partnerschap sluiten? Dan kunt ook een
                  samenlevingscontract laten opstellen. Dit doet u bij de notaris. Een samenlevingscontract is niet
                  hetzelfde als een geregistreerd partnerschap.
                </Paragraph>
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
