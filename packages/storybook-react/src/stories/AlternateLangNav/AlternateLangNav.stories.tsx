import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading, Link } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React Component/Alternate language navigation',
  id: 'react-alternate-lang-nav',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = () => {
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
};

export const Default = Template.bind({});

Default.args = {
  children: <></>,
};
