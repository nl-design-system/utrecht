/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtContactCardTemplate } from '@utrecht/web-component-library-react';
import { PropsWithChildren } from 'react';

type HTMLHeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type ContactCardStoryArgs = {
  heading: string;
  headingLevel?: HTMLHeadingLevel;
  subtitle?: string;
  socialLinks?: string;
};

// Cast needed until @utrecht/web-component-library-stencil is rebuilt with the socialLinks prop
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WC = UtrechtContactCardTemplate as any;

const ContactCardStory = ({
  heading,
  headingLevel,
  subtitle,
  socialLinks,
  children,
}: PropsWithChildren<ContactCardStoryArgs>) => (
  <WC heading={heading} headingLevel={headingLevel} subtitle={subtitle} socialLinks={socialLinks}>
    {children}
  </WC>
);

const phoneSection = (
  <div className="utrecht-contact-card__grid-cell">
    <h3 className="utrecht-heading-3">Telefoon</h3>
    <p className="utrecht-paragraph">
      <a
        href="tel:14030"
        aria-label="Bel 14030, telefoonnummer van gemeente Utrecht"
        className="utrecht-link utrecht-link--html-a"
      >
        14&nbsp;030
      </a>
    </p>
    <p className="utrecht-paragraph">
      Maandag, dinsdag en donderdag 9.00&nbsp;-&nbsp;17.00&nbsp;uur
      <br />
      Woensdag en vrijdag 9.00&nbsp;-&nbsp;13.00&nbsp;uur
    </p>
  </div>
);

const emailSection = (
  <div className="utrecht-contact-card__grid-cell">
    <h3 className="utrecht-heading-3">Vraag of idee?</h3>
    <p className="utrecht-paragraph">
      <a href="https://www.utrecht.nl/reactieformulier" target="_top" className="utrecht-link utrecht-link--html-a">
        Algemeen reactieformulier
      </a>
    </p>
  </div>
);

const meta = {
  title: 'Templates/Contact card',
  id: 'templates-web-component-contact-card',
  component: ContactCardStory,
  argTypes: {
    heading: {
      control: 'text',
      description: 'Heading text',
      table: { type: { summary: 'string' } },
    },
    headingLevel: {
      control: { type: 'number', min: 1, max: 6 },
      description: 'Heading level',
      table: { type: { summary: '1 | 2 | 3 | 4 | 5 | 6' }, defaultValue: { summary: '2' } },
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle shown after the heading',
      table: { type: { summary: 'string' } },
    },
  },
  args: {
    heading: 'Hulp en contact',
    headingLevel: 2,
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-contact-card-template',
    tokens,
    tokensDefinition: {},
  },
} satisfies Meta<typeof ContactCardStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'De standaard contact card toont contactgegevens van een gemeentelijke afdeling, zoals telefoonnummer en een reactieformulier.',
      },
    },
  },
  render: (args: ContactCardStoryArgs) => (
    <ContactCardStory {...args}>
      {phoneSection}
      {emailSection}
    </ContactCardStory>
  ),
};

export const WithIconLinks: Story = {
  name: 'Met icoonlinks',
  parameters: {
    docs: {
      description: {
        story:
          'Gebruik `socialLinks` om icoonlinks toe te voegen aan de contact card, bijvoorbeeld voor sociale media.',
      },
    },
  },
  render: (args: ContactCardStoryArgs) => (
    <ContactCardStory
      {...args}
      sectionCount={2}
      socialLinksHeading="Social media"
      socialLinks={JSON.stringify([
        { icon: 'facebook', href: 'https://www.facebook.com/GemeenteUtrecht', label: 'Facebook van gemeente Utrecht' },
        {
          icon: 'linkedin',
          href: 'https://www.linkedin.com/company/gemeente-utrecht',
          label: 'LinkedIn van gemeente Utrecht',
        },
        { icon: 'x', href: 'https://x.com/gemeenteutrecht', label: 'X van gemeente Utrecht' },
      ])}
    >
      {phoneSection}
      {emailSection}
    </ContactCardStory>
  ),
};
