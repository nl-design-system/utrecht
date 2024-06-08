/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Article, Heading2, Icon, Link, Paragraph, URLData } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/link-css/README.md?raw';
import diacriticsDocs from '@utrecht/link-css/_diacritics.md?raw';
import externalDocs from '@utrecht/link-css/_external.md?raw';
import placeholderDocs from '@utrecht/link-css/_placeholder.md?raw';
import tokensDefinition from '@utrecht/link-css/src/tokens.json';
import React from 'react';
import { LinkStory } from './Link';
import { designTokenStory } from './design-token-story';

const arabicDecorator = (Story) => (
  <div dir="rtl" lang="ar">
    {Story()}
  </div>
);

const meta = {
  title: 'CSS Component/Link',
  id: 'css-link',
  component: LinkStory,
  argTypes: {
    active: {
      description: 'Active',
      control: 'boolean',
    },
    'aria-current': {
      name: 'aria-current',
      control: { type: 'select' },
      options: {
        '': undefined,
        page: 'page',
        step: 'step',
        location: 'location',
        date: 'date',
        time: 'time',
        true: 'true',
        false: 'false',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    'aria-label': {
      description: 'Provide the full accessible name here if the accessible name cannot be used as text content.',
      control: 'text',
    },
    boxContent: {
      description: 'Content is a box, such as an image or a section, not just text',
      control: 'boolean',
    },
    external: {
      description: 'External',
      control: 'boolean',
    },
    hover: {
      description: 'Hover',
      control: 'boolean',
    },
    focus: {
      description: 'Focus',
      control: 'boolean',
    },
    focusVisible: {
      description: 'Focus visible',
      control: 'boolean',
    },
    href: {
      description: 'Target URL',
      type: {
        name: 'string',
        required: true,
      },
    },
    tabIndex: {
      description: 'Tabindex',
      type: {
        name: 'string',
        required: false,
      },
      control: { type: 'select' },
      options: {
        '': undefined,
        '0: included in tab order': '0',
        '-1: excluded from tab order': '-1',
      },
    },
    telephone: {
      description: 'Link to telephone number',
      control: 'boolean',
    },
    children: {
      description: 'Link text',
      type: {
        name: 'string',
        required: true,
      },
    },
    visited: {
      description: 'Visited',
      control: 'boolean',
    },
    placeholder: {
      description: 'Placeholder for a link',
      control: 'boolean',
    },
  },
  args: {
    active: false,
    'aria-label': '',
    boxContent: false,
    'aria-current': false,
    external: false,
    hrefLang: '',
    hover: false,
    lang: '',
    focus: false,
    focusVisible: false,
    href: '',
    placeholder: false,
    tabIndex: '',
    telephone: false,
    visited: false,
  },
  parameters: {
    tokensPrefix: 'utrecht-link',
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof LinkStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Voorbeeldlink',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Styling via `utrecht-link` and `utrecht-link--html-a` class name. The `utrecht-link--html-a` enables pseudo-selector effects, like `:hover` and `:visited`.',
      },
    },
  },
};

export const Hover: Story = {
  args: {
    children: 'Voorbeeldlink',
    hover: true,
  },
  name: 'Hover',
  parameters: {
    docs: {
      description: {
        story:
          'Simuleer styling met de `.utrecht-link--hover` class naam of als state op link met `.utrecht-link:hover`.',
      },
    },
  },
};

export const Active: Story = {
  args: {
    children: 'Voorbeeldlink',
    active: true,
  },
  name: 'Active',
  parameters: {
    docs: {
      description: {
        story:
          'Simuleer styling met de `.utrecht-link--active` class naam of als state op link met `.utrecht-link:active`.',
      },
    },
  },
};

export const Focus: Story = {
  args: {
    children: 'Voorbeeldlink',
    focus: true,
  },
  name: 'Focus',
  parameters: {
    docs: {
      description: {
        story: `Focus kan op twee verschillende manieren worden aangebracht op een element. Met de \`Tab\` knop van het keyboard die \`.utrecht-link:focus\` zet en ook door te klikken op de link.

Simuleer styling met de \`.utrecht-link--focus\` class naam of als state op link met \`.utrecht-link:focus\`.`,
      },
    },
  },
};

export const FocusVisibleHover: Story = {
  args: {
    children: 'Voorbeeldlink',
    hover: true,
    focus: true,
    focusVisible: true,
  },
  name: 'Focus-visible and hover',
};

export const FocusVisible: Story = {
  args: {
    children: 'Voorbeeldlink',
    focus: true,
    focusVisible: true,
  },
  name: 'Focus-visible',
  parameters: {
    docs: {
      description: {
        story:
          'Simuleer styling met de `.utrecht-link--focus` en `.utrecht-link--focus-visible` class naam of als state op link met `.utrecht-link:focus-visible`.',
      },
    },
  },
};

