import { Meta, StoryObj } from '@storybook/react';
import {
  ButtonLink,
  Logo,
  LogoImage,
  Page,
  PageContent,
  PageHeader,
  Surface,
} from '@utrecht/component-library-react/dist/css-module';
import { UtrechtIconArrow } from '@utrecht/web-component-library-react';
import React from 'react';
import '../prototype-src/index.css'; // Importeer stylesheet
import EmailContact from '../prototype-src/contactformulier/EmailContactFormulier.js'; // Importeer het email-component
import '../styles.css';
import FooterContact from '../prototype-src/contactformulier/FooterContactFormulier.js';

const meta = {
  title: 'Prototypes/Contactformulier - KTO Vervolg/E-mail',
  id: 'contactformulier-email-kto-vervolg',
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
          <main>
            <section>
              <EmailContact />
            </section>
          </main>
        </PageContent>
        <FooterContact />
      </Page>
    </Surface>
  ),
};
