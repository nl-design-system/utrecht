import { Meta, StoryObj } from '@storybook/react';
import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Button,
  ButtonLink,
  DataList,
  DataListItem,
  DataListKey,
  DataListValue,
  FormField,
  FormLabel,
  Heading1,
  Heading2,
  Heading3,
  Link,
  LinkList,
  LinkListLink,
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
import {
  UtrechtBreadcrumbNav,
  UtrechtDigidButton,
  UtrechtFormFieldDescription,
  UtrechtIconArrow,
  UtrechtIconChevronLeft,
  UtrechtIconFacebook,
  UtrechtIconInstagram,
  UtrechtIconLinkedin,
  UtrechtIconNieuwHuis,
  UtrechtIconNieuwsbrief,
  UtrechtIconWhatsapp,
  UtrechtLogo,
} from '@utrecht/web-component-library-react';
import React from 'react';
import './index.css';
import FooterKlachten from './FooterKlachtenFormulier'; // Importeer het footer-component

const meta = {
  title: 'Template/Klachtenformulier/Stap 2',
  id: 'klachtenformulier-form-pages-stap-2',
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const One: Story = {
  render: (args) => (
    <Page {...args}>
      <PageHeader>
        <nav>
          <Logo>
            <LogoImage />
          </Logo>
        </nav>
      </PageHeader>
      <PageContent style={{ '--utrecht-space-around': 1 } as any}>
        <BreadcrumbNav>
          <BreadcrumbNavLink href="#">
            <BreadcrumbNavSeparator>
              <UtrechtIconChevronLeft />
            </BreadcrumbNavSeparator>
            Terug
          </BreadcrumbNavLink>
        </BreadcrumbNav>
        <Heading1>Klacht over de gemeente</Heading1>
        <section>
          <UnorderedList>
            <UnorderedListItem>
              In dit formulier doorloopt u de volgende stappen: uw klacht, voorstel oplossing, uw gegevens en het
              controleren van de ingevulde informatie.
            </UnorderedListItem>
            <UnorderedListItem>Vul alle velden in. Als een veld niet verplicht is, staat dit erbij.</UnorderedListItem>
            <UnorderedListItem>U kunt het formulier tussentijds opslaan en later verder gaan.</UnorderedListItem>
            <UnorderedListItem>
              Na het versturen ontvangt u een bevestigingsmail. Ook heeft u de mogelijkheid uw klacht te downloaden of
              printen.
            </UnorderedListItem>
          </UnorderedList>
        </section>
        <br />
        <Button appearance="primary-action-button" type="submit">
          Doorgaan
          <UtrechtIconArrow />
        </Button>
      </PageContent>
      <FooterKlachten />
    </Page>
  ),
};
