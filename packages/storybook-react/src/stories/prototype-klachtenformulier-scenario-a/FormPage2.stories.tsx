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
  PageFooter,
  PageHeader,
  Paragraph,
  Separator,
  Strong,
  Surface,
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
  title: 'Prototypes/Klachtenformulier Scenario A/Stap 2',
  id: 'klachtenformulier-form-pages-stap-2A',
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
            <BreadcrumbNavLink href={urls.scenarioAPage1}>
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
                <UnorderedListItem>
                  Vul alle velden in. Als een veld niet verplicht is, staat dit erbij.
                </UnorderedListItem>
                <UnorderedListItem>U kunt het formulier tussentijds opslaan en later verder gaan.</UnorderedListItem>
                <UnorderedListItem>
                  Na het versturen ontvangt u een bevestigingsmail. Ook heeft u de mogelijkheid uw klacht te downloaden
                  of printen.
                </UnorderedListItem>
              </UnorderedList>
              <ButtonLink appearance="primary-action-button" href={urls.scenarioAPage3}>
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
