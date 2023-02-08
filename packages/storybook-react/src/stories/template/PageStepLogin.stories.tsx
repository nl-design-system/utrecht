import { Meta, StoryObj } from '@storybook/react';
import {
  BreadcrumbLink,
  BreadcrumbNav,
  ButtonLink,
  Heading1,
  Heading2,
  HeadingGroup,
  Link,
  Page,
  PageContent,
  PageFooter,
  PageHeader,
  Paragraph,
  Separator,
} from '@utrecht/component-library-react';
import { UtrechtDigidButton, UtrechtIconArrow, UtrechtLogo } from '@utrecht/web-component-library-react';
import React from 'react';

const meta = {
  title: 'Template/DigiD login page',
  id: 'template-form-pages-step-login',
  component: Page,
  subcomponents: {
    BreadcrumbLink,
    BreadcrumbNav,
    ButtonLink,
    Heading1,
    Heading2,
    HeadingGroup,
    Link,
    Page,
    PageContent,
    PageFooter,
    PageHeader,
    Paragraph,
    Separator,
    UtrechtDigidButton,
    UtrechtIconArrow,
    UtrechtLogo,
  },
} as Meta<typeof Page>;

export default meta;

export const Login: StoryObj<typeof Page> = {
  render: (args) => (
    <Page {...args} className="utrecht-demo-page__layout utrecht-demo-page--wrapper">
      <PageHeader>
        <Link href="/" aria-label="Gemeente Utrecht">
          <UtrechtLogo />
        </Link>
      </PageHeader>
      <PageContent>
        <BreadcrumbNav appearance="arrows">
          <BreadcrumbLink href="https://example/" index={0} current={false} rel="home">
            Home
          </BreadcrumbLink>
          <BreadcrumbLink href="https://example/" index={0} current={true} rel="Online loket">
            Online loket
          </BreadcrumbLink>
        </BreadcrumbNav>
      </PageContent>
      <PageContent role="main">
        <HeadingGroup>
          <Heading1>Inloggen</Heading1>
          <Paragraph>Log in met uw DigiD om verder to gaan</Paragraph>
        </HeadingGroup>
        <p>
          <UtrechtDigidButton>
            <ButtonLink appearance="primary-action-button">
              Inloggen met DigiD <UtrechtIconArrow />
            </ButtonLink>
          </UtrechtDigidButton>
        </p>
        <Separator />
        <aside>
          <Heading2>Uitleg over DigiD?</Heading2>
          <Paragraph>
            Vindt u DigiD ingewikkeld? Bekijk dan deze
            <Link href="https://www.uabc.nl/?osc=uabc">uitleg over DigiD.</Link>
          </Paragraph>
        </aside>
        <Separator />
        <Link external href="https://www.kcmsurvey.com/qSwudd733b9c27c2e91ba8c7b598MaSd?webpagina=Inloggen">
          <UtrechtIconArrow /> Wat vindt u van deze pagina?
        </Link>
      </PageContent>
      <PageFooter />
    </Page>
  ),
};
