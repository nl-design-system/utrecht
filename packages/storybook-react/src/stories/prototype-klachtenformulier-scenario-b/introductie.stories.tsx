import { Meta, StoryObj } from '@storybook/react-vite';
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
import FooterKlachten from '../prototype-src/FooterKlachtenFormulier.js'; // Importeer het footer-component
import IntroductieContact from '../prototype-src/contactformulier/IntroductieContactFormulier.js'; // Importeer het footer-component
import urls from '../prototype-src/variables.js';
import '../styles.css';

const meta = {
  title: 'Prototypes/Klachtenformulier Scenario B/Introductie ',
  id: 'klachtenformulier-introductie-B',
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
              <ButtonLink appearance="primary-action-button" href={urls.scenarioBscenario}>
                Starten
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
