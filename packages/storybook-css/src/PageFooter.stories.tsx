/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Heading2, Heading3, Link, PageFooter, Paragraph, Strong } from '@utrecht/component-library-react';
import readme from '@utrecht/components/page-footer/README.md?raw';
import tokensDefinition from '@utrecht/components/page-footer/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Page footer',
  id: 'css-page-footer',
  component: PageFooter,
  args: {
    children: [],
  },
  parameters: {
    tokensPrefix: 'utrecht-page-footer',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof PageFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <address className="utrecht-page-footer__address utrecht-page-footer__address--reset-address">
        <Heading2 className="utrecht-heading-2--reset-h2">Gemeente Utrecht</Heading2>
        <section>
          <Heading3 className="utrecht-heading-3--distanced">Telefoon</Heading3>
          <Paragraph className=" utrecht-paragraph--distanced">
            <Link href="tel:+31302860000" className="utrecht-link--telephone">
              14 030
            </Link>
          </Paragraph>
        </section>
        <section>
          <Heading3 className="utrecht-heading-3--distanced">Adres</Heading3>
          <Paragraph className="utrecht-paragraph--distanced">
            <Strong>Stadskantoor</Strong>
            <br />
            Stadsplateau 1<br />
            3521AZ
          </Paragraph>
        </section>
      </address>,
      <div className="utrecht-page-footer__navigation">
        <ul className="utrecht-link-list utrecht-link-list--chevron">
          <li className="utrecht-link-list__item">
            <Link href="/contact/">Meer contactinformatie</Link>
          </li>
          <li className="utrecht-link-list__item">
            <Link href="/over-deze-website">Over deze website</Link>
          </li>
        </ul>
      </div>,
    ],
  },
};

export const DesignTokens = designTokenStory(meta);
