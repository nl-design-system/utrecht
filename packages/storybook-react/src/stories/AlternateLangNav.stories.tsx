import { Meta, StoryObj } from '@storybook/react';
import tokensDefinition from '@utrecht/alert-dialog-css/dist/tokens.mjs';
import readme from '@utrecht/alternate-lang-nav-css/README.md?raw';
import { ButtonGroup, Heading, Link, LinkButton } from '@utrecht/component-library-react/dist/css-module/index';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import React from 'react';
import { designTokenStory } from './util.js';

const meta = {
  title: 'React Component/Alternate language navigation',
  id: 'react-alternate-lang-nav',
  component: Link,
  args: {
    heading: 'Taal kiezen',
    headingId: '0103ec04-5ef6-41e6-b5f7-2fa7f60b0ed9',
    headingLevel: 2,
    children: <></>,
  },
  parameters: {
    tokensPrefix: 'utrecht-alternate-lang-nav',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: () => {
    const args = {
      heading: 'Taal kiezen',
      headingId: '0103ec04-5ef6-41e6-b5f7-2fa7f60b0ed9',
      headingLevel: 2,
    };
    const { heading, headingId, headingLevel } = args;

    return (
      <nav className="utrecht-alternate-lang-nav" aria-labelledby={headingId}>
        <Heading level={headingLevel} className="utrecht-alternate-lang-nav__heading" id={headingId}>
          {heading}
        </Heading>
        <Link
          aria-current="page"
          className="utrecht-link--current-lang"
          href="https://example.com/en"
          hrefLang="en"
          lang="en"
          title="This page in English"
        >
          EN
        </Link>
        <span aria-hidden="true">{' | '}</span>
        <Link
          className="utrecht-link--alternate-lang"
          href="https://example.com/nl"
          hrefLang="nl"
          lang="nl"
          rel="alternate"
          title="Deze pagina in Nederlands"
        >
          NL
        </Link>
      </nav>
    );
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const ButtonGroupStory: Story = {
  render: () => {
    const args = {
      heading: 'Taal kiezen',
      headingId: '0103ec04-5ef6-41e6-b5f7-2fa7f60b0ed9',
      headingLevel: 2,
      items: [
        {
          label: 'This page in English',
          lang: 'en',
          current: true,
          textContent: 'EN',
        },
        {
          label: 'Deze pagina in Nederlands',
          lang: 'nl',
          current: false,
          textContent: 'NL',
        },
      ],
    };
    const { heading, headingId, headingLevel, items } = args;

    return (
      <section className="utrecht-alternate-lang-nav" aria-labelledby={headingId}>
        <Heading level={headingLevel} className="utrecht-alternate-lang-nav__heading" id={headingId}>
          {heading}
        </Heading>
        <ButtonGroup>
          {items.map(({ current, label, lang, textContent }) => (
            <LinkButton inline pressed={current} lang={lang} aria-label={label} key={lang}>
              {textContent}
            </LinkButton>
          ))}
        </ButtonGroup>
      </section>
    );
  },
};
export const DesignTokens = designTokenStory(meta);
