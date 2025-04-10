import { Meta, StoryObj } from '@storybook/react';
import { DataBadge } from '@utrecht/component-library-react';
import readme from '@utrecht/data-badge-css/README.md?raw';
import cssDocs from '@utrecht/data-badge-css/docs/technology-css.nl.md?raw';
import htmlDocs from '@utrecht/data-badge-css/docs/technology-css.nl.md?raw';
import tokensDefinition from '@utrecht/data-badge-css/src/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Badge/Data Badge',
  id: 'css-data-badge',
  component: DataBadge,
  args: {
    children: '',
  },
  argTypes: {
    children: {
      description: 'Text content',
      control: 'text',
    },
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fdata-badge',
    nldesignsystem: 'https://nldesignsystem.nl/data-badge',
    tokensPrefix: 'utrecht-data-badge',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: mergeMarkdown([readme, htmlDocs, cssDocs]),
      },
    },
  },
} satisfies Meta<typeof DataBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Festivals',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via the `.utrecht-data-badge` class name.',
      },
    },
  },
};

export const Value: Story = {
  args: {
    children: '≥ 250㎡',
    value: '259',
  },
  name: 'Machine-readable value',
  parameters: {
    // HTML markup cannot be tested using visual regression testing, ignore this story
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story: 'Markup using the `<data value="…">…</data>` HTML element.',
      },
    },
  },
};

export const DateValue: Story = {
  args: {
    children: 'vrijdag 18 augustus',
    dateTime: '2023-08-18',
  },
  name: 'Machine-readable date',
  parameters: {
    // HTML markup cannot be tested using visual regression testing, ignore this story
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story:
          'Markup using the `<time datetime="…">…</time>` HTML element, with a programmatically determinable ISO 8601 value in the `datetime` attribute.',
      },
    },
  },
};

export const DateTimeValue: Story = {
  args: {
    children: '21:45',
    dateTime: '2023-08-18T21:45+02:00',
  },
  name: 'Machine-readable date and time',
  parameters: {
    // HTML markup cannot be tested using visual regression testing, ignore this story
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story:
          'Markup using the `<time datetime="…">…</time>` HTML element, with a programmatically determinable ISO 8601 value in the `datetime` attribute.',
      },
    },
  },
};

export const DurationValue: Story = {
  args: {
    children: '1 uur en 39 minuten',
    dateTime: 'PT1H39M',
  },
  name: 'Machine-readable duration',
  parameters: {
    // HTML markup cannot be tested using visual regression testing, ignore this story
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story:
          'Markup using the `<time datetime="…">…</time>` HTML element, with a programmatically determinable ISO 8601 value in the `datetime` attribute.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
