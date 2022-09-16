import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  Heading2,
  Heading3,
  Link,
  LinkSocial,
  ListSocial,
  ListSocialItem,
  PageFooter,
  Paragraph,
} from '@utrecht/component-library-react';
import {
  UtrechtIconArrow,
  UtrechtIconFacebook,
  UtrechtIconInstagram,
  UtrechtIconLinkedin,
  UtrechtIconTwitter,
  UtrechtIconWhatsapp,
} from '@utrecht/web-component-library-react';
import React from 'react';

type List = {
  href: string;
  text: string;
};
interface ExampleFooterListProps {
  list: List[];
}

const exampleFooterListCSS: React.CSSProperties = {
  paddingInlineStart: '0',
  margin: '0',
};

const exampleFooterListItemCSS: React.CSSProperties = {
  listStyleType: 'none',
  marginBlockEnd: '1rem',
};

const socialIcon = {
  facebook: UtrechtIconFacebook,
  instagram: UtrechtIconInstagram,
  linkedin: UtrechtIconLinkedin,
  twitter: UtrechtIconTwitter,
  whatsapp: UtrechtIconWhatsapp,
};

type SocialMediaList = {
  href: string;
  title: string;
  icon: keyof typeof socialIcon;
};
interface ExampleFooterSocialMediaListProps {
  socialList: SocialMediaList[];
}

const ExampleFooterSocialMediaList: React.FC<ExampleFooterSocialMediaListProps> = ({ socialList }) => (
  <ListSocial>
    {socialList &&
      socialList.length > 0 &&
      socialList.map(({ href, icon, title }, index) => {
        const Icon = socialIcon[icon];
        return (
          <ListSocialItem key={index}>
            <LinkSocial href={href} title={title} external>
              <Icon />
            </LinkSocial>
          </ListSocialItem>
        );
      })}
  </ListSocial>
);

const ExampleFooterList: React.FC<ExampleFooterListProps> = ({ list }) => {
  return (
    <ul style={exampleFooterListCSS}>
      {list &&
        list.length > 0 &&
        list.map(({ href, text }, index) => (
          <li key={index} style={exampleFooterListItemCSS}>
            <Link href={href}>
              <UtrechtIconArrow />
              {text}
            </Link>
          </li>
        ))}
    </ul>
  );
};

const exampleFooterContainerCSS: React.CSSProperties = {
  display: 'flex',
  marginBlock: '1.5rem',
  flexWrap: 'wrap',
  gap: '30px',
};

export const ExampleFooterContainer: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div style={exampleFooterContainerCSS}>{children}</div>
);

export default {
  title: 'React.js Component/Page Footer',
  id: 'react-page-footer',
  component: PageFooter,
} as ComponentMeta<typeof PageFooter>;

const Template: ComponentStory<typeof PageFooter> = (args) => <PageFooter {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <Paragraph>Footer Content</Paragraph>,
};

(Default as any).displayName = 'PageFooter';

export const WithContent = Template.bind({});

WithContent.args = {
  children: (
    <React.Fragment>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <Heading2 style={{ paddingBlock: '30px' }}>GEMEENTE UTRECHT</Heading2>
        <ExampleFooterSocialMediaList
          socialList={[
            { icon: 'facebook', href: 'https://www.facebook.com/GemeenteUtrecht', title: 'Facebook' },
            { icon: 'instagram', href: 'https://www.instagram.com/GemeenteUtrecht', title: 'Instagram' },
            {
              icon: 'linkedin',
              href: 'https://www.linkedin.com/company/gemeente-utrecht/?originalSubdomain=nl',
              title: 'Linkedin',
            },
            { icon: 'twitter', href: 'https://twitter.com/gemeenteutrecht', title: 'Twitter' },
            { icon: 'whatsapp', href: 'https://api.whatsapp.com/send?phone=31624927665', title: 'Whatsapp' },
          ]}
        />
      </div>
      <ExampleFooterContainer>
        <div>
          <section style={{ display: 'grid' }}>
            <div style={{ paddingInlineStart: '19px', marginBlockEnd: '1rem' }}>
              <Heading3 style={{ marginBlockEnd: '1rem' }}>Telefoon</Heading3>
              <Link href="tel:14030">14 030</Link>
            </div>
            <Link
              style={{ marginBlockEnd: '1rem' }}
              href="https://www.utrecht.nl/contact/verkort-telefoonnummer-gemeente/"
            >
              <UtrechtIconArrow /> Hoe werkt 14030?
            </Link>
          </section>
          <ExampleFooterList
            list={[
              { href: 'https://www.utrecht.nl/contact/', text: 'Meer contactinformatie' },
              { href: 'https://www.utrecht.nl/over-deze-website/', text: 'Over deze website' },
            ]}
          />
        </div>
        <section style={{ flex: '1 1 10ch' }}>
          <Heading3>Adres</Heading3>
          <Paragraph translate="no">Stadskantoor</Paragraph>
          <Paragraph translate="no">Stadsplateau 1</Paragraph>
          <Paragraph translate="no">3521AZ Utrecht</Paragraph>
        </section>
      </ExampleFooterContainer>
    </React.Fragment>
  ),
};
