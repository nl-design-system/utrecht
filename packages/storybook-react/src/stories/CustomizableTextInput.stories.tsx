/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconCalendar, IconSearch } from '@tabler/icons-react';
import { Button, Icon } from '@utrecht/component-library-react';
import readme from '@utrecht/customizable-text-input-css/README.md?raw';
import anatomyDocs from '@utrecht/customizable-text-input-css/docs/anatomy.nl.md?raw';
import tokensDefinition from '@utrecht/customizable-text-input-css/src/tokens.json';
import { CustomizableTextInput } from '@utrecht/customizable-text-input-react';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import { Textbox } from '@utrecht/textbox-react';
import { ReactNode } from 'react';
import { designTokenStory } from './util.js';

const TextWrapper = ({ children }: { children: ReactNode }) => (
  <span style={{ display: 'block', paddingInline: 'var(--utrecht-space-inline-xs)' }}>{children}</span>
);

const meta = {
  title: 'React Component/CustomizableTextInput',
  id: 'react-customizable-text-input',
  component: CustomizableTextInput,
  argTypes: {
    inputId: {
      description: 'Koppelt start en end aan de text input en zorgt dat deze klikbaar zijn',
      control: 'text',
    },
    children: {
      description: 'Hier plaats je de text input',
    },
    start: {
      description: 'Tekst, element of icoon dat wordt weergegeven aan het begin van de text input',
      control: 'object',
    },
    end: {
      description: 'Tekst, element of icoon dat wordt weergegeven aan het einde van de text input',
      control: 'object',
    },

    labelStart: {
      description: 'Tekst aan het begin van de text input, doet mee aan de label functionaliteit',
      control: 'object',
    },
    labelEnd: {
      description: 'Tekst aan het einde van de text input, doet mee aan de label functionaliteit',
      control: 'object',
    },

    actionStart: {
      description: 'Interactief element aan het begin van de text input, zoals een knop of input',
      control: 'object',
    },
    actionEnd: {
      description: 'Interactief element aan het eind van de text input, zoals een knop of input',
      control: 'object',
    },
  },
  args: {
    children: <Textbox id="textbox-default" defaultValue="The quick brown fox jumps over the lazy dog" />,
  },
  tags: ['autodocs'],
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fcustomizable-text-input',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-customizable-text-input',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: mergeMarkdown([readme, anatomyDocs]),
      },
    },
  },
} satisfies Meta<typeof CustomizableTextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithStart: Story = {
  name: 'Icon in start',
  args: {
    start: (
      <TextWrapper>
        <Icon>
          <IconSearch />
        </Icon>
      </TextWrapper>
    ),
  },
};

export const WithEnd: Story = {
  name: 'Icon in end',
  args: {
    end: (
      <TextWrapper>
        <Icon>
          <IconSearch />
        </Icon>
      </TextWrapper>
    ),
  },
};

export const WithStartAndEnd: Story = {
  name: 'Icon in start and end',
  args: {
    start: (
      <TextWrapper>
        <Icon>
          <IconSearch />
        </Icon>
      </TextWrapper>
    ),
    end: (
      <TextWrapper>
        <Icon>
          <IconSearch />
        </Icon>
      </TextWrapper>
    ),
  },
};

export const WithClickableSlots: Story = {
  name: 'Clickable slots',
  args: {
    start: (
      <TextWrapper>
        <Icon>
          <IconSearch />
        </Icon>
      </TextWrapper>
    ),
    end: (
      <TextWrapper>
        <Icon>
          <IconSearch />
        </Icon>
      </TextWrapper>
    ),
    inputId: 'linked-slots-input',
    children: <Textbox id="linked-slots-input" defaultValue="The quick brown fox jumps over the lazy dog" />,
  },
};

export const WithLabelStart: Story = {
  name: 'Label start',
  args: {
    labelStart: <TextWrapper>kWh</TextWrapper>,
    inputId: 'label-start-input',
    children: <Textbox id="label-start-input" defaultValue="The quick brown fox jumps over the lazy dog" />,
  },
};

export const WithLabelEnd: Story = {
  name: 'Label end',
  args: {
    labelEnd: <TextWrapper>kWh</TextWrapper>,
    inputId: 'label-end-input',
    children: <Textbox id="label-end-input" defaultValue="The quick brown fox jumps over the lazy dog" />,
  },
};

export const WithLabelStartEnd: Story = {
  name: 'Label start & end',
  args: {
    labelStart: <TextWrapper>Verbruik</TextWrapper>,
    labelEnd: <TextWrapper>kWh</TextWrapper>,
    inputId: 'label-start-end-input',
    children: <Textbox id="label-start-end-input" defaultValue="The quick brown fox jumps over the lazy dog" />,
  },
};

export const WithSubtleButton: Story = {
  name: 'Action slot met subtle button',
  args: {
    end: undefined,
    actionEnd: (
      <Button appearance="subtle-button" aria-haspopup="dialog" aria-label="Open/sluit kalender">
        <Icon>
          <IconCalendar />
        </Icon>
      </Button>
    ),
  },
};

export const DesignTokens = designTokenStory(meta);
