import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import {
  Logo,
  LogoImage,
  Page,
  PageContent,
  PageHeader,
  Surface,
} from '../../../../component-library-react/src/index.js';
import ContentWebpageEvent2 from '../prototype-src/ContentWebpageEvent2.js';
import FontTester from '../prototype-src/FontTester.js';
import FooterKlachten from '../prototype-src/FooterKlachtenFormulier.js';
import '../prototype-src/index.css';
import '../styles.css';

const meta = {
  title: 'Prototypes/Font voorbeeld/Events - 2',
  id: 'webpagina-event2-font',
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
              <ContentWebpageEvent2 />
            </section>
          </main>
        </PageContent>
        <FooterKlachten />
      </Page>
      <FontTester></FontTester>
    </Surface>
  ),
};
