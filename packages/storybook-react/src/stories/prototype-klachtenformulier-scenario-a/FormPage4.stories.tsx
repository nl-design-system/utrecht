import { Meta, StoryObj } from '@storybook/react';
import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Button,
  ButtonGroup,
  ButtonLink,
  FormFieldErrorMessage,
  FormFieldTextarea,
  FormFieldTextbox,
  FormLabel,
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
  Separator,
  SpotlightSection,
  Strong,
  Surface,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import {
  UtrechtIconArrow,
  UtrechtIconChevronLeft,
  UtrechtIconCross,
  UtrechtLogo,
} from '@utrecht/web-component-library-react';
import React, { useRef, useState } from 'react';
import '../prototype-src/index.css'; // Importeer stylesheet
import FooterKlachten from '../prototype-src/FooterKlachtenFormulier.js'; // Importeer het footer-component
import urls from '../prototype-src/variables.js';

const meta = {
  title: 'Prototypes/Klachtenformulier Scenario A/Stap 4',
  id: 'klachtenformulier-form-pages-stap-4A',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const One: Story = {
  render: (args) => (
    <Surface className="utrecht-html">
      <Page {...args}>
        <PageHeader>
          <Logo>
            <LogoImage />
          </Logo>
        </PageHeader>
        <PageContent style={{ '--utrecht-space-around': 1 } as any}>
          <BreadcrumbNav>
            <BreadcrumbNavLink href={urls.scenarioAPage3}>
              <BreadcrumbNavSeparator>
                <UtrechtIconChevronLeft />
              </BreadcrumbNavSeparator>
              Terug
            </BreadcrumbNavLink>
          </BreadcrumbNav>
          <main>
            <section>
              <Heading1>Einde van het klachtenformulier</Heading1>
              <SpotlightSection type="ok">
                <Heading2>Dank je wel!</Heading2>
                <Paragraph>
                  In het echt zou je doorgaan naar de volgende stap. Maar voor deze test is dit nu het einde van het
                  formulier. We hebben nog een paar korte vragen, en dan zijn we klaar.
                </Paragraph>
              </SpotlightSection>
              <ButtonLink appearance="primary-action-button" href={urls.scenarioAintroductie}>
                Terug naar het begin
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
