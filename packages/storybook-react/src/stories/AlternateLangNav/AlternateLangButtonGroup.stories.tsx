import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ButtonGroup, Heading, LinkButton } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React Component/Alternate language navigation/Button group',
  id: 'react-alternate-lang-button-group',
  component: LinkButton,
} as ComponentMeta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = () => {
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
};

export const Default = Template.bind({});

Default.args = {
  children: <></>,
};