const aHrefAlternative =
  'Links with `<a href="">` as markup work like this automatically, but for other elements that are styled like a link this must be styled explicitly.';

export const ForcedColors: Story = {
  args: {
    children: 'Voorbeeldlink',
    forcedColors: true,
  },
  name: 'Forced colors',
  parameters: {
    docs: {
      description: {
        story: `In forced-colors mode the link text should be \`color: LinkText\`.

${aHrefAlternative}

Simulate forced-colors with the \`utrecht-link--forced-colors\` class name.`,
      },
    },
  },
};

export const ForcedColorsVisited: Story = {
  args: {
    children: 'Voorbeeldlink',
    forcedColors: true,
    visited: true,
  },
  name: 'Forced colors visited',
  parameters: {
    docs: {
      description: {
        story: `In forced-colors mode the link text should be \`color: VisitedText\`, unless there is a privacy concern in making visited links visible.

${aHrefAlternative}

Simulate forced-colors with the \`utrecht-link--forced-colors\` and \`utrecht-link--visited\` class names.`,
      },
    },
  },
};

export const ForcedColorsFocusActive: Story = {
  args: {
    active: true,
    children: 'Voorbeeldlink',
    forcedColors: true,
  },
  name: 'Forced colors with active',
  parameters: {
    docs: {
      description: {
        story: `In forced-colors mode the link text should be \`color: ActiveText\`. ${aHrefAlternative}

Simulate forced-colors with the \`utrecht-link--forced-colors\` and \`utrecht-link--active\` class names.`,
      },
    },
  },
};

export const ForcedColorsDisabled: Story = {
  args: {
    children: 'Voorbeeldlink',
    forcedColors: true,
    placeholder: true,
  },
  name: 'Forced colors placeholder',
  parameters: {
    docs: {
      description: {
        story: `In forced-colors mode the disabled links should be \`color: GrayText\`. ${aHrefAlternative}

Simulate forced-colors with the \`utrecht-link--forced-colors\` and \`utrecht-link--placeholder\` class names.`,
      },
    },
  },
};

export const ForcedColorsFocusVisible: Story = {
  args: {
    children: 'Voorbeeldlink',
    forcedColors: true,
    focus: true,
    focusVisible: true,
  },
  name: 'Forced colors with focus-visible',
  parameters: {
    docs: {
      description: {
        story: `In forced-colors mode a link with focus-visible should have a focus ring with \`Highlight\` as color. ${aHrefAlternative}`,
      },
    },
  },
};

export const ForcedColorsIcon: Story = {
  args: {
    children: [
      <Icon>
        <svg viewBox="0 0 32 32">
          <rect fill="currentColor" x="0" y="0" width="32" height="32" />
        </svg>
      </Icon>,
      ' Voorbeeldlink',
    ],
    forcedColors: true,
  },
  name: 'Forced colors with icon',
  parameters: {
    docs: {
      description: {
        story: `In forced-colors mode icons in a link are best visible, when the SVG icon uses \`currentColor\` as fill and stroke color.`,
      },
    },
  },
};

export const Visited: Story = {
  args: {
    children: 'Voorbeeldlink',
    visited: true,
  },
  name: 'Visited',
  parameters: {
    docs: {
      description: {
        story:
          'Simuleer styling met de `.utrecht-link--visited` class naam of als state op link met `.utrecht-link:visited`.',
      },
    },
  },
};

