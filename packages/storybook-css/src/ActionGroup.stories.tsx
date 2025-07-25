import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/button-group-css/README.md?raw';
import tokensDefinition from '@utrecht/button-group-css/src/tokens.json';
import { Button, ButtonGroup } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Button Group',
  id: 'css-button-group',
  component: ButtonGroup,
  args: {
    children: [
      <Button appearance="primary-action-button">Save and continue</Button>,
      <Button appearance="secondary-action-button">Back</Button>,
    ],
  },
  argTypes: {
    direction: {
      description: 'Layout of the button group',
      control: 'select',
      options: {
        '': undefined,
        column: 'column',
        row: 'row',
      },
    },
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fbutton-group',
    communityFigma:
      'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=4626-10492&t=CiZrkiC5t6Bn59Hg-0',
    figma:
      'https://www.figma.com/design/UXIHcIurAD8hyoBWx4hDBV/NLDS---Gemeente-Utrecht---Bibliotheek?node-id=2969-32386&t=kJatlKfN59e8T0eA-0',
    nldesignsystem: 'https://nldesignsystem.nl/button-group',
    tokensPrefix: 'utrecht-button-group',
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
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Styling via the \`.utrecht-button-group\` class name.
Er moet lege ruimte zijn tussen de buttons, zodat de buttons duidelijk van elkaar te onderscheiden zijn, en het niet één grote button lijkt.`,
      },
    },
  },
};

export const DirectionColumn: Story = {
  args: {
    ...Default.args,
    direction: 'column',
  },
  parameters: {
    docs: {
      description: {
        story: `
Styling via the \`.utrecht-button-group\` and \`.utrecht-button-group--column\` modifier class names.
Er moet lege ruimte zijn tussen de rijen, zodat de buttons duidelijk van elkaar te onderscheiden zijn, en het niet één grote button lijkt.`,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
