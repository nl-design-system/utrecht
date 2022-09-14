import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading2, Heading3, Link, PageFooter, Paragraph } from '@utrecht/component-library-react';
import { UtrechtIconArrow } from '@utrecht/web-component-library-react';
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
      <Heading2 style={{ paddingBlock: '30px' }}>GEMEENTE UTRECHT</Heading2>
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
