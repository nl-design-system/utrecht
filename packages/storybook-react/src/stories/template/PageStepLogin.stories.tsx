import { Meta, StoryObj } from '@storybook/react';
import {
  ButtonLink,
  Heading1,
  Heading2,
  Link,
  Page,
  PageContent,
  PageFooter,
  PageHeader,
  Paragraph,
  Separator,
} from '@utrecht/component-library-react';
import {
  UtrechtBreadcrumb,
  UtrechtDigidButton,
  UtrechtIconArrow,
  UtrechtLogo,
} from '@utrecht/web-component-library-react';
import React from 'react';

const meta = {
  title: 'Template/DigiD login page',
  id: 'template-form-pages-step-login',
  component: Page,
} as Meta<typeof Page>;

export default meta;

const Template: StoryObj<typeof Page> = () => (
  <Page>
    <PageHeader>
      <Link href="/">
        <UtrechtLogo />
      </Link>
    </PageHeader>
    <PageContent style={{ '--utrecht-space-around': 1 } as any}>
      <UtrechtBreadcrumb
        json={JSON.stringify([
          { href: 'https://example/', title: 'Home', current: false },
          { href: 'https://example/', title: 'Online loket', current: true },
        ])}
        variant="arrows"
      />
      <Heading1>Inloggen</Heading1>
      <Paragraph>Log in met uw DigiD om verder to gaan</Paragraph>
      <UtrechtDigidButton>
        <ButtonLink appearance="primary-action-button">
          Inloggen met DigiD <UtrechtIconArrow />
        </ButtonLink>
      </UtrechtDigidButton>
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
);

export const Login = Template.bind({});
