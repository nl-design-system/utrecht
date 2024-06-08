import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/column-layout-css/README.md?raw';
import tokensDefinition from '@utrecht/column-layout-css/src/tokens.json';
import {
  Article,
  Button,
  ButtonGroup,
  ColumnLayout,
  Fieldset,
  FieldsetLegend,
  Heading1,
  OrderedList,
  OrderedListItem,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Column layout',
  id: 'css-column-layout',
  component: ColumnLayout,
  argTypes: {
    rule: {
      description: 'Display a rule between columns',
      control: 'boolean',
    },
  },
  args: {
    rule: false,
  },
  parameters: {
    tokensPrefix: 'utrecht-column-layout',
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
} satisfies Meta<typeof ColumnLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Heading1>Lorem ipsum</Heading1>,
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>,
    ],
  },
};

export const OrderedListColumns: Story = {
  args: {
    children: [
      <OrderedList>
        {Array(42)
          .fill(0)
          .map((_, index) => (
            <OrderedListItem>Item {index + 1}</OrderedListItem>
          ))}
      </OrderedList>,
    ],
  },
};

export const UnorderedListColumns: Story = {
  args: {
    children: [
      <UnorderedList>
        {Array(42)
          .fill(0)
          .map((_, index) => (
            <UnorderedListItem>Item {index + 1}</UnorderedListItem>
          ))}
      </UnorderedList>,
    ],
  },
};

export const ArticleColumns: Story = {
  args: {
    children: [
      <Heading1>Lorem ipsum</Heading1>,
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>,
    ],
  },
  render: () => (
    <Article style={{ '--utrecht-space-around': 1 }}>
      <Heading1>Lorem ipsum</Heading1>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>
      <ColumnLayout>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
      </ColumnLayout>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>
    </Article>
  ),
};

export const ButtonColumns: Story = {
  args: {
    children: [
      <Fieldset style={{ breakInside: 'avoid' }}>
        <FieldsetLegend>Inwoners</FieldsetLegend>
        <Fieldset>
          <FieldsetLegend>Met DigiD</FieldsetLegend>
          <ButtonGroup>
            <div className="utrecht-digid-button">
              <utrecht-digid-logo class="utrecht-digid-button__logo"></utrecht-digid-logo>
              <Button appearance="primary-action-button">Vraag adresonderzoek aan</Button>
            </div>
          </ButtonGroup>
        </Fieldset>
        <Fieldset>
          <FieldsetLegend>Zonder DigiD</FieldsetLegend>
          <ButtonGroup>
            <Button appearance="primary-action-button">Vraag adresonderzoek aan</Button>
          </ButtonGroup>
        </Fieldset>
      </Fieldset>,
      <Fieldset style={{ breakInside: 'avoid' }}>
        <FieldsetLegend>Organisaties</FieldsetLegend>
        <Fieldset>
          <FieldsetLegend>Zonder eHerkenning</FieldsetLegend>
          <ButtonGroup>
            <Button appearance="primary-action-button">Vraag adresonderzoek aan</Button>
          </ButtonGroup>
        </Fieldset>
      </Fieldset>,
    ],
    rule: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'To avoid a a break inside the `<fieldset>` element, use `break-inside: avoid`.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
