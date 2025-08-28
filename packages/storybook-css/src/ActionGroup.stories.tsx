import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/action-group-css/README.md?raw';
import tokensDefinition from '@utrecht/action-group-css/src/tokens.json';
import { ActionGroup, Button, LinkButton } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Action Group',
  id: 'css-action-group',
  component: ActionGroup,
  args: {
    children: [
      <Button appearance="primary-action-button">Save and continue</Button>,
      <Button appearance="secondary-action-button">Back</Button>,
    ],
  },
  argTypes: {
    direction: {
      description: 'Layout of the action group',
      control: 'select',
      options: {
        '': undefined,
        column: 'column',
        row: 'row',
      },
    },
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Faction-group',
    communityFigma:
      'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=4626-10492&t=CiZrkiC5t6Bn59Hg-0',
    figma:
      'https://www.figma.com/design/UXIHcIurAD8hyoBWx4hDBV/NLDS---Gemeente-Utrecht---Bibliotheek?node-id=2969-32386&t=kJatlKfN59e8T0eA-0',
    nldesignsystem: 'https://nldesignsystem.nl/action-group',
    tokensPrefix: 'utrecht-action-group',
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
} satisfies Meta<typeof ActionGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Row: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Styling via the \`.utrecht-action-group\` class name.
Er moet lege ruimte zijn tussen de actions, zodat de actions duidelijk van elkaar te onderscheiden zijn, en het niet één grote action lijkt.`,
      },
    },
  },
};

export const Column: Story = {
  args: {
    children: [
      <Button appearance="primary-action-button">Next step</Button>,
      <LinkButton inline>Save and continue an other time</LinkButton>,
      <LinkButton inline>Stop with this form</LinkButton>,
    ],
    direction: 'column',
  },
  parameters: {
    docs: {
      description: {
        story: `
Styling via the \`.utrecht-action-group\` and \`.utrecht-action-group--column\` modifier class names.
Er moet lege ruimte zijn tussen de rijen, zodat de actions duidelijk van elkaar te onderscheiden zijn, en het niet één grote action lijkt.`,
      },
    },
  },
};

export const ColumnStretch: Story = {
  args: {
    ...Row.args,
    direction: 'column-stretch',
  },
  parameters: {
    docs: {
      description: {
        story: `
Styling via the \`.utrecht-action-group\` and \`.utrecht-action-group--column-stretch\` modifier class names.
Er moet lege ruimte zijn tussen de rijen, zodat de actions duidelijk van elkaar te onderscheiden zijn, en het niet één grote action lijkt.`,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
