import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup, Heading, Link, LinkButton } from '@utrecht/component-library-react/dist/css-module/index';
import tokensDefinition from '@utrecht/components/alert-dialog/tokens.json';
import readme from '@utrecht/components/alternate-lang-nav/README.md?raw';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';
import '@utrecht/components/alternate-lang-nav/css/index.scss';

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
      page: () => (
        <>
          <Description>{readme}</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
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
