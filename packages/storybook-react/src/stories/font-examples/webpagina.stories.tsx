import { Meta, StoryObj } from '@storybook/react-vite';
import {
  ButtonGroup,
  ButtonLink,
  Logo,
  LogoImage,
  Page,
  PageContent,
  PageHeader,
  Surface,
} from '@utrecht/component-library-react/dist/css-module';
import { UtrechtIconArrow, UtrechtSeparator } from '@utrecht/web-component-library-react';
import React from 'react';
import '../prototype-src/index.css';
import ContentWebpage from '../prototype-src/ContentWebpage.js';
import FontTester from '../prototype-src/FontTester.js';
import FooterKlachten from '../prototype-src/FooterKlachtenFormulier.js';
import urls from '../prototype-src/variables.js';
import '../styles.css';

const meta = {
  title: 'Prototypes/Font voorbeeld/webpagina',
  id: 'webpagina-font1',
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
        <PageContent style={{ '--utrecht-space-around': 1 } as any}>
          <main>
            <section>
              <ContentWebpage />

              <UtrechtSeparator></UtrechtSeparator>
              <ButtonGroup direction="column">
                <ButtonLink appearance="primary-action-button" href={urls.fonttestStap1}>
                  Volgende test pagina
                  <UtrechtIconArrow />
                </ButtonLink>
              </ButtonGroup>
            </section>
          </main>
        </PageContent>
        <FooterKlachten />
      </Page>
      <FontTester />
    </Surface>
  ),
};
