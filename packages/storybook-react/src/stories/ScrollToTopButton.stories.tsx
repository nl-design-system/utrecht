import { Meta, StoryObj } from '@storybook/react';
import { ScrollToTopButton } from '@utrecht/component-library-react';
import { Document, Heading, Page, PageContent, Paragraph } from '@utrecht/component-library-react/src/css-module/index';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtIconChevronUp } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './util';

const DemoPage = ({ children }: { children: React.ReactNode }) => (
  <Document style={{ '--utrecht-space-around': 1 } as any}>
    <Page>
      <PageContent>
        <Heading level={1}>Scroll To The Top Button</Heading>
        <Heading level={2}>What is Lorem Ipsum?</Heading>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </Paragraph>
        <Heading level={2}>Why do we use it?</Heading>
        <Paragraph>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for
          &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </Paragraph>
        <Heading level={2}>Where does it come from?</Heading>
        <Paragraph>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
          College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
          and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem
          Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of
          Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
          during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a
          line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
          interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also
          reproduced in their exact original form, accompanied by English versions from the 1914 translation by H.
          Rackham.
        </Paragraph>
        <Heading level={2}>Where can I get some?</Heading>
        <Paragraph>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in
          the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The
          generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words
          etc.
        </Paragraph>
      </PageContent>
    </Page>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>{children}</div>
  </Document>
);

const meta: Meta<typeof ScrollToTopButton> = {
  title: 'React Component/Scroll To The Top Button',
  id: 'react-scroll-to-top-button',
  component: ScrollToTopButton,
  parameters: {
    tokensPrefix: 'utrecht-scroll-to-top-button',
    tokens,
  },
  argTypes: {
    children: {
      description: 'ReactNode',
      table: {
        category: 'API',
        defaultValue: { summary: null },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: (args) => (
    <DemoPage>
      <ScrollToTopButton appearance="subtle-button" {...args}>
        Naar Boven
        <UtrechtIconChevronUp />
      </ScrollToTopButton>
    </DemoPage>
  ),
};

export const DesignTokens = designTokenStory(meta);
