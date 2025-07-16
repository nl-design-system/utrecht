import { Meta, StoryObj } from '@storybook/react';
import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  ButtonLink,
  Heading1,
  Heading2,
  Logo,
  LogoImage,
  Page,
  PageContent,
  PageHeader,
  Paragraph,
  SpotlightSection,
  Surface,
} from '@utrecht/component-library-react/dist/css-module';
import { UtrechtIconArrow, UtrechtIconChevronLeft } from '@utrecht/web-component-library-react';
import React from 'react';
import '../prototype-src/index.css'; // Importeer stylesheet
import FooterKlachten from '../prototype-src/FooterKlachtenFormulier.js'; // Importeer het footer-componentnt
import urls from '../prototype-src/variables.js';
import '../styles.css';

const meta = {
  title: 'Prototypes/Contactformulier/Stap 4',
  id: 'contactformulier-stap-4',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const One: Story = {
  render: (args: any) => (
    <Surface className="utrecht-custom-theme">
      <Page {...args}>
        <PageHeader>
          <Logo>
            <LogoImage />
          </Logo>
        </PageHeader>
        <PageContent>
          <BreadcrumbNav>
            <BreadcrumbNavLink href={urls.scenarioBPage3}>
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
              <ButtonLink appearance="primary-action-button" href={urls.scenarioBintroductie}>
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
