/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Link, Paragraph, URLValue } from '@utrecht/component-library-react/dist/css-module';
import { URLValueProps } from '@utrecht/component-library-react/src/URLValue';
import readme from '@utrecht/components/url/README.md?raw';
import tokensDefinition from '@utrecht/components/url/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

type HypenatedTextWithLinksProps = URLValueProps & { paragraph: string; href: string; external?: boolean };

const HypenatedTextWithLinks = ({ children, paragraph, external, href, ...props }: HypenatedTextWithLinksProps) => (
  <Paragraph
    style={{
      hyphens: 'auto',
    }}
  >
    {/* Add an URL link after every third word */}
    {paragraph.split(/((\w+\W){3})/g).map(
      (text) =>
        text || (
          <>
            <Link href={href} external={external}>
              <URLValue {...props}>{children}</URLValue>
            </Link>
          </>
        ),
    )}
  </Paragraph>
);

const URLValuestory = ({ paragraph, external, href, ...props }: HypenatedTextWithLinksProps) =>
  paragraph ? (
    <HypenatedTextWithLinks paragraph={paragraph} external={external} href={href} {...props} />
  ) : (
    <URLValue {...props} />
  );

const meta = {
  title: 'CSS Component/URL value',
  id: 'css-url',
  component: URLValuestory,
  argTypes: {
    children: {
      description: 'URL',
      type: 'string',
    },
  },
  args: {
    children: [],
  },
  parameters: {
    tokensPrefix: 'utrecht-url',
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
} satisfies Meta<typeof URLValuestory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'https://example.com/',
  },
};

export const Ligatures: Story = {
  args: {
    children: 'https://example.fi/',
  },
  name: 'Ligatures',
  parameters: {
    docs: {
      description: {
        story: `Some URLs have common ligatures, for example as part of a top-level-domain.
  
  It can be helpful to avoid rendering characters together as a ligatures, such as displaying \`fi\` as \`ﬁ\`. The CSS property [\`font-variant-ligatures\`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-ligatures) can be used to disable ligatures.`,
      },
    },
  },
};

export const RightToLeftPath: Story = {
  args: {
    children: 'https://example.com/الأمثلة/',
  },
  name: 'URL with right-to-left path',
  parameters: {
    docs: {
      description: {
        story:
          'When displaying an URL in HTML, explicitly mark the text directionality as left-to-right using `dir="ltr"`, to prevent trailing non-word characters such as `/` to be misplaced in a right-to-left document. A trailing slash might end up before `http:` when the URL is in right-to-left text such as Arabic. To maintain the correct rendering even in automated translations of a document, specifically mark URLs as `dir="ltr"` even when the document as a whole is already configured as such using `<html dir="ltr">`.',
      },
    },
  },
};

export const RightToLeftTopLevelDomain: Story = {
  args: {
    children: 'https://example.شبكة/',
  },
  name: 'URL with right-to-left top-level domain',
};

const lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
laborum.`;

export const HyphenatedWebsite: Story = {
  args: {
    paragraph: lipsum,
    external: true,
    children: 'https://example.com/supercalifragilisticexpialidocious/some-hypenated-path/must-not-be/ambiguous.html',
    href: 'https://example.com/supercalifragilisticexpialidocious/some-hypenated-path/must-not-be/ambiguous.html',
  },
  name: 'URL in hypenated text',
  parameters: {
    docs: {
      description: {
        story: `Internetadressen (URLs) en e-mailadressen werken niet goed als je per ongeluk een extra koppelstreepje gebruikt. Aan het einde van een regel worden deze adressen soms per ongeluk opgeknipt met een koppelstreepje: dan is het erg onduidelijk of het streepje onderdeel is van het adres of dat het genegeerd moet worden.

Gebruik de _URL value_ component voor deze adressen om met CSS het koppelstreepje te voorkomen.`,
      },
    },
  },
  render: ({ ...props }) => {
    return <HypenatedTextWithLinks {...props} />;
  },
};

export const HyphenatedEmail: Story = {
  args: {
    paragraph: lipsum,
    external: true,
    children: 'supercalifragilisticexpialidocious@domain-with-hypen.example.com',
    href: 'mailto:supercalifragilisticexpialidocious@domain-with-hypen.example.com',
  },
  name: 'E-mail address in hypenated text',
  render: ({ ...props }) => {
    return <HypenatedTextWithLinks {...props} />;
  },
};

export const DesignTokens = designTokenStory(meta);
