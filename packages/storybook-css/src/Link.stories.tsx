/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Article, Heading2, Link, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/link/README.md?raw';
import diacriticsDocs from '@utrecht/components/link/_diacritics.md?raw';
import externalDocs from '@utrecht/components/link/_external.md?raw';
import placeholderDocs from '@utrecht/components/link/_placeholder.md?raw';
import tokensDefinition from '@utrecht/components/link/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
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
  name: 'Email',
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-link--email` class naam.',
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
