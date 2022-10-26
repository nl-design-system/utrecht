import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React.js Component/Alternate language navigation',
  id: 'react-alternate-lang-nav',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = () => (
  <nav>
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

export const Default = Template.bind({});

Default.args = {
  children: <></>,
};
