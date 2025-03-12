import { Meta, StoryObj } from '@storybook/react';
import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  ButtonLink,
  Heading1,
  Logo,
  LogoImage,
  Page,
  PageContent,
  PageHeader,
  Surface,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import { UtrechtIconArrow, UtrechtIconChevronLeft } from '@utrecht/web-component-library-react';
import React from 'react';
import '../prototype-src/index.css'; // Importeer stylesheet
import FooterKlachten from '../prototype-src/FooterKlachtenFormulier.js'; // Importeer het footer-component
import urls from '../prototype-src/variables.js';
import '../styles.css';

const meta = {
  title: 'Prototypes/Klachtenformulier Scenario B/Stap 2',
  id: 'klachtenformulier-form-pages-stap-2B',
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
            <BreadcrumbNavLink href={urls.scenarioBPage1}>
              <BreadcrumbNavSeparator>
                <UtrechtIconChevronLeft />
              </BreadcrumbNavSeparator>
              Terug
            </BreadcrumbNavLink>
          </BreadcrumbNav>
          <main>
            <section>
              <Heading1>Klacht over de gemeente</Heading1>
              <UnorderedList>
                <UnorderedListItem>
                  In dit formulier doorloopt u de volgende stappen: uw klacht, voorstel oplossing, uw gegevens en het
                  controleren van de ingevulde informatie.
                </UnorderedListItem>
                <UnorderedListItem>Vul alles in. Als iets niet verplicht is, staat dat erbij.</UnorderedListItem>
                <UnorderedListItem>U kunt het formulier tussentijds opslaan en later verder gaan.</UnorderedListItem>
                <UnorderedListItem>
                  Na het versturen ontvangt u een bevestigingsmail. Ook kunt u uw klacht downloaden of printen.
                </UnorderedListItem>
              </UnorderedList>
              <ButtonLink appearance="primary-action-button" href={urls.scenarioBPage3}>
                Doorgaan
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
