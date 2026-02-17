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
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
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
  title: 'Prototypes/Trouwen/Pagina indeling/Veelgestelde vragen',
  id: 'trouwen-veelgesteldevragen',
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
              <BreadcrumbNavLink href={urls.trouwenNavigatie}>
                <BreadcrumbNavSeparator>
                  <UtrechtIconChevronRight />
                </BreadcrumbNavSeparator>
                Trouwen, partnerschap en samenlevingscontract
              </BreadcrumbNavLink>
            </BreadcrumbNav>
            <main>
              <section>
                <Heading1>
                  Vragen en antwoorden over trouwen, samenlevingscontract en geregistreerd partnerschap
                </Heading1>

                <Heading2>Wat moet ik regelen?</Heading2>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href={urls.trouwenRegelenChecklist}
                >
                  <UtrechtIconChevronRight />
                  Trouwen: wat moet ik regelen?
                </Link>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="#"
                >
                  <UtrechtIconChevronRight />
                  Geregistreerd partnerschap: wat moet ik regelen?
                </Link>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="#"
                >
                  <UtrechtIconChevronRight />
                  Omzetten partnerschap in huwelijk: wat moet ik regelen?
                </Link>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="#"
                >
                  <UtrechtIconChevronRight />
                  Samenlevingscontract afsluiten: wat moet ik regelen?
                </Link>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="#"
                >
                  <UtrechtIconChevronRight />
                  Samenwonen: wat moet ik regelen?
                </Link>

                <Heading2>Buitenland</Heading2>
                <AccordionProvider
                  sections={[
                    {
                      body: 'Amorem ipsum dolor sit amet, consectetur heartbeat elit. Sed do eiusmod tempor kiss incididunt ut labore et dolore magna passion. Ut enim ad minim veniam, quis nostrud embrace ullam corporis suscipit amoroso, nisi ut aliquip ex ea commodo tender caress. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',

                      expanded: undefined,
                      label: 'Trouwen met iemand die niet in Nederland staat ingeschreven',
                    },
                    {
                      body: 'Amorem ipsum dolor sit amet, consectetur heartbeat elit. Sed do eiusmod tempor kiss incididunt ut labore et dolore magna passion. Ut enim ad minim veniam, quis nostrud embrace ullam corporis suscipit amoroso, nisi ut aliquip ex ea commodo tender caress. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',

                      expanded: undefined,
                      label:
                        'Wat moet ik regelen en weten als ik wil trouwen of een geregistreerd partnerschap wil sluiten in het buitenland?',
                    },
                  ]}
                />
                <Heading2>Trouwambtenaar</Heading2>
                <AccordionProvider
                  sections={[
                    {
                      body: 'Amorem ipsum dolor sit amet, consectetur heartbeat elit. Sed do eiusmod tempor kiss incididunt ut labore et dolore magna passion. Ut enim ad minim veniam, quis nostrud embrace ullam corporis suscipit amoroso, nisi ut aliquip ex ea commodo tender caress. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',

                      expanded: undefined,
                      label: 'Hoe kies ik een trouwambtenaar?',
                    },
                    {
                      body: 'Amorem ipsum dolor sit amet, consectetur heartbeat elit. Sed do eiusmod tempor kiss incididunt ut labore et dolore magna passion. Ut enim ad minim veniam, quis nostrud embrace ullam corporis suscipit amoroso, nisi ut aliquip ex ea commodo tender caress. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',

                      expanded: undefined,
                      label: 'Kan mijn vriend of familielid mijn trouwambtenaar zijn?',
                    },
                  ]}
                />
                <Heading2>Trouwlocaties</Heading2>
                <AccordionProvider
                  sections={[
                    {
                      body: 'Amorem ipsum dolor sit amet, consectetur heartbeat elit. Sed do eiusmod tempor kiss incididunt ut labore et dolore magna passion. Ut enim ad minim veniam, quis nostrud embrace ullam corporis suscipit amoroso, nisi ut aliquip ex ea commodo tender caress. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',

                      expanded: undefined,
                      label: 'Op welke locaties kan ik trouwen in de gemeente Utrecht?',
                    },
                    {
                      body: 'Amorem ipsum dolor sit amet, consectetur heartbeat elit. Sed do eiusmod tempor kiss incididunt ut labore et dolore magna passion. Ut enim ad minim veniam, quis nostrud embrace ullam corporis suscipit amoroso, nisi ut aliquip ex ea commodo tender caress. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',

                      expanded: undefined,
                      label: 'Ik woon in Utrecht, maar wail trouwen in een andere gemeente, hoe regel ik dat?',
                    },
                    {
                      body: 'Amorem ipsum dolor sit amet, consectetur heartbeat elit. Sed do eiusmod tempor kiss incididunt ut labore et dolore magna passion. Ut enim ad minim veniam, quis nostrud embrace ullam corporis suscipit amoroso, nisi ut aliquip ex ea commodo tender caress. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',

                      expanded: undefined,
                      label: 'Kan ik bij mij thuis trouwen?',
                    },
                  ]}
                />
                <Heading2>Verschillen</Heading2>
                <AccordionProvider
                  sections={[
                    {
                      body: 'Amorem ipsum dolor sit amet, consectetur heartbeat elit. Sed do eiusmod tempor kiss incididunt ut labore et dolore magna passion. Ut enim ad minim veniam, quis nostrud embrace ullam corporis suscipit amoroso, nisi ut aliquip ex ea commodo tender caress. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',

                      expanded: undefined,
                      label: 'Wat is het verschil tussen trouwen en een geregistreerd partnerschap?',
                    },
                    {
                      body: 'Amorem ipsum dolor sit amet, consectetur heartbeat elit. Sed do eiusmod tempor kiss incididunt ut labore et dolore magna passion. Ut enim ad minim veniam, quis nostrud embrace ullam corporis suscipit amoroso, nisi ut aliquip ex ea commodo tender caress. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',

                      expanded: undefined,
                      label: 'Wat is het verschil tussen trouwen en een samenlevingscontract?',
                    },
                  ]}
                />
                <Heading2>Regels rondom trouwen en geregistreerd partnerschap</Heading2>
                <AccordionProvider
                  sections={[
                    {
                      body: 'Amorem ipsum dolor sit amet, consectetur heartbeat elit. Sed do eiusmod tempor kiss incididunt ut labore et dolore magna passion. Ut enim ad minim veniam, quis nostrud embrace ullam corporis suscipit amoroso, nisi ut aliquip ex ea commodo tender caress. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',

                      expanded: undefined,
                      label: 'Onder welke voorwaarden kan ik trouwen of een geregistreerd partnerschap sluiten?',
                    },
                    {
                      body: 'Amorem ipsum dolor sit amet, consectetur heartbeat elit. Sed do eiusmod tempor kiss incididunt ut labore et dolore magna passion. Ut enim ad minim veniam, quis nostrud embrace ullam corporis suscipit amoroso, nisi ut aliquip ex ea commodo tender caress. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',

                      expanded: undefined,
                      label: 'Waar heb ik recht op als ik trouw in gemeenschap van goederen?',
                    },
                    {
                      body: 'Amorem ipsum dolor sit amet, consectetur heartbeat elit. Sed do eiusmod tempor kiss incididunt ut labore et dolore magna passion. Ut enim ad minim veniam, quis nostrud embrace ullam corporis suscipit amoroso, nisi ut aliquip ex ea commodo tender caress. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',

                      expanded: undefined,
                      label: 'Wanneer is een Verklaring geen schijnhuwelijk nodig?',
                    },
                    {
                      body: 'Amorem ipsum dolor sit amet, consectetur heartbeat elit. Sed do eiusmod tempor kiss incididunt ut labore et dolore magna passion. Ut enim ad minim veniam, quis nostrud embrace ullam corporis suscipit amoroso, nisi ut aliquip ex ea commodo tender caress. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
                      expanded: undefined,
                      label: 'Waar heb ik recht op als ik trouw in gemeenschap van goederen?',
                    },
                  ]}
                />
                <Heading2>Samenwonen en samenlevingscontract</Heading2>
                <AccordionProvider
                  sections={[
                    {
                      body: 'Amorem ipsum dolor sit amet, consectetur heartbeat elit. Sed do eiusmod tempor kiss incididunt ut labore et dolore magna passion. Ut enim ad minim veniam, quis nostrud embrace ullam corporis suscipit amoroso, nisi ut aliquip ex ea commodo tender caress. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
                      expanded: undefined,
                      label:
                        'Blijven de afspraken in een samenlevingscontract gelden tijdens een huwelijk of geregistreerd partnerschap?',
                    },
                    {
                      body: 'Amorem ipsum dolor sit amet, consectetur heartbeat elit. Sed do eiusmod tempor kiss incididunt ut labore et dolore magna passion. Ut enim ad minim veniam, quis nostrud embrace ullam corporis suscipit amoroso, nisi ut aliquip ex ea commodo tender caress. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
                      expanded: undefined,
                      label: 'Waar moet ik aan denken bij een samenlevingscontract?',
                    },
                  ]}
                />
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
