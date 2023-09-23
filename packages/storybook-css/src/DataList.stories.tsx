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
import readme from '@utrecht/components/data-list/README.md?raw';
import tokensDefinition from '@utrecht/components/data-list/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React, { ReactNode } from 'react';
import { designTokenStory } from './design-token-story';

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
    tokensPrefix: 'utrecht-data-list',
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

export const DesignTokens = designTokenStory(meta);
