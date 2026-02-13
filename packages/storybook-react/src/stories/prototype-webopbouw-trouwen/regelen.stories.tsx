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
  OrderedList,
  OrderedListItem,
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
  title: 'Prototypes/Trouwen/Pagina indeling/Regelen',
  id: 'trouwen-regelen',
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
              <BreadcrumbNavLink href={urls.contactformScenario}>
                <BreadcrumbNavSeparator>
                  <UtrechtIconChevronLeft />
                </BreadcrumbNavSeparator>
                Terug
              </BreadcrumbNavLink>
            </BreadcrumbNav>
            <main>
              <section>
                <Heading1>Trouwen</Heading1>
                <Paragraph appearance="lead">
                  U wilt trouwen. Gefeliciteerd! Bekijk wat u moet regelen en welke opties er zijn bij de gemeente.
                </Paragraph>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="#"
                >
                  <UtrechtIconChevronRight />
                  Trouwen: wat moet ik regelen?
                </Link>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="#"
                >
                  <UtrechtIconChevronRight />
                  Soorten trouwen
                </Link>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="#"
                >
                  <UtrechtIconChevronRight />
                  Nuttig om te weten
                </Link>

                <Heading2>Trouwen: wat moet ik regelen?</Heading2>
                <Paragraph>U gaat trouwen. Hoe regelt u uw huwelijk bij de gemeente?</Paragraph>
                <OrderedList>
                  <OrderedListItem>Eenvoudig of ceremonieel trouwen?</OrderedListItem>
                  <OrderedListItem>Regel getuigen</OrderedListItem>
                  <OrderedListItem>Meld uw voorgenomen huwelijk (minimaal 2 weken van te voren)</OrderedListItem>
                  <OrderedListItem>Plan uw trouwdatum en -locatie</OrderedListItem>
                  <OrderedListItem>Kies een trouwambtenaar</OrderedListItem>
                  <OrderedListItem>Kies de achternaam van uw kinderen</OrderedListItem>
                  <OrderedListItem>Optioneel: kies uw eigen achternaam</OrderedListItem>
                </OrderedList>
                <Paragraph>Hieronder beschrijven we stap voor stap wat u moet doen:</Paragraph>
                <Heading3>Stap 1: Eenvoudig of ceremonieel trouwen?</Heading3>
                <Paragraph>
                  Wilt u een eenvoudig huwelijk op het stadskantoor, of liever een uitgebreid ceremonieel huwelijk? Op
                  de soorten trouwen pagina kunt u de verschillende soorten trouwen vergelijken.
                </Paragraph>
                <Heading3>Stap 2: Regel getuigen</Heading3>
                <Paragraph>Om te kunnen trouwen hebt u getuigen nodig. </Paragraph>
                <UnorderedList>
                  <UnorderedListItem>Vraag minimaal 2 en maximaal 4 getuigen </UnorderedListItem>
                  <UnorderedListItem>
                    Getuigen moeten op de dag van het huwelijk 18 jaar of ouder zijn{' '}
                  </UnorderedListItem>
                  <UnorderedListItem>Getuigen moeten een geldig identiteitsbewijs hebben </UnorderedListItem>
                </UnorderedList>
                <Paragraph>
                  Wij bieden geen ambtenaren als getuigen aan. In de volgende stap geeft u aan wie uw getuigen zijn.
                </Paragraph>
                <Heading3>Stap 3: Meld uw voorgenomen huwelijk</Heading3>
                <Paragraph>
                  U moet uw voorgenomen huwelijk melden bij de gemeente. Dat doet u met een online formulier op de
                  website van de gemeente.
                </Paragraph>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="#"
                >
                  <UtrechtIconChevronRight />
                  Meld uw voorgenomen huwelijk
                </Link>
                <Heading3>Stap 4: Plan uw trouwdatum en -locatie</Heading3>
                <Paragraph>Wij bellen u om samen met u een trouwdatum en -locatie in te plannen.</Paragraph>
                <Heading3>Stap 5: Kies een trouwambtenaar</Heading3>
                <Paragraph>Kies een trouwambtenaar.</Paragraph>
                <Heading3>Stap 6: Kies de achternaam van uw kinderen</Heading3>
                <Paragraph>Kies de achternaam van uw kinderen.</Paragraph>
                <Heading3>Stap 7: (Optioneel:)kies uw eigen achternaam</Heading3>
                <Paragraph>Optioneel: kies uw eigen achternaam.</Paragraph>

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
