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
} from '@utrecht/web-component-library-react';
import '../prototype-src/index.css'; // Importeer stylesheet
import React from 'react';
import ContentWebpageEvent1 from '../prototype-src/ContentWebpageEvent1.js';
import FontTester from '../prototype-src/FontTester.js'; // ✅ Importeer de herbruikbare font-tester
import FooterKlachten from '../prototype-src/FooterKlachtenFormulier.js'; // Importeer het footer-component

const meta = {
  title: 'Prototypes/Font voorbeeld/Events - 1',
  id: 'webpagina-event1-font1',
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
          <main>
            <section>
              <ContentWebpageEvent1 />
            </section>
          </main>
        </PageContent>
        <FooterKlachten />
      </Page>
      <FontTester></FontTester>
    </Surface>
  ),
};
