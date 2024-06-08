import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/badge-counter-css/README.md?raw';
import tokensDefinition from '@utrecht/badge-counter-css/src/tokens.json';
import type { BadgeCounterProps } from '@utrecht/component-library-react';
import { BadgeCounter } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React, { PropsWithChildren } from 'react';
import { designTokenStory } from './design-token-story';

interface BadgeCounterStoryProps extends BadgeCounterProps {
  dir?: string;
  lang?: string;
}

const BadgeCounterStory = ({ children, dir, lang, value }: PropsWithChildren<BadgeCounterStoryProps>) => {
  let formattedChildren = children;

  if (typeof lang === 'string' && typeof value !== 'undefined') {
    formattedChildren = new Intl.NumberFormat(lang, { style: 'decimal' }).format(parseFloat(value));
  }

  let content = <BadgeCounter value={value}>{formattedChildren}</BadgeCounter>;

  if (typeof lang === 'string' || typeof dir === 'string') {
    content = (
      <div dir={dir} lang={lang}>
        {content}
      </div>
    );
  }

  return content;
};

const meta = {
  title: 'CSS Component/Badge Counter',
  id: 'css-badge-counter',
  component: BadgeCounterStory,
  args: {
    children: '4',
    value: '4',
  },
  argTypes: {
    children: {
      name: 'Text content',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: '' } },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-badge-counter',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        story: readme,
      },
    },
  },
} satisfies Meta<typeof BadgeCounterStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DoubleDigits: Story = {
  args: {
    ...Default.args,
    children: '42',
    value: '42',
  },
};

export const TripleDigits: Story = {
  args: {
    ...Default.args,
    children: '316',
    value: '316',
  },
};

export const QuadrupleDigits: Story = {
  args: {
    ...Default.args,
    children: '2148',
    value: '2148',
  },
};

const gatherLocaleEvidence =
  'TODO: Gather evidence that in this locale badges with numbers are typically formatted using localized digits, or if for reasons digits from the English locale are preferred.';

export const Arabic: Story = {
  args: {
    ...Default.args,
    lang: 'ar',
    dir: 'rtl',
    value: 2148,
  },
  name: 'Arabic',
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: gatherLocaleEvidence,
      },
    },
    status: {
      type: 'ALPHA',
    },
  },
};

export const Dutch: Story = {
  args: {
    ...Default.args,
    lang: 'nl',
    value: '2148',
  },
  name: 'Dutch',
  parameters: {
    chromatic: { disableSnapshot: true },
    status: {
      type: 'BETA',
    },
  },
};

export const Switzerland: Story = {
  args: {
    ...Default.args,
    lang: 'de-CH',
    value: '2148',
  },
  name: 'Switzerland',
  parameters: {
    docs: {
      description: {
        story: gatherLocaleEvidence,
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'ALPHA',
    },
  },
};

export const English: Story = {
  args: {
    ...Default.args,
    lang: 'en',
    value: '2148',
  },
  name: 'English',
  parameters: {
    chromatic: { disableSnapshot: true },
    status: {
      type: 'BETA',
    },
  },
};

const europeanUnionLanguages = [
  { label: 'Bulgarian', lang: 'bg' },
  { label: 'Croatian', lang: 'hr' },
  { label: 'Czech', lang: 'cs' },
  { label: 'Danish', lang: 'da' },
  { label: 'Dutch', lang: 'nl' },
  { label: 'English', lang: 'en' },
  { label: 'Estonian', lang: 'et' },
  { label: 'Finnish', lang: 'fi' },
  { label: 'French', lang: 'fr' },
  { label: 'German', lang: 'de' },
  { label: 'Greek', lang: 'el' },
  { label: 'Hungarian', lang: 'hu' },
  { label: 'Irish', lang: 'ga' },
  { label: 'Italian', lang: 'it' },
  { label: 'Latvian', lang: 'lv' },
  { label: 'Lithuanian', lang: 'lt' },
  { label: 'Maltese', lang: 'mt' },
  { label: 'Polish', lang: 'pl' },
  { label: 'Portuguese', lang: 'pt' },
  { label: 'Romanian', lang: 'ro' },
  { label: 'Slovak', lang: 'sk' },
  { label: 'Slovenian', lang: 'sl' },
  { label: 'Spanish', lang: 'es' },
  { label: 'Swedish', lang: 'sv' },
];

export const EULanguages: Story = {
  args: {
    ...Default.args,
    value: '2148',
  },
  name: 'EU Languages',
  render: ({ value = 2148 }: { value?: number | string }) => (
    <dl lang="en">
      {europeanUnionLanguages.map(({ label, lang }) => (
        <div>
          <dt>{label}:</dt>
          <dd>
            <BadgeCounterStory lang={lang} value={String(value)} />
          </dd>
        </div>
      ))}
    </dl>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'This list contains the 24 official languages of the EU as of 2013 (with Croation as the most recent addition), but not necessarily all relevant locales.',
      },
    },
    chromatic: { disableSnapshot: true },
    status: {
      type: 'ALPHA',
    },
  },
};

export const Farsi: Story = {
  args: {
    ...Default.args,
    dir: 'rtl',
    lang: 'fa',
    value: '2148',
  },
  name: 'Farsi',
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: gatherLocaleEvidence,
      },
    },
    status: {
      type: 'ALPHA',
    },
  },
};

export const Empty: Story = {
  args: {
    ...Default.args,
    children: '',
    value: undefined,
  },
  parameters: {
    ...Default.parameters,
    docs: {
      ...Default.parameters?.['docs'],
      description: {
        story: `Wanneer de counter badge leeg is, zoals in een UI designer interface, dan moet de component wel zichtbaar zijn. De gebruiker moet er een getal in kunnen typen.`,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
