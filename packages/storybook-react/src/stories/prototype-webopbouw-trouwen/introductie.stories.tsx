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
import FooterContact from '../prototype-src/contactformulier/FooterContactFormulier.js';
import IntroductieContact from '../prototype-src/contactformulier/IntroductieContactFormulier.js'; // Importeer het footer-component
import urls from '../prototype-src/variables.js';
import '../styles.css';

const meta = {
  title: 'Prototypes/Trouwen/Testpaginas/Introductie ',
  id: 'trouwen-introductie',
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
              <IntroductieContact />
              <br />
              <ButtonLink appearance="primary-action-button" href={urls.contactformScenario}>
                Starten
                <UtrechtIconArrow />
              </ButtonLink>
            </section>
          </main>
        </PageContent>
        <FooterContact />
      </Page>
    </Surface>
  ),
};
