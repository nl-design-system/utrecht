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

const meta = {
  title: 'Prototypes/Klachtenformulier Scenario B/Introductie ',
  id: 'klachtenformulier-introducti-B',
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
        <section>
          <Heading1>Test invullen klacht</Heading1>
          <Paragraph>
            Dank je wel dat je ons wilt helpen met het testen van het klachtenformulier! In deze test vragen we je een
            klacht in te voeren. Een paar belangrijke dingen voordat je begint:
          </Paragraph>
          <UnorderedList>
            <UnorderedListItem>Je kunt geen fouten maken. Wij testen het product werkt, niet jou.</UnorderedListItem>
            <UnorderedListItem>
              Vertel hardop wat je doet. Zeg wat je ziet, wat je denkt en wat je wilt doen.
            </UnorderedListItem>
            <UnorderedListItem>
              Ik mag je niet helpen tijdens de test. We willen zien hoe jij het zelf doet.
            </UnorderedListItem>
          </UnorderedList>
        </section>
        <section>
          <ButtonLink
            appearance="primary-action-button"
            href="./iframe.html?args=&id=klachtenformulier-scenario--one&viewMode=story"
          >
            Starten&nbsp;
            <UtrechtIconArrow />
          </ButtonLink>
        </section>
      </PageContent>
      <FooterKlachten />
    </Page>
  ),
};
