import { Meta, StoryObj } from '@storybook/react';
import {
  Logo,
  LogoImage,
  Page,
  PageContent,
  PageHeader,
  Surface,
} from '@utrecht/component-library-react/dist/css-module';
import '../prototype-src/index.css'; // Importeer stylesheet
import React from 'react';
import ContentWebpageEvent1 from '../prototype-src/ContentWebpageEvent1.js';
import FontTester from '../prototype-src/FontTester.js'; // ✅ Importeer de herbruikbare font-tester
import FooterKlachten from '../prototype-src/FooterKlachtenFormulier.js'; // Importeer het footer-component
import '../styles.css';

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
              <ContentWebpageEvent1 />
            </section>
          </main>
        </PageContent>
        <FooterKlachten />
      </Page>
      <FontTester />
    </Surface>
  ),
};
