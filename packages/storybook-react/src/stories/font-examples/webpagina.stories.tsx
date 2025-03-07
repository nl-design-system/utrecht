import { Meta, StoryObj } from '@storybook/react';
import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Button,
  ButtonGroup,
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
  Surface,
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
  UtrechtSeparator,
} from '@utrecht/web-component-library-react';
import React from 'react';
import '../prototype-src/index.css'; // Importeer stylesheet
import ContentWebpage from '../prototype-src/ContentWebpage'; // Importeer het footer-component
import FontTester from '../prototype-src/FontTester'; // ✅ Importeer de herbruikbare font-tester
import FooterKlachten from '../prototype-src/FooterKlachtenFormulier.js'; // Importeer het footer-component
import urls from '../prototype-src/variables.js';

const meta = {
  title: 'Prototypes/Font voorbeeld/webpagina',
  id: 'webpagina-font1',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const One: Story = {
  render: (args) => (
    <Surface className="utrecht-html utrecht-theme">
      <Page {...args}>
        <PageHeader>
          <Logo>
            <LogoImage />
          </Logo>
        </PageHeader>
        <PageContent style={{ '--utrecht-space-around': 1 } as any}>
          <main>
            <section>
              <ContentWebpage />

              <UtrechtSeparator></UtrechtSeparator>
              <ButtonGroup direction="column">
                <ButtonLink appearance="primary-action-button" href={urls.fonttestStap1}>
                  Volgende test pagina
                  <UtrechtIconArrow />
                </ButtonLink>
              </ButtonGroup>
            </section>
          </main>
        </PageContent>
        <FooterKlachten />
      </Page>
      <FontTester></FontTester>
    </Surface>
  ),
};
