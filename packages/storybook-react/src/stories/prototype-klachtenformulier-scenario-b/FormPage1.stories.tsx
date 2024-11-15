import { Meta, StoryObj } from '@storybook/react';
import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Button,
  ButtonLink,
  Heading1,
  Heading2,
  Heading3,
  Link,
  Logo,
  LogoImage,
  Page,
  PageContent,
  PageFooter,
  PageHeader,
  Paragraph,
  Separator,
  Strong,
  Textbox,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import { UtrechtIconArrow, UtrechtIconChevronLeft } from '@utrecht/web-component-library-react';
import React from 'react';
import '../prototype-src/index.css'; // Importeer stylesheet
import FooterKlachten from '../prototype-src/FooterKlachtenFormulier'; // Importeer het footer-component
import urls from '../prototype-src/variables';

const meta = {
  title: 'Prototypes/Klachtenformulier Scenario B/Stap 1',
  id: 'klachtenformulier-form-pages-stap-1B',
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const One: Story = {
  render: (args) => (
    <Page {...args}>
      <PageHeader>
        <Logo>
          <LogoImage />
        </Logo>
      </PageHeader>
      <PageContent style={{ '--utrecht-space-around': 1 } as any}>
        <BreadcrumbNav>
          <BreadcrumbNavLink href={urls.scenarioBscenario}>
            <BreadcrumbNavSeparator>
              <UtrechtIconChevronLeft />
            </BreadcrumbNavSeparator>
            Terug
          </BreadcrumbNavLink>
        </BreadcrumbNav>
        <main>
          <section>
            <Heading1>Klacht</Heading1>
            <Paragraph appearance="lead">
              Bent u ontevreden over hoe de gemeente haar taken uitvoert? Bent u bijvoorbeeld niet goed geholpen? Of
              bent u niet netjes behandeld? De gemeente vindt dat vervelend en zoekt graag samen naar een oplossing.
            </Paragraph>
            <Paragraph>
              U kunt uw klacht op 3 manieren indienen: met het klachtenformulier, bellen of een brief sturen.
            </Paragraph>

            <ButtonLink appearance="primary-action-button" href={urls.scenarioBPage2}>
              Ga naar klachtenformulier&nbsp;
              <UtrechtIconArrow />
            </ButtonLink>
            <Heading2>Bellen</Heading2>
            <Paragraph>
              U kunt bellen naar telefoonnummer 14030 (of vanuit het buitenland: +31 30 286 00 00). Dit kan van maandag
              tot en met vrijdag tussen 9.00 en 17.00 uur.
            </Paragraph>
            <Heading2>Een brief sturen</Heading2>
            <Paragraph>
              U kunt een brief schrijven met uw klacht. Stuur uw brief naar: Gemeente Utrecht Klachtenbehandeling
              Antwoordnummer 51066 3501 VC Utrecht (geen postzegel nodig)
            </Paragraph>
          </section>
        </main>
      </PageContent>
      <FooterKlachten />
    </Page>
  ),
};
