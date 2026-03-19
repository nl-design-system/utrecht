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
import KTO from '../prototype-src/webpaginablokken/KTO.js';
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
              <ButtonLink appearance="primary-action-button" href={urls.volgordeScenario1}>
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
              <ButtonLink appearance="primary-action-button" href={urls.volgordeNavigeren}>
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