export const AlternateLang: Story = {
  args: {
    href: 'https://example.com/en',
    rel: 'alternate',
    hrefLang: 'en',
    lang: 'en',
    children: 'This page in English',
  },
  name: 'Alternate language',
  parameters: {
    docs: {
      description: {
        story: 'Styling via de `.utrecht-link--alternate-lang` modifier class name.',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const CurrentLang: Story = {
  args: {
    href: 'https://example.com/en',
    'aria-current': 'true',
    hrefLang: 'en',
    lang: 'en',
    children: 'EN',
    'aria-label': 'This page in English',
  },
  name: 'Current language',
  parameters: {
    docs: {
      description: {
        story: 'Styling via de `.utrecht-link--current-lang` modifier class name.',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

const ExampleImage = <img src="logo.svg" width="192" height="100" alt="Wapen van de Gemeente Utrecht" />;

export const Image: Story = {
  args: {
    boxContent: true,
    children: ExampleImage,
  },
  name: 'Image',
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-link--box-content` class naam.',
      },
    },
    status: {
      type: 'ALPHA',
    },
  },
};

export const ImageFocusVisible: Story = {
  args: {
    boxContent: true,
    children: ExampleImage,
    focus: true,
    focusVisible: true,
  },
  name: 'Image link with focus',
  parameters: {
    docs: {
      description: {
        story:
          'Styling met de `.utrecht-link--focus-visible` class naam of als status op `.utrecht-link:focus-visible`.',
      },
    },
    status: {
      type: 'ALPHA',
    },
  },
};

export const Telephone: Story = {
  args: {
    href: 'tel:+31555385385',
    children: '+31 555 385 385',
    telephone: true,
  },
  name: 'Telephone',
  parameters: {
    docs: {
      description: {
        story:
          'Styling met de `.utrecht-link--telephone` class naam. We gebruiken `white-space: nowrap` om line wrapping te voorkomen bij een telefoonnummer, zodat deze goed leesbaar blijft.',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const Placeholder: Story = {
  args: {
    ...Default.args,
    placeholder: true,
  },
  name: 'Placeholder',
  parameters: {
    docs: {
      description: {
        story: placeholderDocs,
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const PlaceholderHover: Story = {
  args: {
    ...Default.args,
    placeholder: true,
    hover: true,
  },
  name: 'Placeholder hover',
  parameters: {
    docs: {
      description: {
        story:
          'Placeholder links should not have any hover effect, because they have no action and a hover would incorrectly indicate interactive behavior.',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const PlaceholderFocus: Story = {
  args: {
    ...Default.args,
    placeholder: true,
    focus: true,
  },
  name: 'Placeholder focus',
  parameters: {
    docs: {
      description: {
        story: `Placeholder links should not have any active effect, because they have no action and a active would incorrectly indicate interactive behavior.

The \`cursor\` should indicate that activating the link is currently not allowed (\`cursor: not-allowed\`), to indicate there is an action which is currently blocked.`,
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const PlaceholderActive: Story = {
  args: {
    ...Default.args,
    placeholder: true,
    active: true,
    focus: true,
  },
  name: 'Placeholder active',
  parameters: {
    docs: {
      description: {
        story:
          'Placeholder links should not have any hover effect, because they have no action and a hover would incorrectly indicate interactive behavior.',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const PlaceholderFocusVisible: Story = {
  args: {
    ...Default.args,
    focus: true,
    focusVisible: true,
    tabIndex: '0',
    placeholder: true,
  },
  name: 'Placeholder with focus-visible',
  parameters: {
    docs: {
      description: {
        story:
          'Placeholder links have are not focusable by default, but they can be made focusable using `tabindex="0"`. ` When `focus-visible` applies to a placeholder link, the focus ring should be consistent with the focus ring of interactive links.',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const External: Story = {
  args: {
    external: true,
    href: 'https://www.whatismyreferer.com',
    children: 'Voorbeeldlink',
  },
  name: 'External',
  parameters: {
    docs: {
      description: {
        story: externalDocs,
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const Diacritics: Story = {
  args: {
    href: 'mailto:info@example.com',
    children: 'تواصل معنا من خلال البريد الإلكتروني',
    mail: true,
  },
  decorators: [arabicDecorator],
  name: 'Arabic link text',
  parameters: {
    docs: {
      description: {
        story: diacriticsDocs,
      },
    },
  },
};

export const Email: Story = {
  args: {
    href: 'mailto:info@example.com',
    children: 'info@example.com',
    mail: true,
  },
  name: 'E-mail',
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-link--mailto` class naam.',
      },
    },
  },
};

export const URLDataStory: Story = {
  args: {
    href: 'https://example.fi/',
    children: <URLData>https://example.fi/</URLData>,
  },
  name: 'URL data',
  parameters: {
    docs: {
      description: {
        story: 'Combineer `.utrecht-link` met `utrecht-url-data` voor links die de URL als link tekst hebben.',
      },
    },
  },
};

export const URLDataRightToLeftStory: Story = {
  args: {
    href: 'https://example.fi/',
    children: <URLData>https://example.fi/</URLData>,
  },
  decorators: [arabicDecorator],
  name: 'URL data (right-to-left)',
  parameters: {
    docs: {
      description: {
        story:
          'Combineer `.utrecht-link` met het `<bdi>` element van de URL component voor links die de URL als link tekst hebben. Voorkom dat `https://example.com/` weergegeven wordt als `/https://example.com`.',
      },
    },
  },
};

export const TabIndex: Story = {
  args: {
    href: 'https://www.example.com/',
    tabIndex: -1,
    children: 'Lees meer...',
    'aria-labelledby': 'heading',
  },
  decorators: [
    (Story) => (
      <Article>
        <Heading2 id="heading">
          <Link href="http://www.example.com/">Puppy met zes poten</Link>
        </Heading2>
        <Paragraph>In de gemeente Monster is een puppy geboren met zes poten. {Story()}</Paragraph>
      </Article>
    ),
  ],
  name: 'Tabindex',
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: 'Link met aangepaste `tabindex`',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
