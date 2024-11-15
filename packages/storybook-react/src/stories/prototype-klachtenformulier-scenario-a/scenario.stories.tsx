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
  SpotlightSection,
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
import '../prototype-src/index.css'; // Importeer stylesheet
import FooterKlachten from '../prototype-src/FooterKlachtenFormulier'; // Importeer het footer-component
import ScenarioKlachten from '../prototype-src/ScenarioKlachtenFormulier'; // Importeer het scenario-component
import urls from '../prototype-src/variables';

const meta = {
  title: 'Prototypes/Klachtenformulier Scenario A/Scenario',
  id: 'klachtenformulier-scenario-A',
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
        <ScenarioKlachten />
        <section>
          <ButtonLink appearance="primary-action-button" href={urls.scenarioAPage1}>
            Naar de klachtenpagina&nbsp;
            <UtrechtIconArrow />
          </ButtonLink>
        </section>
      </PageContent>
      <FooterKlachten />
    </Page>
  ),
};
