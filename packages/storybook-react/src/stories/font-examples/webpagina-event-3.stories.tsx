import { Meta, StoryObj } from '@storybook/react-vite';
import {
  Logo,
  LogoImage,
  Page,
  PageContent,
  PageHeader,
  Surface,
} from '@utrecht/component-library-react/dist/css-module';
import '../prototype-src/index.css'; // Importeer stylesheet
import '../styles.css';
import React from 'react';
import ContentWebpageEvent3 from '../prototype-src/ContentWebpageEvent3.js';
import FontTester from '../prototype-src/FontTester.js'; // ✅ Importeer de herbruikbare font-tester
import FooterKlachten from '../prototype-src/FooterKlachtenFormulier.js'; // Importeer het footer-component

const meta = {
  title: 'Prototypes/Font voorbeeld/Events - 3',
  id: 'webpagina-event3-font',
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
              <ContentWebpageEvent3 />
            </section>
          </main>
        </PageContent>
        <FooterKlachten />
      </Page>
      <FontTester></FontTester>
    </Surface>
  ),
};
