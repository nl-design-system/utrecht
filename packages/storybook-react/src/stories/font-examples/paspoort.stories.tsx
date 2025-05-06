import { Meta, StoryObj } from '@storybook/react';
import {
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
import '../prototype-src/NotoSwitcher.js';
import ContentWebpage from '../prototype-src/ContentPaspoort.js';
import FooterKlachten from '../prototype-src/FooterKlachtenFormulier.js';
import urls from '../prototype-src/variables.js';
import '../styles.css';

const meta = {
  title: 'Prototypes/Font voorbeeld/paspoort',
  id: 'paspoort-font',
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
        <nav className="utrecht-navigation" aria-label="Hoofdmenu">
          <ul className="utrecht-navigation__list" id="menu">
            <li className="utrecht-navigation__item">
              <a href="#" className="utrecht-link utrecht-link--html-a utrecht-navigation__link" aria-current="false">
                Wonen en leven
              </a>
            </li>
            <li className="utrecht-navigation__item">
              <a href="#" className="utrecht-link utrecht-link--html-a utrecht-navigation__link" aria-current="false">
                Zorg en onderwijs
              </a>
            </li>
            <li className="utrecht-navigation__item">
              <a href="#" className="utrecht-link utrecht-link--html-a utrecht-navigation__link" aria-current="false">
                Werk en inkomen
              </a>
            </li>
            <li className="utrecht-navigation__item">
              <a href="#" className="utrecht-link utrecht-link--html-a utrecht-navigation__link" aria-current="false">
                Ondernemen
              </a>
            </li>
            <li className="utrecht-navigation__item">
              <a href="#" className="utrecht-link utrecht-link--html-a utrecht-navigation__link" aria-current="false">
                Bestuur en organisatie
              </a>
            </li>
          </ul>
        </nav>
        <PageContent style={{ '--utrecht-space-around': 1 } as any}>
          <main>
            <section>
              <ContentWebpage />
            </section>
          </main>
        </PageContent>
        <FooterKlachten />
      </Page>
    </Surface>
  ),
};
