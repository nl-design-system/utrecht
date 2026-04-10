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
import FooterKlachten from '../prototype-src/FooterKlachtenFormulier.js'; // Importeer het footer-component
import ScenarioContact from '../prototype-src/contactformulier/ScenarioContactFormulier.js'; // Importeer het scenario-component
import urls from '../prototype-src/variables.js';
import '../styles.css';

const meta = {
  title: 'Prototypes/Trouwen/Testpaginas/Scenario',
  id: 'trouwen-scenario',
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
              <ScenarioContact />
              <br />
              <ButtonLink appearance="primary-action-button" href={urls.contactformStap1}>
                Start
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
