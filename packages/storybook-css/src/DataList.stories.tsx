/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import {
  DataList,
  DataListActions,
  DataListItem,
  DataListKey,
  DataListValue,
  Link,
  LinkButton,
} from '@utrecht/component-library-react';
import readme from '@utrecht/data-list-css/README.md?raw';
import anatomyDocs from '@utrecht/data-list-css/docs/anatomy.nl.md?raw';
import failureDocs from '@utrecht/data-list-css/docs/failure.nl.md?raw';
import referencesDocs from '@utrecht/data-list-css/docs/references.nl.md?raw';
import htmlDocs from '@utrecht/data-list-css/docs/technology-html.nl.md?raw';
import translateDocs from '@utrecht/data-list-css/docs/translate.nl.md?raw';
import usageDocs from '@utrecht/data-list-css/docs/usage.nl.md?raw';
import wcagDocs from '@utrecht/data-list-css/docs/wcag.nl.md?raw';
import tokensDefinition from '@utrecht/data-list-css/src/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import React, { ReactNode } from 'react';
import { designTokenStory } from './design-token-story';

const arabicDecorator = (Story) => (
  <div dir="rtl" lang="ar">
    {Story()}
  </div>
);

interface DataListStoryProps {
  appearance?: string | '' | 'rows';
  items: {
    actions?: ReactNode;
    key: ReactNode;
    keyId?: string;
    value: ReactNode;
    multiline?: boolean;
  }[];
}

const DataListStory = ({ appearance, items }: DataListStoryProps) => (
  <DataList appearance={appearance}>
    {items.map(({ key, keyId, value, actions, multiline }) => (
      <DataListItem>
        <DataListKey id={keyId}>{key}</DataListKey>
        <DataListValue multiline={multiline}>{value}</DataListValue>
        {actions && <DataListActions>{actions}</DataListActions>}
      </DataListItem>
    ))}
  </DataList>
);

const meta = {
  title: 'CSS Component/Data list',
  id: 'css-data-list',
  component: DataListStory,
  argTypes: {
    items: {
      description: 'Data list items',
      type: {
        name: 'array',
        required: true,
      },
    },
    appearance: {
      description: 'Appearance',
      options: ['', 'rows'],
      control: { type: 'select' },
    },
  },
  args: {
    appearance: '',
    items: [],
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fdata-list',
    communityFigma:
      'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=1238-4478&t=CiZrkiC5t6Bn59Hg-0',
    nldesignsystem: 'https://nldesignsystem.nl/summary-list',
    tokensPrefix: 'utrecht-data-list',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: mergeMarkdown([
          readme,
          usageDocs,
          anatomyDocs,
          translateDocs,
          htmlDocs,
          failureDocs,
          referencesDocs,
          wcagDocs,
        ]),
      },
    },
  },
} satisfies Meta<typeof DataListStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    appearance: 'rows',
    items: [
      {
        key: 'Voornaam',
        value: 'Mees',
      },
      {
        key: 'Achternaam',
        value: 'de Vos',
      },
      {
        key: 'Adres',
        value: 'Tweede Kamer der Staten-Generaal\nPostbus 20018\n2500 EA Den Haag',
        multiline: true,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via `utrecht-data-list` class name.',
      },
    },
  },
};

export const ActionLink: Story = {
  args: {
    appearance: 'rows',
    items: [
      {
        key: 'Voornaam',
        keyId: '993b9f5a-9cb8-454d-8408-9e0fa3125c28',
        value: 'Mees',
        actions: (
          <Link
            href="./form-step-1#given-name"
            id="f8b0b08f-8b59-48b8-bef1-c2b78d76564a"
            aria-labelledby="f8b0b08f-8b59-48b8-bef1-c2b78d76564a 993b9f5a-9cb8-454d-8408-9e0fa3125c28"
          >
            Edit
          </Link>
        ),
      },
    ],
  },
  name: 'Action link',
};

export const ActionButton: Story = {
  args: {
    appearance: 'rows',
    items: [
      {
        key: 'Voornaam',
        keyId: '720feb7a-8c3d-42ac-96c5-ee7a62c9d75d',
        value: 'Mees',
        actions: (
          <LinkButton
            inline
            id="33bd9956-ca7a-4613-adf3-c42631981303"
            aria-labelledby="33bd9956-ca7a-4613-adf3-c42631981303 720feb7a-8c3d-42ac-96c5-ee7a62c9d75d"
          >
            Edit
          </LinkButton>
        ),
      },
    ],
  },
  name: 'Action button',
};

const rtlLtrStory =
  'When the label is left-to-right, and the value is right-to-left (or the other way around). In that case the distance between the key and the value might be too great, and become unclear.';

export const RightToLeftValue: Story = {
  args: {
    appearance: 'rows',
    items: [
      {
        key: 'Voornaam',
        value: 'علي,',
      },
    ],
  },
  name: 'Right-to-left value',
  parameters: {
    docs: {
      description: {
        story: rtlLtrStory,
      },
    },
  },
};

export const RightToLeftKey: Story = {
  args: {
    appearance: 'rows',
    items: [
      {
        key: 'الاسم الأول',
        value: 'Mees',
      },
    ],
  },
  decorators: [arabicDecorator],
  name: 'Right-to-left key',
  parameters: {
    docs: {
      description: {
        story: rtlLtrStory,
      },
    },
  },
};

export const RightToLeftActionButton: Story = {
  args: {
    appearance: 'rows',
    items: [
      {
        key: 'الاسم الأول',
        keyId: '3a44adbc-5e75-47cd-8ac5-de6af62af0f0',
        value: 'علي,',
        actions: (
          <LinkButton
            inline
            id="c2150d4a-6067-4343-9b70-025587c80d8d"
            aria-labelledby="c2150d4a-6067-4343-9b70-025587c80d8d 3a44adbc-5e75-47cd-8ac5-de6af62af0f0"
          >
            صحح
          </LinkButton>
        ),
      },
    ],
  },
  decorators: [arabicDecorator],
  name: 'Right-to-left actions',
};

export const DesignTokens = designTokenStory(meta);
